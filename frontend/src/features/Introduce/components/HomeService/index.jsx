import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text, Heading, Icon, Flex, Image } from '@chakra-ui/react';
import { FaPaw } from "react-icons/fa";
import IMAGES from '../../../../constants/images';
import { Link } from 'react-router-dom';
import SliderBoxService from '../SliderBoxService';

HomeService.propTypes = {

};

function HomeService(props) {
    return (
        <Container
            maxWidth='100%'
            width='auto'
            margin='0 190px'
            padding='90px 16px'
        >
            <Container
                maxWidth='100%'
                width='auto'
                margin='0'
                padding='0 16px'
            >
                <Container

                    maxWidth='100%'
                    width='auto'
                    margin='0 0 90px 0'
                    padding='0'
                    textAlign='center'
                >
                    <Text
                        color='#6f6f6f'
                        fontSize='18px'
                        fontWeight='600'
                        _before={{
                            content: '""',
                            display: 'inline-block',
                            position: 'relative',
                            top: '-4px',
                            width: '24px',
                            height: '2px',
                            background: "#6f6f6f",
                            marginRight: '10px',
                        }}
                        _after={{
                            content: '""',
                            display: 'inline-block',
                            position: ' relative',
                            top: '-4px',
                            width: '24px',
                            height: '2px',
                            marginLeft: '10px',
                            background: "#6f6f6f",
                        }}
                    >
                        WHAT WE OFFER
                    </Text>
                    <Heading
                        fontSize='45px'
                        fontWeight='700'
                    >
                        OUR SERVICES
                    </Heading>
                    <Icon
                        as={FaPaw}
                        maxWidth='100%'
                        width='100%'
                        margin='0'
                        zIndex=' 0'
                        fontFamily="flaticon"
                        fontSize='20px'
                        zIndex='0'
                        transform=' rotate(20deg)'
                        opacity=' 0.5'
                        display='block'
                        color='#018AE0'
                        fontSize='20px'
                    />
                </Container>
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    flexWrap='wrap'
                >
                    <Container
                        maxWidth='100%'
                        width='100%'
                        margin='0'
                        padding='0 16px'
                        flex='0 0 58.33%'
                    >
                        <Heading
                            marginBottom='20px'
                            fontSize='44px'
                            fontWeight='700'
                        >
                            Quality Services
                        </Heading>
                        <Text
                            color='#8a8a8a'
                            fontWeight='400'
                            fontSize='21px'
                        >
                            We offer quick & easy services for cats and dogs, accumsan felis id, fermentum purus.
                            Quisque vitae hendrerit elit.
                        </Text>
                        <Text
                            color='#6f6f6f'
                            fontSize='16px'
                            margin='16px 0'
                        >
                            Aliquam erat volutpat In id fermentum augue, ut pellentesque leo.
                            Maecenas at arcu risus.Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id.
                            In aliquet magna nec lobortis maximus.Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                        </Text>
                        <Link
                            to='/contact'
                            style={{
                                color: '#fff',
                                padding: '10px 60px',
                                backgroundColor: '#018AE0',
                                fontSize: '18px',
                                fontWeight: '600',
                                borderRadius: '24px',
                                marginTop: '16px',
                                display: 'block',
                                width: '208px',
                                textAlign: 'center'
                            }}
                        >
                            Contact us
                        </Link>
                    </Container>
                    <Container
                        maxWidth='100%'
                        width='100%'
                        margin='0'
                        padding='0 16px'
                        flex='0 0 41.67%'
                    >
                        <Image
                            src={IMAGES.HomeService}
                        />
                    </Container>
                    <Container
                        maxWidth='100%'
                        width='100%'
                        margin='0'
                        flex='0 0 1'
                    >
                        <SliderBoxService />
                    </Container>
                </Flex>
            </Container >
        </Container >
    );
}

export default HomeService;