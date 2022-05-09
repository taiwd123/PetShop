import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Icon, Box, Tooltip, useToast, Image } from '@chakra-ui/react'
import moment from 'moment';
import { BsCheck2Circle } from 'react-icons/bs'
import { ImCancelCircle } from 'react-icons/im'
import { RiIndeterminateCircleLine } from 'react-icons/ri'
import { MdUpdate } from 'react-icons/md'
import bookServiceAPI from '../../../../../api/bookServiceApi';
import ModalBooking from '../ModalBooking';
import userApi from '../../../../../api/userApi';
import serviceApi from '../../../../../api/serviceApi';

TableBooking.propTypes = {

};

function TableBooking(props) {
    const { currentItems, serialNum, hanldeRender } = props

    const [openModal, setOpenModal] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const [userName, setUserName] = useState('')
    const [serviceId, setServiceId] = useState('')
    const [findUser, setFindUser] = useState([])
    const [listService, setListService] = useState([])
    const [serviceSelected, setServiceSelected] = useState(null)
    const [status, setStatus] = useState('')
    const [payment, setPayment] = useState(false)
    const [idUpdate, setIdUpdate] = useState('')
    const toast = useToast()

    const updateBooking = async (id, params) => {
        try {
            const response = await bookServiceAPI.addminUpdateBooking(id, params)
            const { status, message } = response
            hanldeRender()
            if (status === 200) {
                toast({
                    title: 'Update Info Booking Service',
                    status: 'success',
                    description: 'Update info Booking Service successfully!',
                    isClosable: true,
                    duration: 3000,
                    position: 'top'
                })
            }
        } catch (error) {
            console.log(error);
            toast({
                title: 'Update Info Booking Service',
                status: 'error',
                description: 'An error occurred, please try again!',
                isClosable: true,
                duration: 3000,
                position: 'top'
            })
        }
    }
    const handleSetUser = (value) => {
        setUserName(value)
    }
    const handleSetDate = (date) => {
        setStartDate(date)
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
    const handleSetServiceId = (service) => {
        setServiceId(service)
    }
    const handleServiceSelected = async (id) => {
        const response = await serviceApi.getInfoService(id)
        const { data } = response.data
        setServiceSelected(data.serviceInfo)
    }
    const handleOffModal = () => {
        setOpenModal(false)
        setFindUser([])
        setUserName('')
        setServiceId('')
        setServiceSelected(null)
    }
    const handleAction = async (item) => {
        try {
            const params = {
                dateBooking: startDate,
                payment: item.payment,
                serviceId: item.serviceId,
                status: item.status,
                username: item.userName,
            }
            console.log('data booking: ', params);
            const response = await bookServiceAPI.addminUpdateBooking(idUpdate, params)
            const { data, status } = response.data
            if (status === 200) {
                toast({
                    title: 'Update booking',
                    description: 'Update booking successfully!',
                    status: 'success',
                    duration: '3000',
                    position: 'top',
                    isClosable: true
                })
            }
        } catch (error) {
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
    }, [])
    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th textAlign='center' isNumeric>Serial Number</Th>
                            <Th textAlign='center'>Full Name</Th>
                            <Th textAlign='center'>Name Service</Th>
                            <Th textAlign='center'>Date Booking</Th>
                            <Th textAlign='center'>Status</Th>
                            <Th textAlign='center'>Price</Th>
                            <Th textAlign='center'>Payment</Th>
                            <Th textAlign='center'>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            currentItems.map((item, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td textAlign='center'>
                                            {serialNum + index + 1}
                                        </Td>
                                        <Td textAlign='center'>
                                            {item.userBookService.firstName + ' ' + item.userBookService.lastName}
                                        </Td>
                                        <Td textAlign='center'>
                                            {item.service.name}
                                        </Td>
                                        <Td textAlign='center'>
                                            {moment(item.dateBooking).format('YYYY-MM-DD')}
                                        </Td>
                                        <Td textAlign='center'>
                                            {item.status}
                                        </Td>
                                        <Td textAlign='center'>
                                            {'$' + item.service.price}
                                        </Td>
                                        <Td textAlign='center'>
                                            <Box
                                                onClick={() => {
                                                    const tmpBooking = {
                                                        dateBooking: moment(new Date('2022-05-06')).format('YYYY-MM-DDThh:mm:ss'),
                                                        payment: !item.payment,
                                                        serviceId: item.service.id,
                                                        status: item.status,
                                                        username: item.userBookService.userName
                                                    }
                                                    console.log('tmpBooking: ', tmpBooking);
                                                    updateBooking(item.id, tmpBooking)
                                                }}
                                            >
                                                {item.payment ?
                                                    <Tooltip label='Not Yet Adopted'>
                                                        <Box cursor='pointer' padding='8px'>
                                                            <Icon color='green.500' fontSize='20px' as={BsCheck2Circle} />
                                                        </Box>
                                                    </Tooltip> :
                                                    <Tooltip label='Has Been Adopted'>
                                                        <Box cursor='pointer' padding='8px'>
                                                            <Icon color='red.400' cursor='pointer' fontSize='20px' as={ImCancelCircle} />
                                                        </Box>
                                                    </Tooltip>
                                                }
                                            </Box>
                                        </Td>
                                        <Td textAlign='center' display="flex">
                                            <Tooltip label='Update'>
                                                <Box cursor='pointer' padding='8px' onClick={() => {
                                                    setOpenModal(true)
                                                    // setFindUser([item.userBookService])
                                                    setServiceSelected(item.service)
                                                    setUserName(item.userBookService.userName)
                                                    setServiceId(item.service.id)
                                                    setPayment(item.payment)
                                                    setStatus(item.status)
                                                    setStartDate(new Date(item.dateBooking))
                                                    setIdUpdate(item.id)
                                                    console.log('[item.service: ', item.service);
                                                }}>
                                                    <Icon color='yellow.400' cursor='pointer' fontSize='22px' as={MdUpdate} />
                                                </Box>
                                            </Tooltip>

                                        </Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th textAlign='center' isNumeric>Serial Number</Th>
                            <Th textAlign='center'>Full Name</Th>
                            <Th textAlign='center'>Name Service</Th>
                            <Th textAlign='center'>Date Booking</Th>
                            <Th textAlign='center'>Status</Th>
                            <Th textAlign='center'>Price</Th>
                            <Th textAlign='center'>Payment</Th>
                            <Th textAlign='center'>Action</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <ModalBooking
                openModal={openModal}
                headerModal={'Update Booking'}
                currPet={null}
                actionName='UPDATE BOOKING'
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
                typeAction='update'
                status={status}
                payment={payment}
            />
        </>
    );
}

export default TableBooking;