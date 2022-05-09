import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import billAPI from '../../../../../../api/billApi'
import moment from 'moment';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import bookingServiceApi from '../../../../../../api/bookingServiceApi';
import { Skeleton, Text, Select, Box } from '@chakra-ui/react';
import bookServiceAPI from '../../../../../../api/bookServiceApi';


ChartLine.propTypes = {

};

const formatDate = (date) => {
    return {
        month: moment(date).format('MM'),
        year: moment(date).format('YYYY'),
    }
}
const listName = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
let dataChart = []
function ChartLine(props) {
    const [listBooking, setListBooking] = useState(null)
    const [listBill, setListBill] = useState(null)
    const [chooseYear, setChooseYear] = useState('2022')

    useEffect(() => {
        dataChart = []
        const getAllBill = async () => {
            const params = {
                page: 0,
                size: 999,
            }
            const response = await billAPI.getBills(params)
            const { data } = response.data
            let listBills = []
            data.bills.map((item) => {
                return (listBills.push({
                    ...item,
                    month: moment(item.paymentDate).format('MM'),
                    year: moment(item.paymentDate).format('YYYY'),
                }))
            })
            setListBill(listBills)
        }
        const getBookings = async () => {
            const params = {
                page: 0,
                size: 999,
            }
            const response = await bookServiceAPI.getAllBooking(params)
            const { data } = response.data
            let listBookings = []
            data.bookingServices.map((item) => {
                return (listBookings.push({
                    ...item,
                    month: moment(item.dateBooking).format('MM'),
                    year: moment(item.dateBooking).format('YYYY'),
                }))
            })
            setListBooking(listBookings)
        }
        getAllBill()
        getBookings()
        listName.forEach((item, index) => {
            dataChart[index] = {
                name: item,
                bill: 0,
                booking: 0,
            }
        })
    }, [chooseYear])
    const handleData = () => {
        if (listBill !== null && listBooking !== null) {
            listName.forEach((item, index) => {
                dataChart[index] = {
                    name: item,
                    bill: 0,
                    booking: 0,
                }
            })
            dataChart.forEach((item, index) => {
                if (listBill !== null) {
                    listBill.forEach((bill) => {
                        if (item.name === bill.month && chooseYear === bill.year) {
                            dataChart[index] = {
                                ...dataChart[index],
                                bill: dataChart[index].bill + bill.price
                            }
                        }
                    })

                }
                if (listBooking !== null) {
                    listBooking.forEach((booking) => {
                        if (item.name === booking.month && chooseYear === booking.year) {
                            dataChart[index] = {
                                ...dataChart[index],
                                booking: dataChart[index].booking + booking.service.price
                            }
                        }
                    })
                }
            })
        }

    }
    handleData()
    return (
        <>
            {dataChart.length !== 0 && listBill !== null && listBooking !== null ?
                <>
                    <Box maxWidth='20%'
                        float='right'
                        marginRight='16px'
                    // marginBottom='20px'
                    >
                        <Select placeholder='Choose Year'
                            onChange={(e) => {
                                setChooseYear(e.target.value)
                            }}
                        >
                            <option value='2022'>2022</option>
                            <option value='2023'>2023</option>
                            <option value='2024'>2024</option>
                            <option value='2025'>2025</option>
                            <option value='2026'>2026</option>
                        </Select>
                    </Box>
                    <Box
                        position='relative'
                        top='36px'
                    >
                        <AreaChart
                            width={1151}
                            height={400}
                            data={dataChart}
                            margin={{
                                top: 0,
                                right: 20,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="bill" stackId="1" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="booking" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        </AreaChart>
                        <Text marginTop='40px' textTransform='uppercase' fontWeight='bold' textAlign='center'>Revenue chart for the year(unit: $)</Text>
                    </Box>
                </> :
                <Skeleton height='400px' width='1152px' />
            }
        </>
    );
}

export default ChartLine;