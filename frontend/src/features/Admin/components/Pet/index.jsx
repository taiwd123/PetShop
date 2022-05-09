import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TablePet from './TablePet';
import { Box, useToast } from '@chakra-ui/react'
import HeaderAdmin from '../Header';
import PaginatPet from './PaginatePet';
import ModalPet from './ModalPet';
import petAPI from '../../../../api/petApi';

PetManagement.propTypes = {

};

function PetManagement(props) {
    const [onModalPet, setOnModalPet] = useState(false)
    const [currImagePet, setCurrImagePet] = useState(process.env.REACT_APP_DEFAULT_IMAGE)
    const [isLoading, setIsLoading] = useState(false)
    const [isRender, setIsRender] = useState(false)
    const toast = useToast()

    useEffect(() => {

    }, [isRender])

    const handleOnModal = () => {
        setOnModalPet(true)
    }
    const handleOffModal = () => {
        setOnModalPet(false)
        setCurrImagePet(process.env.REACT_APP_DEFAULT_IMAGE)
        setIsRender(!isRender)
    }

    const handleImagePet = (srcImage) => {
        setCurrImagePet(srcImage)
    }

    const handleOnloading = () => {
        setIsLoading(true)
    }
    const handleOffLoading = () => {
        setIsLoading(false)
    }
    const handleAction = async (upPet) => {
        const params = {
            ...upPet,
            imagePetEntityList: [{
                url: currImagePet
            }]
        }
        const response = await petAPI.addPet(params)
        const { status } = response
        if (status === 200) {
            toast({
                title: 'Add new Pet',
                status: 'success',
                description: 'Add new Pet successfully!',
                isClosable: true,
                duration: 3000,
                position: 'top'
            })
            handleOffModal()
        }
    }
    // console.log('currImagePet: ', currImagePet);
    return (
        <Box marginLeft='288px'>
            <Box
                padding='40px'
            >
                <HeaderAdmin heading='Pets Management' isButton={true} btnName='Add New Pet' handleOnModal={handleOnModal} />
                <PaginatPet itemsPerPage={5} isReRender={isRender} />
                <ModalPet
                    openModal={onModalPet}
                    currPet={null}
                    actionName='ADD NEW PET'
                    currImagePet={currImagePet}
                    closeModal={handleOffModal}
                    handleOnloading={handleOnloading}
                    handleOffloading={handleOffLoading}
                    handleImagePet={handleImagePet}
                    handleAction={handleAction}
                    isLoading={isLoading}
                />
            </Box>
        </Box>
    );
}

export default PetManagement;