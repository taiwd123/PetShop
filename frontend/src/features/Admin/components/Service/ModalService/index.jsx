import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure, Button, Input, Box, Image, Skeleton, SkeletonCircle, useToast
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
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

ModalService.propTypes = {

};

const petSchema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    slot: yup.number().required(),
    price: yup.number().required(),
    status: yup.bool().required(),
})


function ModalService(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { currIdService, handleAction, currImageService, handleImageService, isLoading, handleOnloading, handleOffloading, openModal, closeModal, actionName, currService } = props
    const [upService, setUpService] = useState(null)
    const toast = useToast()

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(petSchema)
    });


    useEffect(() => {
        setUpService(currService)
        if (currService != undefined || currService !== null) {
            setValue("name", currService.name ? currService.name : '')
            setValue("description", currService.description ? currService.description : 1)
            setValue("slot", currService.size ? currService.size : 0)
            setValue("price", currService.price ? currService.price : 1)
            setValue("status", currService.status !== '' ? currService.status : '')
        }
    }, [currService])

    const handleChooseFile = () => {
        document.getElementById('fileid').click()
    }

    const _onChangeImage = async (e) => {
        const imageService = e.target.files[0];
        handleOnloading()
        if (imageService === undefined) {
            toast({
                title: 'Update Info Pet',
                description: 'Please, choose image to update!',
                status: 'warning',
                duration: '3000',
                position: 'top',
                isClosable: true
            })
            return
        }
        if (imageService.type === 'image/jpeg' || imageService.type === 'image/png') {
            const imageAfterResize = await resizeImage(imageService);
            const data = new FormData();
            data.append('file', imageAfterResize);
            data.append('upload_preset', 'chat-app-basic');
            data.append('cloud_name', 'thangduong');

            try {
                const response = await imageApi.uploadImage(data);
                handleImageService(response.data.url);
                handleOffloading();
            } catch (error) {
                console.log(error);
                handleOffloading();
            }
        } else {
            toast({
                title: 'Choose your image ~~',
                description: "accept any type of images",
                status: 'warning',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
            });
            handleOffloading();
            return;
        }
    }

    const onSubmit = (data) => {
        const tmpService = {
            ...data,
            id: currIdService,
            image: currImageService,
        }
        console.log('upService: ', tmpService);
        // console.log("data Pet: ",data);
        handleAction(tmpService)
    }
    // console.log('currImageService: ', currImageService);
    // console.log('upService: ', upService);

    return (
        <>
            <Modal isOpen={openModal} onClose={closeModal}>
                <ModalOverlay opacity='0.4 !important' />
                <ModalContent top='-40px' >
                    <ModalHeader textAlign='center'>Update Service</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        <Box>
                            {
                                isLoading ?
                                    <SkeletonCircle size='120' marginBottom='12px' />
                                    :
                                    <Image
                                        borderRadius='full'
                                        boxSize='120px'
                                        src={currImageService}
                                        marginBottom='12px'
                                        id='image'
                                    />
                            }
                            <Button
                                backgroundColor='#0ec4cb'
                                alignItems='center'
                                boxShadow='none !important'
                                color='#fff'
                                _hover={{
                                    backgroundColor: '#0eb4b9'
                                }}
                                _active={{
                                    backgroundColor: '#0ec4cb'
                                }}
                                onClick={handleChooseFile}
                            >
                                Choose file
                            </Button>
                            <Input
                                id='fileid'
                                hidden
                                name='image'
                                type={'file'}
                                p={1.5}
                                accept='image/*'
                                onChange={(e) => _onChangeImage(e)}
                            />
                        </Box>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <FormControl
                                    isInvalid={!!errors?.name?.message}
                                    errortext={errors?.name?.message}
                                >
                                    <FormLabel fontSize='14px' htmlFor='name'>Name</FormLabel>
                                    <Input margin='-3px 0' fontSize='14px' id='name' placeholder='Name'
                                        {...register("name")}
                                    />
                                    <FormErrorMessage>{errors.name && 'Name is required'}</FormErrorMessage>
                                </FormControl>
                                <FormControl
                                    isInvalid={!!errors?.description?.message}
                                    errortext={errors?.description?.message}
                                >
                                    <FormLabel fontSize='14px' htmlFor='description'>Description</FormLabel>
                                    <Input margin='-3px 0' fontSize='14px' id='description' placeholder='Description'
                                        {...register("description")}
                                    />
                                    <FormErrorMessage>{errors.description && 'Description is required'}</FormErrorMessage>
                                </FormControl>
                            </Box>
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                            >

                                <Box>
                                    <FormLabel fontSize='14px' htmlFor='slot'>Slot</FormLabel>
                                    <NumberInput defaultValue={0} max={30} clampValueOnBlur={false}
                                        {...register("slot")}
                                    >
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                    <FormErrorMessage>{errors?.slot?.message}</FormErrorMessage>
                                </Box>
                                <Box>
                                    <FormLabel fontSize='14px' htmlFor='price'>Price</FormLabel>
                                    <NumberInput defaultValue={1} max={1000} clampValueOnBlur={false}
                                        {...register("price")}
                                    >
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                    <FormErrorMessage>{errors?.price?.message}</FormErrorMessage>
                                </Box>
                            </Box>
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <Box>
                                    <FormControl
                                        isInvalid={!!errors?.status?.message}
                                        errortext={errors?.status?.message}
                                    >
                                        <FormLabel fontSize='14px' htmlFor='status'>Status</FormLabel>
                                        <Select minWidth='180px'
                                            placeholder='Select status'
                                            {...register("status")}
                                        >
                                            <option value={true}>True</option>
                                            <option value={false}>False</option>
                                        </Select>
                                        <FormErrorMessage>{errors?.status && 'Status is required'}</FormErrorMessage>
                                    </FormControl>
                                </Box>
                            </Box>
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

export default ModalService;