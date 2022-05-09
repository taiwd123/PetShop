import React from 'react';
import PropTypes from 'prop-types';
import { Container, Link, Text, Heading, Flex, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons'
import IMAGES from '../../../../constants/images';

BannerHome.propTypes = {

};

function BannerHome(props) {

    const navigate = useNavigate()
    const handleNav = () => {
        navigate("/Contact")
    }

    return (
        <Container
            margin='0'
            padding='0'
            maxWidth='100%'
            width='auto'
            backgroundImage={IMAGES.BannerHome}
            height='650px'
            marginTop='148px'
            padding='64px 0'
            backgroundRepeat='no-repeat'
            backgroundPosition='center center'
            position='relative'
            backgroundSize='cover'
            _after={{
                background: 'rgba(0, 0, 0, 0.55) !important',
                content: '""',
                width: '100%',
                height: '100%',
                zIndex: '10',
                top: '0',
                left: '0',
                position: 'absolute',
            }}
        >
            <Container
                margin='0 190px'
                padding='0'
                maxWidth='100%'
                width='auto'
                position='absolute'
                bottom='0'
                zIndex='11'
            >
                <Image
                    src={IMAGES.BannerElement}
                />
            </Container>
            <Flex
                height='300px'
                justifyContent='center'
                alignItems='center'
            >
                <Container
                    //margin='84px 60px 0'
                    padding='60px'
                    maxWidth='100%'
                    width='auto'
                    position='absolute'
                    zIndex='11'
                    textAlign='center'

                >
                    <Heading
                        color='#fff'
                        fontSize='50px'
                        fontWeight='700'
                        marginBottom='20px'
                    >
                        WELCOME TO {' '}
                        <span
                            style={{ fontWeight: '400' }}
                        >
                            UNITED PETS
                        </span>
                    </Heading>
                    <Container
                        maxWidth='100%'
                        width='auto'
                        margin='0'
                        padding='0'
                    >
                        <Text
                            fontSize='18px'
                            color='#fff'
                            marginBottom='26px'
                        >
                            We offer the best services for your pets, contact us today and book a service
                        </Text>
                        <Link
                            textDecoration='none !important'
                            padding='8px 40px'
                            backgroundColor='#018AE0'
                            borderRadius='20px'
                            height='80px'
                            color='#fff'
                            fontSize='16px'
                            fontWeight='700'
                            _hover={{
                                backgroundColor: '#1446A0'
                            }}
                            onClick={handleNav}
                        >
                            CONTACT US
                        </Link>
                    </Container>
                </Container>
            </Flex>
        </Container >
    );
}

export default BannerHome;