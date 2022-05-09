import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Icon, Box, Tooltip, useToast, Image } from '@chakra-ui/react'
import { BsCheck2Circle } from 'react-icons/bs'
import { ImCancelCircle } from 'react-icons/im'
import { RiIndeterminateCircleLine } from 'react-icons/ri'
import { MdUpdate } from 'react-icons/md'
import serviceApi from '../../../../../api/serviceApi'
import ModalService from '../ModalService';
import ModalBox from '../../../../../components/ModalBox';

TableService.propTypes = {
    currentItems: PropTypes.array,
    serialNum: PropTypes.number,
    hanldeRender: PropTypes.func,
};
const updateService = async (id, params, hanldeRender, toast) => {
    const response = await serviceApi.updateInfoService(id, params)
    const { status, message } = response
    hanldeRender()
    if (status === 200) {
        toast({
            title: 'Update Info Pet',
            status: 'success',
            description: 'Update info pet successfully!',
            isClosable: true,
            duration: 3000,
            position: 'top'
        })
    }
}


function TableService(props) {
    const { currentItems, serialNum, hanldeRender } = props
    const [currService, setCurrService] = useState(null)
    const [currIdService, setIdService] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const toast = useToast()
    const [openModalService, setOpenModalService] = useState(false)
    const [idDelete, setIdDelete] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [currImageService, setCurrImageService] = useState(process.env.REACT_APP_DEFAULT_IMAGE)


    useEffect(() => {

    }, [currIdService, currService, isLoading])

    const handleImageService = (srcImage) => {
        setCurrImageService(srcImage)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleOnloading = () => {
        setIsLoading(true)
    }
    const handleOffLoading = () => {
        setIsLoading(false)
    }
    const hanldeDelete = async () => {
        if (idDelete != '') {
            const response = await serviceApi.deleteById(idDelete)
            const { status } = response
            if (status === 200) {
                toast({
                    title: 'Delete Service',
                    status: 'success',
                    description: 'Delete service successfully!',
                    isClosable: true,
                    duration: 3000,
                    position: 'top'
                })
            }
        }
        setOpenModal(false)
        hanldeRender()
    }
    const closeModalInput = () => {
        setOpenModalService(false)
        setIsLoading(false)
        hanldeRender()
    }

    const handleAction = async (upService) => {
        const params = {
            ...upService,
            image: currImageService,
        }
        delete params.id
        const response = await serviceApi.updateInfoService(upService.id, params)
        const { status, message } = response
        if (status === 200) {
            toast({
                title: 'Update Info Pet',
                status: 'success',
                description: 'Update info pet successfully!',
                isClosable: true,
                duration: 3000,
                position: 'top'
            })
            closeModalInput()
        }
    }
    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th textAlign='center' isNumeric>Serial Number</Th>
                            <Th textAlign='center'>Image</Th>
                            <Th textAlign='center'>Name</Th>
                            <Th textAlign='center'>Description</Th>
                            <Th textAlign='center' isNumeric>Price</Th>
                            <Th textAlign='center' isNumeric>Slot</Th>
                            <Th textAlign='center'>Status</Th>
                            <Th textAlign='center'>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            currentItems.map((item, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td textAlign='center' >{serialNum + index + 1}</Td>
                                        <Td textAlign='center' >
                                            <Image
                                                borderRadius='full'
                                                boxSize='40px'
                                                src={item.image}
                                            />
                                        </Td>
                                        <Td textAlign='center' >
                                            {item.name}
                                        </Td>
                                        <Td textAlign='center' >
                                            {item.description}
                                        </Td>
                                        <Td textAlign='center' >
                                            {item.price}
                                        </Td>
                                        <Td textAlign='center' >
                                            {item.slot}
                                        </Td>
                                        <Td textAlign='center'>
                                            <Box
                                                onClick={() => {
                                                    const tmpService = {
                                                        ...item,
                                                        status: !item.status
                                                    }
                                                    delete tmpService.id
                                                    updateService(item.id, tmpService, hanldeRender, toast)
                                                }}
                                            >
                                                {item.status ?
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
                                                <Box cursor='pointer' padding='8px'
                                                    onClick={() => {
                                                        setOpenModalService(true)
                                                        setCurrService(item)
                                                        setIdService(item.id)
                                                        setCurrImageService(item.image)
                                                    }}
                                                >
                                                    <Icon color='yellow.400' cursor='pointer' fontSize='22px' as={MdUpdate} />
                                                </Box>
                                            </Tooltip>
                                            <Tooltip label='Delete'>
                                                <Box cursor='pointer' padding='8px'
                                                    onClick={() => {
                                                        setOpenModal(true)
                                                        setIdDelete(item.id)
                                                        setCurrService(item)
                                                        // console.log(item);
                                                    }}
                                                >
                                                    <Icon color='red.400' cursor='pointer' fontSize='22px' as={RiIndeterminateCircleLine} />
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
                            <Th textAlign='center'>Image</Th>
                            <Th textAlign='center'>Name</Th>
                            <Th textAlign='center'>Description</Th>
                            <Th textAlign='center' isNumeric>Price</Th>
                            <Th textAlign='center' isNumeric>Slot</Th>
                            <Th textAlign='center'>Status</Th>
                            <Th textAlign='center'>Action</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>

            <ModalService
                openModal={openModalService}
                actionName='UPDATE SERVICE'
                closeModal={closeModalInput}
                currService={currService}
                handleOnloading={handleOnloading}
                handleOffloading={handleOffLoading}
                isLoading={isLoading}
                currImageService={currImageService}
                handleImageService={handleImageService}
                handleAction={handleAction}
                currIdService={currIdService}
            />

            <ModalBox
                isOpenModal={openModal}
                modalTitle={`Delete Service`}
                modalContent={`Are you sure to delete service ${currService?.name}`}
                buttonActionContent='DELETE'
                onSetCloseModal={handleCloseModal}
                onActionClick={hanldeDelete}
            />
        </>
    );
}

export default TableService;