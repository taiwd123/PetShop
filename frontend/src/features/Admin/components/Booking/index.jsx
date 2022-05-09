import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, useToast } from '@chakra-ui/react'
import HeaderAdmin from '../Header';
import TableBooking from './TableBooking'
import PaginateBooking from './PaginateBooking'
import ModalBooking from './ModalBooking';
import userApi from '../../../../api/userApi';
import serviceApi from '../../../../api/serviceApi';
import bookServiceAPI from '../../../../api/bookServiceApi';

BookingService.propTypes = {

};

function BookingService(props) {
    const [onModal, setOnModal] = useState(false)
    const [isRender, setIsRender] = useState(false)
    const [userName, setUserName] = useState('')
    const [serviceId, setServiceId] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [findUser, setFindUser] = useState([])
    const [listService, setListService] = useState([])
    const [serviceSelected, setServiceSelected] = useState(null)

    const toast = useToast()

    const handleOnModal = () => {
        setOnModal(true)
    }
    const handleOffModal = () => {
        setOnModal(false)
        setIsRender(!isRender)
        setFindUser([])
        setUserName('')
        setServiceId('')
        setServiceSelected(null)
    }

    const handleSetUser = (value) => {
        setUserName(value)
    }

    const handleSetDate = (date) => {
        setStartDate(date)
    }

    const handleSetServiceId = (service) => {
        setServiceId(service)
    }

    const handlFindUser = async () => {
        try {
            const params = {
                username: userName
            }
            const response = await userApi.getAllUsers(params)
            const { data } = response.data
            // console.log('data.users: ', data.users);
            // console.log('response: ', response);
            setFindUser(data.users)
        } catch (error) {
            setFindUser([])
            console.log('error', error.data);
        }

    }
    const handleServiceSelected = async (id) => {
        const response = await serviceApi.getInfoService(id)
        const { data } = response.data
        setServiceSelected(data.serviceInfo)
    }

    const handleAction = async (item) => {
        // console.log('add booking');
        try {
            const params = {
                usename: item.userName,
                serviceId: item.serviceId,
                dateBooking: startDate,
            }
            // console.log('data booking: ', params);
            const response = await bookServiceAPI.adminAddBooking(params)
            const { data, status } = response.data
            if (status === 200) {
                toast({
                    title: 'Add new booking',
                    description: 'Add new booking successfully!',
                    status: 'success',
                    duration: '3000',
                    position: 'top',
                    isClosable: true
                })
            }
        } catch (error) {
            // console.log('error: ', error.response.data);
            const { details } = error.response.data
            toast({
                title: 'Add new booking',
                description: `${details[0]}`,
                status: 'error',
                duration: '3000',
                position: 'top',
                isClosable: true
            })
        }

    }
    useEffect(() => {
        const getAllService = async () => {
            const params = {
                size: 999,
                page: 0,
            }
            const response = await serviceApi.getServices(params)
            const { data } = response.data
            setListService(data.services)
        }
        getAllService()
    }, [isRender])
    // console.log('userName: ', userName);
    // console.log('serviceId: ', serviceId);
    return (
        <Box marginLeft='288px'>
            <Box
                padding='40px'
            >
                <HeaderAdmin heading='Booking Service' isButton={true} btnName='Add New Booking' handleOnModal={handleOnModal} />
                <PaginateBooking itemsPerPage={5} isReRender={isRender} />
                <ModalBooking
                    openModal={onModal}
                    headerModal={'Add New Booking'}
                    currPet={null}
                    actionName='ADD NEW BOOKING'
                    closeModal={handleOffModal}
                    startDate={startDate}
                    userName={userName}
                    serviceId={serviceId}
                    handleSetUser={handleSetUser}
                    handleSetDate={handleSetDate}
                    handlFindUser={handlFindUser}
                    handleSetServiceId={handleSetServiceId}
                    handleServiceSelected={handleServiceSelected}
                    handleAction={handleAction}
                    serviceSelected={serviceSelected}
                    findUser={findUser}
                    listService={listService}
                    typeAction='add'
                    status=''
                    payment={false}
                />
            </Box>
        </Box>
    );
}

export default BookingService;