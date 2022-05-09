import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Icon, Box, Tooltip, useToast } from '@chakra-ui/react'
import { BsCheck2Circle } from 'react-icons/bs'
import { ImCancelCircle } from 'react-icons/im'
import { RiIndeterminateCircleLine } from 'react-icons/ri'
import { MdUpdate } from 'react-icons/md'
import userApi from '../../../../../api/userApi';
import ModalBox from '../../../../../components/ModalBox';

TableAccount.propTypes = {
    currentItems: PropTypes.array,
    serialNum: PropTypes.number,
    hanldeRender: PropTypes.func,
};

function TableAccount(props) {
    const { currentItems, serialNum, hanldeRender } = props
    const [currStatus, setCurrStatus] = useState(null)
    const [currEmail, setCurrEmail] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [currId, setCurrId] = useState('')
    const toast = useToast()
    useEffect(() => {
        const updateStatus = async (statusCurr, email) => {
            const response = await userApi.updateStatus(email, statusCurr)
            const { status, message } = response
            hanldeRender()
            if (status === 200) {
                toast({
                    title: 'Update Status',
                    status: 'success',
                    description: 'Update status successfully!',
                    isClosable: true,
                    duration: 3000,
                    position: 'top'
                })
            }
        }
        if (currEmail !== '' && currStatus !== null) {
            updateStatus(currStatus, currEmail)
        }
    }, [currStatus, currEmail, currId])
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const hanldeDelete = async () => {
        if (currId !== '') {
            try {
                const response = await userApi.deleteUserByID(currId)
                const { status } = response
                if (status === 200) {
                    toast({
                        title: 'Delete User',
                        status: 'success',
                        description: 'Delete User successfully!',
                        isClosable: true,
                        duration: 3000,
                        position: 'top'
                    })
                }
            } catch (error) {
                toast({
                    title: 'Delete User',
                    status: 'error',
                    description: { error },
                    isClosable: true,
                    duration: 3000,
                    position: 'top'
                })
            }
            setOpenModal(false)
            hanldeRender()
        }
    }
    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th textAlign='center' isNumeric>Serial Number</Th>
                            <Th textAlign='center'>Name</Th>
                            <Th textAlign='center'>User Name</Th>
                            <Th textAlign='center'>Email</Th>
                            <Th textAlign='center'>Phone</Th>
                            <Th textAlign='center'>Address</Th>
                            <Th textAlign='center'>Role</Th>
                            <Th textAlign='center'>Status</Th>
                            <Th textAlign='center'>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            currentItems.map((item, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td textAlign='center'>{serialNum + index + 1}</Td>
                                        <Td textAlign='center'>
                                            {item.firstName !== null && item.lastName !== null ?
                                                item.firstName + ' ' + item.lastName :
                                                'No Info'}
                                        </Td>
                                        <Td textAlign='center'>{item.userName}</Td>
                                        <Td textAlign='center'>{item.email}</Td>
                                        <Td textAlign='center'>{item.phone ? item.phone : 'No Info'}</Td>
                                        <Td textAlign='center'>{item.address !== null ?
                                            item.address.city + ', ' + item.address.country :
                                            'No Info'}
                                        </Td>
                                        <Td textAlign='center'>{item.roles[0].name}</Td>
                                        <Td textAlign='center'>
                                            {item.status ?
                                                <Tooltip label='True'>
                                                    <Box cursor='pointer' padding='8px' onClick={() => {
                                                        setCurrEmail(item.email)
                                                        setCurrStatus(!item.status)
                                                    }}>
                                                        <Icon color='green.500' fontSize='20px' as={BsCheck2Circle} />
                                                    </Box>
                                                </Tooltip> :
                                                <Tooltip label='False'>
                                                    <Box cursor='pointer' padding='8px' onClick={() => {
                                                        setCurrEmail(item.email)
                                                        setCurrStatus(!item.status)
                                                    }}>
                                                        <Icon color='red.400' cursor='pointer' fontSize='20px' as={ImCancelCircle} />
                                                    </Box>
                                                </Tooltip>
                                            }
                                        </Td>
                                        <Td textAlign='center' display="flex">
                                            <Tooltip label='Delete'>
                                                <Box cursor='pointer' padding='8px' onClick={() => {
                                                    setCurrId(item.id)
                                                    setOpenModal(true)
                                                }}>
                                                    <Icon color='red.400' cursor='pointer' fontSize='22px' as={RiIndeterminateCircleLine} />
                                                </Box>
                                            </Tooltip>
                                            <ModalBox
                                                isOpenModal={openModal}
                                                modalTitle={`Delete User`}
                                                modalContent={`Are you sure to delete ${item.userName}`}
                                                buttonActionContent='DELETE'
                                                onSetCloseModal={handleCloseModal}
                                                onActionClick={hanldeDelete}
                                            />
                                        </Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th textAlign='center' isNumeric>Serial Number</Th>
                            <Th textAlign='center'>Name</Th>
                            <Th textAlign='center'>User Name</Th>
                            <Th textAlign='center'>Email</Th>
                            <Th textAlign='center'>Phone</Th>
                            <Th textAlign='center'>Address</Th>
                            <Th textAlign='center'>Role</Th>
                            <Th textAlign='center'>Status</Th>
                            <Th textAlign='center'>Action</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    );
}

export default TableAccount;