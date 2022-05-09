import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner'
import { Container, Heading, Text } from '@chakra-ui/react';
import SliderGallery from '../../components/GalleryHome/SliderGallery';

Gallery.propTypes = {

};

function Gallery(props) {
    window.scrollTo(0, 0)

    const arr = [{
        head: 'Gallery',
        link: ''
    }]
    const arrJson = JSON.stringify(arr)
    return (
        <>
            <Banner arrHeading={arrJson} headingPage='Gallery' />
            <Container
                maxWidth='100%'
                width='auto'
                padding='90px 0'
                margin='0'
            >
                <Container
                    maxWidth='100%'
                    width='auto'
                    padding='0'
                    margin='0 190px'
                >
                    <Container
                        maxWidth='100%'
                        width='auto'
                        padding='0'
                        margin='0 25%'
                        textAlign='center'
                    >
                        <Heading
                            marginBottom='20px'
                            fontWeight='600'
                        >
                            Our Photo Gallery
                        </Heading>
                        <Text
                            marginBottom='20px'
                            color='#6f6f6f'
                            fontWeight='400'
                            fontSize='16px'
                        >
                            In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                        </Text>
                    </Container>
                </Container>
                <Container
                    maxWidth='100%'
                    width='auto'
                    padding='0'
                    margin='40px 0 0 0'
                >
                    <SliderGallery marg='0 0' />
                </Container>
            </Container>
        </>
    );
}

export default Gallery;