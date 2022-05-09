import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../../../../components/Loading'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure, Button, Input, Box, Image,
    Skeleton, SkeletonCircle, useToast, Icon, Flex, Tooltip, Heading
} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper, Select
} from '@chakra-ui/react'
import imageApi from '../../../../../api/imageApi';
import { resizeImage } from '../../../../../utils/ResizeImage';
import petAPI from '../../../../../api/petApi';
import { set, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FcSearch } from 'react-icons/fc'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

ModalBooking.propTypes = {

};

const petSchema = yup.object().shape({
    userName: yup.string().required(),
    serviceId: yup.string().required(),
    status: yup.string().required(),
    payment: yup.bool().required()
})


function ModalBooking(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { headerModal, openModal, closeModal, actionName, userName, serviceId, startDate, findUser, listService, serviceSelected, typeAction,
        status, payment, handleSetUser, handleSetDate, handleSetServiceId, handlFindUser, handleServiceSelected, handleAction } = props
    const toast = useToast()

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(petSchema)
    });
    const onSubmit = (data) => {
        // console.log("data Booking: ", data);
        handleAction(data)
    }


    useEffect(() => {
        setValue('userName', userName)
        setValue('serviceId', serviceId)
        setValue('status', status ? status : '1')
        setValue('payment', payment ? payment : '1')
    }, [userName, serviceId, status, payment])


    // console.log('userName: ', userName);
    // console.log('listService: ', listService);
    // console.log('status: ', status);
    // console.log('payment: ', payment);
    return (
        <>
            <Modal isOpen={openModal} onClose={closeModal} size='xl'>
                <ModalOverlay opacity='0.4 !important' />
                <ModalContent top='-40px' >
                    <ModalHeader textAlign='center'>{headerModal}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Flex alignItems='center' justifyContent='center' >
                                <FormControl display='flex' maxWidth='50%'
                                    flexWrap='wrap'
                                    isInvalid={!!errors?.userName?.message}
                                    errortext={errors?.userName?.message}
                                >
                                    <Input
                                        isDisabled={typeAction === 'update' ? true : false}
                                        placeholder='User name'
                                        marginRight='8px'
                                        {...register('userName')}
                                        onChange={(e) => {
                                            handleSetUser(e.target.value)
                                        }}
                                        width='70%'
                                    />
                                    <Button colorScheme='cyan'
                                        onClick={() => {
                                            handlFindUser()
                                        }}
                                        width='20%'
                                    >
                                        <Icon as={FcSearch}
                                            fontSize='30px' />
                                    </Button>
                                    <FormErrorMessage>{errors.userName && 'User name is required'}</FormErrorMessage>
                                </FormControl>
                            </Flex>
                            {
                                findUser.length !== 0 ?
                                    <Box
                                        margin='16px 0'
                                        padding='20px 16px'
                                        boxShadow='2px 2px 4px 4px #cecece'
                                        borderRadius='6px'
                                    >
                                        <Heading
                                            fontWeight='500'
                                            fontSize='24px'
                                            textAlign='center'
                                        >
                                            User's Info Booking
                                        </Heading>
                                        <Box>
                                            <Image
                                                borderRadius='full'
                                                boxSize='100px'
                                                src={findUser[0].avatar}
                                                alt={`User ${findUser[0].userName}`}
                                                marginBottom='10px'
                                            />
                                            <Flex
                                                flexWrap='wrap'
                                                justifyContent='space-between'
                                            >
                                                <Tooltip label={findUser[0].firstName + ' ' + findUser[0].lastName}>
                                                    <FormControl
                                                        maxWidth='48%'
                                                    >
                                                        <FormLabel>Full name</FormLabel>
                                                        <Input
                                                            cursor='default !important'
                                                            value={findUser[0].firstName + ' ' + findUser[0].lastName}
                                                            isDisabled={true}
                                                            fontWeight='bold'
                                                        />
                                                    </FormControl>
                                                </Tooltip>
                                                <Tooltip label={findUser[0].phone}>
                                                    <FormControl
                                                        maxWidth='48%'
                                                    >
                                                        <FormLabel>Phone</FormLabel>
                                                        <Input
                                                            cursor='default !important'
                                                            value={findUser[0].phone}
                                                            isDisabled={true}
                                                            fontWeight='bold'
                                                            border='1px solid #000'
                                                        />
                                                    </FormControl>
                                                </Tooltip>
                                                <Tooltip label={findUser[0].email}>
                                                    <FormControl
                                                        maxWidth='48%'
                                                    >
                                                        <FormLabel>Email</FormLabel>
                                                        <Input
                                                            cursor='default !important'
                                                            value={findUser[0].email}
                                                            isDisabled={true}
                                                            fontWeight='bold'
                                                        />
                                                    </FormControl>
                                                </Tooltip>
                                                <Tooltip label={findUser[0].address !== null ?
                                                    findUser[0].address.houseNumber + ', ' + findUser[0].address.streetName + ', ' + findUser[0].address.province
                                                    + ', ' + findUser[0].address.city + ', ' + findUser[0].address.country :
                                                    ''
                                                }>
                                                    <FormControl
                                                        maxWidth='48%'
                                                    >
                                                        <FormLabel>Address</FormLabel>
                                                        <Input
                                                            cursor='default !important'
                                                            value={findUser[0].address !== null ?
                                                                findUser[0].address.houseNumber + ', ' + findUser[0].address.streetName + ', ' + findUser[0].address.province
                                                                + ', ' + findUser[0].address.city + ', ' + findUser[0].address.country :
                                                                ''
                                                            }
                                                            isDisabled={true}
                                                            fontWeight='bold'
                                                        />
                                                    </FormControl>
                                                </Tooltip>
                                            </Flex>
                                        </Box>
                                    </Box> :
                                    ''
                            }
                            <Flex alignItems='center' justifyContent='center'>
                                <FormControl marginTop='20px' maxWidth='50%'
                                    isInvalid={!!errors?.serviceId?.message}
                                    errortext={errors?.serviceId?.message}
                                >
                                    <Select placeholder='Select Service'
                                        {...register('serviceId')}
                                        onChange={(e) => {
                                            handleSetServiceId(e.target.value)
                                            handleServiceSelected(e.target.value)
                                        }}
                                    >
                                        {
                                            listService.length !== 0 ?
                                                listService.map((item, index) => {
                                                    return (
                                                        <option key={index} value={item.id}>{item.name}</option>
                                                    )
                                                })
                                                :
                                                ''
                                        }
                                    </Select>
                                    <FormErrorMessage>{errors.serviceId && 'Service is required'}</FormErrorMessage>
                                </FormControl>
                            </Flex>

                            {
                                serviceSelected !== null ?
                                    <Box
                                        margin='16px 0'
                                        padding='20px 16px'
                                        boxShadow='2px 2px 4px 4px #cecece'
                                        borderRadius='6px'
                                    >
                                        <Heading
                                            fontWeight='500'
                                            fontSize='24px'
                                            textAlign='center'
                                        >
                                            Booking's Info
                                        </Heading>
                                        <Box>
                                            <Image
                                                borderRadius='full'
                                                boxSize='100px'
                                                src={serviceSelected.image}
                                                alt={`${serviceSelected.name} service`}
                                                marginBottom='10px'
                                            />
                                            <Flex
                                                flexWrap='wrap'
                                                justifyContent='space-between'
                                            >
                                                <Tooltip label={serviceSelected.description}>
                                                    <FormControl
                                                        maxWidth='48%'
                                                    >
                                                        <FormLabel>Description</FormLabel>
                                                        <Input
                                                            cursor='default !important'
                                                            value={serviceSelected.description}
                                                            isDisabled={true}
                                                            fontWeight='bold'
                                                        />
                                                    </FormControl>
                                                </Tooltip>
                                                <Tooltip label={'$' + serviceSelected.price}>
                                                    <FormControl
                                                        maxWidth='48%'
                                                    >
                                                        <FormLabel>Price</FormLabel>
                                                        <Input
                                                            cursor='default !important'
                                                            value={'$' + serviceSelected.price}
                                                            isDisabled={true}
                                                            fontWeight='bold'
                                                            border='1px solid #000'
                                                        />
                                                    </FormControl>
                                                </Tooltip>
                                                <Tooltip label={serviceSelected.slot}>
                                                    <FormControl
                                                        maxWidth='48%'
                                                    >
                                                        <FormLabel>Slot</FormLabel>
                                                        <Input
                                                            cursor='default !important'
                                                            value={serviceSelected.slot}
                                                            isDisabled={true}
                                                            fontWeight='bold'
                                                        />
                                                    </FormControl>
                                                </Tooltip>
                                                <Tooltip label={serviceSelected.status ? 'true' : 'false'}>
                                                    <FormControl
                                                        maxWidth='48%'
                                                    >
                                                        <FormLabel>Status</FormLabel>
                                                        <Input
                                                            cursor='default !important'
                                                            value={serviceSelected.status ? 'true' : 'false'}
                                                            isDisabled={true}
                                                            fontWeight='bold'
                                                        />
                                                    </FormControl>
                                                </Tooltip>
                                            </Flex>
                                        </Box>
                                    </Box>
                                    :
                                    ''
                            }
                            {
                                typeAction === 'update' ?
                                    <>
                                        <Flex
                                            display='flex'
                                            justifyContent='center'
                                            marginTop='20px'
                                        >
                                            <FormControl
                                                maxWidth='50%'
                                                isInvalid={!!errors?.status?.message}
                                                errortext={errors?.status?.message}
                                            >
                                                <Input placeholder='Status'
                                                    {...register('status')}
                                                />
                                                <FormErrorMessage>{errors.status && 'Status is required'}</FormErrorMessage>
                                            </FormControl>
                                        </Flex>
                                        <Flex
                                            display='flex'
                                            justifyContent='center'
                                            marginTop='20px'
                                        >
                                            <FormControl
                                                maxWidth='50%'
                                                isInvalid={!!errors?.payment?.message}
                                                errortext={errors?.payment?.message}
                                            >
                                                <Select placeholder='Select Payment'
                                                    {...register('payment')}
                                                >
                                                    <option value={true}>True</option>
                                                    <option value={false}>False</option>
                                                </Select>
                                                <FormErrorMessage>{errors.payment && 'Payment is required'}</FormErrorMessage>
                                            </FormControl>
                                        </Flex>
                                    </> :
                                    ''
                            }
                            <Flex
                                display='flex'
                                justifyContent='center'
                                marginTop='20px'
                            >
                                <FormControl
                                    maxWidth='50%'
                                >
                                    <FormLabel>Date Booking</FormLabel>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => handleSetDate(date)}
                                        timeInputLabel="Time:"
                                        dateFormat="MM/dd/yyyy h:mm aa"
                                        showTimeInput
                                        className='picker'
                                        wrapperClassName='date-picker'
                                    />
                                </FormControl>
                            </Flex>
                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={closeModal}>
                                    Close
                                </Button>
                                <Button colorScheme='yellow' type='submit'>{actionName}</Button>
                            </ModalFooter>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalBooking;