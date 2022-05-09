import React from 'react';
import PropTypes from 'prop-types';
import { Container, Flex, Image, Text, Heading } from '@chakra-ui/react';
import IMAGES from '../../../../constants/images';
import BoxWidget from './BoxWidget';

CallWidget.propTypes = {

};

function CallWidget(props) {
    return (
        <Container
            maxWidth='100%'
            width='auto'
            height='342px'
            margin='0'
            padding='0'
        >
            <Flex
                alignItems='center'
                justifyContent='center'
            >
                <BoxWidget srcImage={IMAGES.BoxService} title='Our Services' address='service' />
                <BoxWidget srcImage={IMAGES.BoxAbout} title='About us' address='aboutus' />
                <BoxWidget srcImage={IMAGES.BoxTeam} title='Our Team' address='team' />
            </Flex >
        </Container >
    );
}

export default CallWidget;