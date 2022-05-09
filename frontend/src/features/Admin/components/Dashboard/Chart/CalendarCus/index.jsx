import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from "dayjs"
import range from "lodash-es/range"
import "./CalendarCus.scss"
import ModalDetail from './ModalDetail';


CalendarCus.propTypes = {

};

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const todayObj = dayjs()

function CalendarCus(props) {
    const { arrDate, handleSetTitle, handleIsOpen, handleSetDateBooking } = props
    const [dayObj, setDayObj] = useState(dayjs())
    const [daysInMonth, setDaysInMonth] = useState(dayObj.daysInMonth())

    const thisYear = dayObj.year()
    const thisMonth = dayObj.month() // (January as 0, December as 11)
    // const daysInMonth = dayObj.daysInMonth()

    const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`)
    const weekDayOf1 = dayObjOf1.day() // (Sunday as 0, Saturday as 6)

    const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`)
    const weekDayOfLast = dayObjOfLast.day()

    const handlePrev = () => {
        setDayObj(dayObj.subtract(1, "month"))
    }

    const handleNext = () => {
        setDayObj(dayObj.add(1, "month"))
    }
    // console.log('daysInMonth: ', range(daysInMonth));
    // console.log('thisMonth: ', thisMonth);
    // console.log('thisYear: ', thisYear);
    // console.log('arrDate: ', arrDate);

    return (
        <div className="calendar">
            <div className="header">
                <button type="button" className="nav nav--prev" onClick={handlePrev}>
                    &lt;
                </button>
                <div className="datetime">{dayObj.format("MMM DD YYYY")}</div>
                <button type="button" className="nav nav--prev" onClick={handleNext}>
                    &gt;
                </button>
            </div>
            <div className="week-container">
                {weekDays.map(d => (
                    <div className="week-cell" key={d}>
                        {d}
                    </div>
                ))}
            </div>
            <div className="day-container">
                {range(weekDayOf1).map(i => (
                    <div className="day-cell day-cell--faded" key={i}>
                        {dayObjOf1.subtract(weekDayOf1 - i, "day").date()}
                    </div>
                ))}

                {
                    range(daysInMonth).map((i) => {
                        let tmp = "day-cell day-cell--in-month"
                        if (arrDate !== null) {
                            arrDate.forEach((item) => {
                                if (i + 1 === item.getDate() && thisMonth === item.getMonth() && thisYear === item.getFullYear()) {
                                    tmp = "day-cell day-cell--in-month day-cell--today";
                                }
                            })
                        }
                        return (
                            <div
                                className={tmp}
                                key={i}
                                onClick={(e) => {
                                    // console.log(thisYear + "-" + thisMonth + "-" + e.target.innerText);
                                    let currMonth = ''
                                    if (thisMonth < 9) {
                                        currMonth = `0${thisMonth + 1}`
                                    }
                                    else {
                                        currMonth = `${thisMonth + 1}`
                                    }
                                    handleIsOpen()
                                    handleSetTitle(`List booking service on ${thisYear + "-" + currMonth + "-" + e.target.innerText}`)
                                    handleSetDateBooking(thisYear + "-" + currMonth + "-" + e.target.innerText)
                                }}
                            >
                                {i + 1}
                            </div>
                        )
                    })
                }

                {range(6 - weekDayOfLast).map(i => (
                    <div className="day-cell day-cell--faded" key={i}>
                        {dayObjOfLast.add(i + 1, "day").date()}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CalendarCus;