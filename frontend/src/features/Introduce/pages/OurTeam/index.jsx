import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import { Container, Heading } from '@chakra-ui/react';
import SliderMember from '../../components/OurTeamHome/SliderMember';

OurTeam.propTypes = {

};

function OurTeam(props) {
    window.scrollTo(0, 0)
    const arr = [{
        head: 'OurTeam',
        link: ''
    }]
    const arrJson = JSON.stringify(arr)
    return (
        <>
            <Banner arrHeading={arrJson} headingPage='OurTeam' />
            <Container
                maxWidth='100%'
                width='auto'
                margin='0 190px'
                padding='90px 15px'
            >
                <Container
                    maxWidth='100%'
                    width='auto'
                    margin='0'
                    padding='0'
                    textAlign='center'
                >
                    <Heading
                        fontWeight='600'
                    >
                        About Our Team
                    </Heading>
                </Container>
                <Container
                    maxWidth='100%'
                    width='auto'
                    margin='40px 0 0 0'
                    padding='0'
                    height='500px'
                >
                    <SliderMember members={3} />
                </Container>

            </Container>
        </>
    );
}

export default OurTeam;