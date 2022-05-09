import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text, Heading, Icon, Flex } from '@chakra-ui/react';
import { FaPaw } from "react-icons/fa";
import SliderGallery from './SliderGallery';

GalleryHome.propTypes = {

};

function GalleryHome(props) {
    return (
        <Container
            maxWidth='100%'
            width='auto'
            margin='0'
            padding='90px 0 0 0'
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
                    IMAGE TOUR
                </Text>
                <Heading
                    fontSize='45px'
                    fontWeight='700'
                    color='#000'
                >
                    GALLERY
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
            <Container
                maxWidth='100%'
                width='auto'
                margin='0'
                padding='0'
            >
                <SliderGallery marg='0 0' />
            </Container>
        </Container>
    );
}

export default GalleryHome;