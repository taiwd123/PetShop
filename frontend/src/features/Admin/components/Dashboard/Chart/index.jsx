import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ChartCategory from './ChartCategory';
import { Box, Flex } from '@chakra-ui/react'
import moment from 'moment';
import ChartLine from './ChartLine';
import bookServiceAPI from '../../../../../api/bookServiceApi';
import CalendarCus from './CalendarCus'
import ModalDetail from './CalendarCus/ModalDetail';

ChartAdmin.propTypes = {

};
const CheckIsArr = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toDateString() === value.toDateString()) {
            return false
        }
    }
    return true
}

function ChartAdmin(props) {
    const [DateBookings, setDateBookings] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [bookingOnDate, setBookingOnDate] = useState('')
    const [listBookingByDate, setListBookingByDate] = useState(null)

    useEffect(() => {
        const getBookings = async () => {
            const params = {
                page: 0,
                size: 99,
            }
            const response = await bookServiceAPI.getAllBooking(params)
            const { data } = response.data
            let listDateBooking = []
            data.bookingServices.forEach((item) => {
                if (CheckIsArr(listDateBooking, new Date(moment(item.dateBooking).format('YYYY-MM-DD').toString()))) {
                    listDateBooking.push(new Date(moment(item.dateBooking).format('YYYY-MM-DD').toString()))
                }
            })
            setDateBookings(listDateBooking)
        }
        const getBookingOnDate = async () => {
            const params = {
                page: 0,
                size: 99,
            }
            const response = await bookServiceAPI.getAllBooking(params)
            const { data } = response.data
            let listBooking = []
            data.bookingServices.forEach((item) => {
                if (moment(item.dateBooking).format('YYYY-MM-DD').toString() === bookingOnDate) {
                    listBooking.push(item)
                }
            })
            setListBookingByDate(listBooking)
        }
        getBookingOnDate()
        getBookings()
    }, [bookingOnDate])

    const handleIsOpen = () => {
        setIsOpen(true)
    }
    const handleOnClose = () => {
        setIsOpen(false)
    }
    const handleSetTitle = (title) => {
        setModalTitle(title)
    }
    const handleSetDateBooking = (date) => {
        setBookingOnDate(date)
    }
    return (
        <Box
            boxShadow='1px 1px 4px 2px #cecece'
            borderRadius='6px'
        >
            <Box
                paddingTop='20px'
            >
                <ChartLine />
            </Box>
            <Flex
                marginTop='120px'
                justifyContent='space-around'
                paddingBottom='40px'
            >
                <ChartCategory />
                <CalendarCus arrDate={DateBookings} handleIsOpen={handleIsOpen} handleSetTitle={handleSetTitle} handleSetDateBooking={handleSetDateBooking} />

                <ModalDetail
                    isOpen={isOpen}
                    onClose={handleOnClose}
                    modalTitle={modalTitle}
                    currBooking={listBookingByDate}
                />
            </Flex>
        </Box>
    );
}

export default ChartAdmin;