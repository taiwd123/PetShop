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
import petAPI from '../../../../../api/petApi';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

ModalPet.propTypes = {

};

const petSchema = yup.object().shape({
    name: yup.string().required(),
    gender: yup.string().required(),
    location: yup.string().required(),
    breed: yup.string().required(),
    category: yup.string().required(),
    description: yup.string().required(),
    age: yup.number().required(),
    size: yup.number().required(),
    price: yup.number().required(),
    vaccinated: yup.bool().required(),
    status: yup.bool().required(),
})


function ModalPet(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { currIdPet, handleAction, currImagePet, handleImagePet, isLoading, handleOnloading, handleOffloading, openModal, closeModal, actionName, currPet } = props
    const [upPet, setUpPet] = useState(null)
    const toast = useToast()

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(petSchema)
    });


    useEffect(() => {
        setUpPet(currPet)
        if (currPet != undefined || currPet !== null) {
            setValue("name", currPet.name ? currPet.name : '')
            setValue("gender", currPet.gender ? currPet.gender : '')
            setValue("location", currPet.location ? currPet.location : '')
            setValue("breed", currPet.breed ? currPet.breed : '')
            setValue("category", currPet.category ? currPet.category : '')
            setValue("description", currPet.description ? currPet.description : 1)
            setValue("age", currPet.age ? currPet.age : 1)
            setValue("size", currPet.size ? currPet.size : 1)
            setValue("price", currPet.price ? currPet.price : 1)
            setValue("vaccinated", currPet.vaccinated !== '' ? currPet.vaccinated : '')
            setValue("status", currPet.status !== '' ? currPet.status : '')
        }
    }, [currPet])

    const handleChooseFile = () => {
        document.getElementById('fileid').click()
    }

    const _onChangeImage = async (e) => {
        const imagePet = e.target.files[0];
        handleOnloading()
        if (imagePet === undefined) {
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
        if (imagePet.type === 'image/jpeg' || imagePet.type === 'image/png') {
            const imageAfterResize = await resizeImage(imagePet);
            const data = new FormData();
            data.append('file', imageAfterResize);
            data.append('upload_preset', 'chat-app-basic');
            data.append('cloud_name', 'thangduong');

            try {
                const response = await imageApi.uploadImage(data);
                handleImagePet(response.data.url);
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
        const tmpPet = {
            ...data,
            id: currIdPet,
            imagePetEntityList: [{
                url: currImagePet
            }]
        }
        console.log('upPet: ', tmpPet);
        // console.log("data Pet: ",data);
        handleAction(tmpPet)
    }
    // console.log('currImagePet: ', currImagePet);
    // console.log('upPet: ', upPet);

    return (
        <>
            <Modal isOpen={openModal} onClose={closeModal}>
                <ModalOverlay opacity='0.4 !important' />
                <ModalContent top='-40px' >
                    <ModalHeader textAlign='center'>Update Pet</ModalHeader>
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
                                        src={currImagePet}
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
                                    maxWidth='48%'
                                    flex='0 0 48%'
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
                                    maxWidth='48%'
                                    flex='0 0 48%'
                                    isInvalid={!!errors?.gender?.message}
                                    errortext={errors?.gender?.message}
                                >
                                    <FormLabel fontSize='14px' htmlFor='gender'>Gender</FormLabel>
                                    <Select minWidth='180px'
                                        placeholder='Select gender'
                                        {...register("gender")}
                                    >
                                        <option value={'Male'}>Male</option>
                                        <option value={'Female'}>Female</option>
                                    </Select>
                                    <FormErrorMessage>{errors.gender && 'Gender is required'}</FormErrorMessage>
                                </FormControl>
                            </Box>
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <Box>
                                    <FormControl
                                        isInvalid={!!errors?.location?.message}
                                        errortext={errors?.location?.message}
                                    >
                                        <FormLabel fontSize='14px' htmlFor='location'>Location</FormLabel>
                                        <Input margin='-3px 0' fontSize='14px' id='location' placeholder='Location'
                                            {...register("location")}
                                        />
                                        <FormErrorMessage>{errors.location && 'Location is required'}</FormErrorMessage>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl
                                        isInvalid={!!errors?.breed?.message}
                                        errortext={errors?.breed?.message}
                                    >
                                        <FormLabel fontSize='14px' htmlFor='breed'>Breed</FormLabel>
                                        <Input margin='-3px 0' fontSize='14px' id='breed' placeholder='Breed'
                                            {...register("breed")}
                                        />
                                        <FormErrorMessage>{errors?.breed && 'Breed is required'}</FormErrorMessage>
                                    </FormControl>
                                </Box>
                            </Box>
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <Box>
                                    <FormControl
                                        isInvalid={!!errors?.category?.message}
                                        errortext={errors?.category?.message}
                                    >
                                        <FormLabel fontSize='14px' htmlFor='category'>Category</FormLabel>
                                        <Input margin='-3px 0' fontSize='14px' id='category' placeholder='Category'
                                            {...register("category")}
                                        />
                                        <FormErrorMessage>{errors?.category && 'Category is required'}</FormErrorMessage>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl
                                        isInvalid={!!errors?.description?.message}
                                        errortext={errors?.description?.message}
                                    >
                                        <FormLabel fontSize='14px' htmlFor='description'>Description</FormLabel>
                                        <Input margin='-3px 0' fontSize='14px' id='description' placeholder='Description'
                                            {...register("description")}
                                        />
                                        <FormErrorMessage>{errors?.description && 'Description is required'}</FormErrorMessage>
                                    </FormControl>
                                </Box>
                            </Box>
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <Box>
                                    <FormLabel fontSize='14px' htmlFor='age'>Age</FormLabel>
                                    <NumberInput defaultValue={1} max={30} clampValueOnBlur={false}
                                        {...register("age")}
                                    >
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                    <FormErrorMessage>{errors?.age?.message}</FormErrorMessage>
                                </Box>
                                <Box>
                                    <FormLabel fontSize='14px' htmlFor='size'>Size</FormLabel>
                                    <NumberInput defaultValue={1} max={30} clampValueOnBlur={false}
                                        {...register("size")}
                                    >
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                    <FormErrorMessage>{errors?.size?.message}</FormErrorMessage>
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
                                        isInvalid={!!errors?.vaccinated?.message}
                                        errortext={errors?.vaccinated?.message}
                                    >
                                        <FormLabel fontSize='14px' htmlFor='vaccinated'>Vaccinated</FormLabel>
                                        <Select minWidth='180px'
                                            placeholder='Select vaccinated'
                                            {...register("vaccinated")}
                                        >
                                            <option value={true}>True</option>
                                            <option value={false}>False</option>
                                        </Select>
                                        <FormErrorMessage>{errors?.vaccinated && 'Vaccinated is required'}</FormErrorMessage>
                                    </FormControl>
                                </Box>
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

export default ModalPet;