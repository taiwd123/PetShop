import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text, Heading, Icon, Flex } from '@chakra-ui/react';
import { FaPaw } from "react-icons/fa";
import { Link } from 'react-router-dom';
import BoxMember from './BoxMember';
import SliderMember from './SliderMember';

OurTeamHome.propTypes = {

};

function OurTeamHome(props) {
    return (
        <Container
            maxWidth='100%'
            width='auto'
            margin='0 190px'
            padding='90px 16px'
            boxShadow='inset 0 0 0 1000px rgba(255 255 255 / 42%)'
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
                    QUALIFIED PROFESSIONALS
                </Text>
                <Heading
                    fontSize='45px'
                    fontWeight='700'
                    color='#000'
                >
                    OUR TEAM
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

            >
                <Container
                    flex='0 0 25%'
                    maxWidth='25%'
                    width='auto'
                    padding='0 10px'
                    margin='0'
                >
                    <Heading
                        fontWeight='700'
                        marginBottom='20px'
                    >
                        Meet our professionals
                    </Heading>
                    <Text
                        fontWeight='300'
                        fontSize='22px'
                        color='#6f6f6f'
                        marginBottom='20px'
                    >
                        We have an experienced qualified team to take care of your best friend
                    </Text>
                    <Flex
                        alignItems='center'
                        justifyContent='start'
                    >
                        <Link
                            to='/ourteam'
                            style={{
                                display: 'block',
                                width: '80%',
                                backgroundColor: '#D61C62',
                                borderRadius: '24px',
                                textAlign: 'center',
                                padding: '10px 40px',
                                color: '#fff',
                                fontWeight: '700',
                            }}
                        >
                            VIEW ALL TEAM
                        </Link>
                    </Flex>
                </Container>
                <Container
                    flex='0 0 75%'
                    maxWidth='75%'
                    width='auto'
                    padding='0'
                    margin='0'
                >
                    <SliderMember />
                </Container>
            </Flex>
        </Container>
    );
}

export default OurTeamHome;