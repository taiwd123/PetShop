import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Icon, Box, Tooltip, useToast, Image } from '@chakra-ui/react'
import { BsCheck2Circle } from 'react-icons/bs'
import { ImCancelCircle } from 'react-icons/im'
import { RiIndeterminateCircleLine } from 'react-icons/ri'
import { MdUpdate } from 'react-icons/md'
import userApi from '../../../../../api/userApi';
import ModalBox from '../../../../../components/ModalBox';
import ModalPet from '../ModalPet';
import Loading from '../../../../../components/Loading';
import petAPI from '../../../../../api/petApi';

TablePet.propTypes = {
    currentItems: PropTypes.array,
    serialNum: PropTypes.number,
    hanldeRender: PropTypes.func,
};
const updatePet = async (id, params, hanldeRender, toast) => {
    const response = await petAPI.updatePet(id, params)
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


function TablePet(props) {
    const { currentItems, serialNum, hanldeRender } = props
    const [currPet, setCurrPet] = useState(null)
    const [currIdPet, setIdPet] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const toast = useToast()
    const [openModalPet, setOpenModalPet] = useState(false)
    const [idDelete, setIdDelete] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [currImagePet, setCurrImagePet] = useState(process.env.REACT_APP_DEFAULT_IMAGE)


    useEffect(() => {

    }, [currIdPet, currPet, isLoading])

    const handleImagePet = (srcImage) => {
        setCurrImagePet(srcImage)
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
            const response = await petAPI.deletePet(idDelete)
            const { status } = response
            if (status === 200) {
                toast({
                    title: 'Delete Pet',
                    status: 'success',
                    description: 'Delete Pet successfully!',
                    isClosable: true,
                    duration: 3000,
                    position: 'top'
                })
            }
        }
        setOpenModal(false)
        hanldeRender()
    }
    const closeModalPet = () => {
        setOpenModalPet(false)
        setIsLoading(false)
        hanldeRender()
    }

    const handleAction = async (upPet) => {
        const params = {
            ...upPet,
            imagePetEntityList: [{
                url: currImagePet
            }]
        }
        delete params.id
        const response = await petAPI.updatePet(upPet.id, params)
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
            closeModalPet()
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
                            <Th textAlign='center'>Gender</Th>
                            <Th textAlign='center'>Location</Th>
                            <Th textAlign='center'>Breed</Th>
                            <Th textAlign='center'>Age</Th>
                            <Th textAlign='center'>Size</Th>
                            <Th textAlign='center'>Category</Th>
                            <Th textAlign='center'>Price</Th>
                            <Th textAlign='center'>Vaccinated</Th>
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
                                                src={item.imagePetEntityList[0].url}
                                            />
                                        </Td>
                                        <Td textAlign='center' >
                                            {item.name}
                                        </Td>
                                        <Td textAlign='center' >
                                            {item.gender}
                                        </Td>
                                        <Td textAlign='center' >
                                            {item.location}
                                        </Td>
                                        <Td textAlign='center' >
                                            {item.breed}
                                        </Td>
                                        <Td textAlign='center' >
                                            {item.age}
                                        </Td>
                                        <Td textAlign='center' >
                                            {item.size}
                                        </Td>
                                        <Td textAlign='center' >
                                            {item.category}
                                        </Td>
                                        <Td textAlign='center' >
                                            {item.price}$
                                        </Td>
                                        <Td textAlign='center'>
                                            <Box onClick={() => {
                                                const tmpPet = {
                                                    ...item,
                                                    vaccinated: !item.vaccinated
                                                }
                                                delete tmpPet.id
                                                updatePet(item.id, tmpPet, hanldeRender, toast)
                                            }}
                                            >
                                                {item.vaccinated ?
                                                    <Tooltip label='True'>
                                                        <Box cursor='pointer' padding='8px'>
                                                            <Icon color='green.500' fontSize='20px' as={BsCheck2Circle} />
                                                        </Box>
                                                    </Tooltip> :
                                                    <Tooltip label='False'>
                                                        <Box cursor='pointer' padding='8px'>
                                                            <Icon color='red.400' cursor='pointer' fontSize='20px' as={ImCancelCircle} />
                                                        </Box>
                                                    </Tooltip>
                                                }
                                            </Box>
                                        </Td>
                                        <Td textAlign='center'>
                                            <Box onClick={() => {
                                                const tmpPet = {
                                                    ...item,
                                                    status: !item.status
                                                }
                                                delete tmpPet.id
                                                updatePet(item.id, tmpPet, hanldeRender, toast)
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
                                                <Box cursor='pointer' padding='8px' onClick={() => {
                                                    setOpenModalPet(true)
                                                    setCurrPet(item)
                                                    setIdPet(item.id)
                                                    setCurrImagePet(item.imagePetEntityList[0].url)
                                                }}>
                                                    <Icon color='yellow.400' cursor='pointer' fontSize='22px' as={MdUpdate} />
                                                </Box>
                                            </Tooltip>
                                            <Tooltip label='Delete'>
                                                <Box cursor='pointer' padding='8px' onClick={() => {
                                                    setOpenModal(true)
                                                    setIdDelete(item.id)
                                                    setCurrPet(item)
                                                }}>
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
                            <Th textAlign='center'>Gender</Th>
                            <Th textAlign='center'>Location</Th>
                            <Th textAlign='center'>Breed</Th>
                            <Th textAlign='center'>Age</Th>
                            <Th textAlign='center'>Size</Th>
                            <Th textAlign='center'>Category</Th>
                            <Th textAlign='center'>Price</Th>
                            <Th textAlign='center'>Vaccinated</Th>
                            <Th textAlign='center'>Status</Th>
                            <Th textAlign='center'>Action</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <ModalPet
                openModal={openModalPet}
                actionName='UPDATE PET'
                closeModal={closeModalPet}
                currPet={currPet}
                handleOnloading={handleOnloading}
                handleOffloading={handleOffLoading}
                isLoading={isLoading}
                currImagePet={currImagePet}
                handleImagePet={handleImagePet}
                handleAction={handleAction}
                currIdPet={currIdPet}
            />

            <ModalBox
                isOpenModal={openModal}
                modalTitle={`Delete Pet`}
                modalContent={`Are you sure to delete pet ${currPet?.name}`}
                buttonActionContent='DELETE'
                onSetCloseModal={handleCloseModal}
                onActionClick={hanldeDelete}
            />
        </>
    );
}

export default TablePet;