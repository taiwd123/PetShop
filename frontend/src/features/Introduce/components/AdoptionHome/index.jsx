import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text, Heading, Icon, Flex } from '@chakra-ui/react';
import { FaPaw } from "react-icons/fa";
import IMAGES from '../../../../constants/images';
import SliderAdoption from './SliderAdoption';

AdoptionHome.propTypes = {

};

function AdoptionHome(props) {
    return (
        <Container
            maxWidth='100%'
            width='auto'
            margin='0'
            padding='90px 0'
            backgroundImage={IMAGES.AdoptionHome}
            backgroundPosition='left center'
            backgroundSize='cover'
            backgroundAttachment='fixed'
            boxShadow='inset 0 0 0 1000px rgb(41 41 41 / 87%)'
        >
            <Container

                maxWidth='100%'
                width='auto'
                margin='0 0 90px 0'
                padding='0'
                textAlign='center'
            >
                <Text
                    color='#fff'
                    fontSize='18px'
                    fontWeight='600'
                    _before={{
                        content: '""',
                        display: 'inline-block',
                        position: 'relative',
                        top: '-4px',
                        width: '24px',
                        height: '2px',
                        background: "#fff",
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
                        background: "#fff",
                    }}
                >
                    FIND YOUR FRIEND
                </Text>
                <Heading
                    fontSize='45px'
                    fontWeight='700'
                    color='#fff'
                >
                    ADOPTION
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
                maxWidth='100%'
                width='auto'
                margin='0 190px'
                padding='0 16px'
                alignItems='center'
                justifyContent='center'
                flexWrap='wrap'
            >
                <Container
                    flex='0 0 1'
                    maxWidth='100%'
                    width='100%'
                    textAlign='center'
                    margin='0'
                    padding='0'
                >
                    <Heading
                        color='#fff'
                        marginBottom='20px'
                    >
                        Adopting is an act of {' '}
                        <span style={{ color: '#D61C62' }}>
                            love
                        </span>
                    </Heading>
                    <Text
                        color='#fff'
                        fontSize='22px'
                        fontWeight='300'
                        marginBottom='20px'
                    >
                        Etiam rhoncus leo a dolor placerat, nec elem entum ipsum convall.
                    </Text>
                    <Text
                        color='#fff'
                        fontSize='16px'
                        fontWeight='400'
                        marginBottom='20px'
                    >
                        Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id Maecenas at arcu ro In aliquet magna nec lobortis maximus.
                        Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                    </Text>
                </Container>
                <Container
                    maxWidth='100%'
                    flex='0 0 1'
                    width='100%'
                // padding='0 50px'
                >
                    <SliderAdoption />
                </Container>
            </Flex>
        </Container>
    );
}

export default AdoptionHome;