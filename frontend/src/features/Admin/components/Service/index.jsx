import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, useToast } from '@chakra-ui/react'
import HeaderAdmin from '../Header';
import PaginatService from './PaginateService';
import ModalService from './ModalService';
import serviceApi from '../../../../api/serviceApi';

ServiceManagement.propTypes = {

};

function ServiceManagement(props) {
    const [onModalService, setonModalService] = useState(false)
    const [currImageService, setcurrImageService] = useState(process.env.REACT_APP_DEFAULT_IMAGE)
    const [isLoading, setIsLoading] = useState(false)
    const [isRender, setIsRender] = useState(false)
    const toast = useToast()

    useEffect(() => {

    }, [isRender])

    const handleOnModal = () => {
        setonModalService(true)
    }
    const handleOffModal = () => {
        setonModalService(false)
        setcurrImageService(process.env.REACT_APP_DEFAULT_IMAGE)
        setIsRender(!isRender)
    }

    const handleImageService = (srcImage) => {
        setcurrImageService(srcImage)
    }

    const handleOnloading = () => {
        setIsLoading(true)
    }
    const handleOffLoading = () => {
        setIsLoading(false)
    }
    const handleAction = async (upService) => {
        const params = {
            ...upService,
            image: currImageService,
        }
        const response = await serviceApi.addService(params)
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
    // console.log('currImageService: ', currImageService);
    return (
        <Box marginLeft='288px'>
            <Box
                padding='40px'
            >
                <HeaderAdmin heading='Services Management' isButton={true} btnName='Add New Service' handleOnModal={handleOnModal} />
                <PaginatService itemsPerPage={5} isReRender={isRender} />
                <ModalService
                    openModal={onModalService}
                    currService={null}
                    actionName='ADD NEW SERVICE'
                    currImageService={currImageService}
                    closeModal={handleOffModal}
                    handleOnloading={handleOnloading}
                    handleOffloading={handleOffLoading}
                    handleImageService={handleImageService}
                    handleAction={handleAction}
                    isLoading={isLoading}
                />
                {/* <TableService /> */}
            </Box>
        </Box>
    );
}

export default ServiceManagement;