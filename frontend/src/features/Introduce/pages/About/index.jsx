import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import { Container, Flex } from '@chakra-ui/layout';
import Content from '../../components/ContentAbout';
import SideBar from '../../../../components/SideBar'
import SliderAbout from '../../components/Slider';
import AccordionAbout from '../../components/Accordion';
import Footer from '../../../../components/Footer'
import NewsLetter from '../../../../components/NewsLetter'

About.propTypes = {

};

function About(props) {
    window.scrollTo(0, 0)
    const arr = [{
        head: 'About us',
        link: ''
    }]
    const arrJson = JSON.stringify(arr)
    return (
        <>
            <Banner arrHeading={arrJson} headingPage='About us' />
            <Container
                backgroundColor='#fff'
                width='auto'
                padding='90px 16px !important'
                margin='0 190px'
                maxWidth='100%'
            >
                <Flex
                    flexWrap='wrap'
                    margin='0 -15px'
                    width='100% !important'
                >
                    <Container
                        flex='0 0 75%'
                        maxWidth='75%'
                        margin='0'
                        paddingRight='20px'
                    >
                        <Content />
                        <AccordionAbout padd='20px 20px' />
                        <Container
                            margin='48px 0 0 0'
                            padding='0 15px'
                            maxWidth='100%'
                        >
                            <SliderAbout />
                        </Container>
                    </Container>
                    <SideBar maxW='25%' flex='0 0 25%' />
                </Flex>
            </Container>
        </>
    );
}

export default About;