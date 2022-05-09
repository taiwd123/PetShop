import React from 'react';
import PropTypes from 'prop-types';
import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import IMAGES from '../../../../constants/images';

IntroHome.propTypes = {

};

function IntroHome(props) {
    return (
        <Container
            maxWidth='100%'
            width='auto'
            height='306px'
            padding='90px 0'
            backgroundImage={IMAGES.IntroHome}
            backgroundRepeat='no-repeat'
            backgroundPosition='right center'
        >
            <Container
                maxWidth='100%'
                width='auto'
                padding='0 16px'
                margin='0 190px'
            >
                <Flex
                    alignItems='center'
                    justifyContent='center'
                >
                    <Container
                        maxWidth='100%'
                        padding='0 16px'
                        width='auto'
                        flex='0 0 75%'
                    >
                        <Heading
                            marginBottom='20px'
                        >
                            Quality & Experience
                        </Heading>
                        <Text
                            fontSize='17px'
                            lineHeight='24px'
                            color='#6f6f6f'
                            fontWeight='400'
                        >
                            Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id.
                            In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                        </Text>
                    </Container>
                    <Container
                        maxWidth='100%'
                        padding='0 16px'
                        width='auto'
                        flex='0 0 25%'
                        display='flex'
                        alignItems='center'
                        justifyContent='end'
                    >
                        <Link
                            to='/contact'
                            style={{
                                color: '#fff',
                                padding: '10px 60px',
                                backgroundColor: '#D61C62',
                                fontSize: '18px',
                                fontWeight: '600',
                                borderRadius: '24px',
                            }}
                        >
                            Contact us
                        </Link>
                    </Container>
                </Flex>
            </Container>
        </Container>
    );
}

export default IntroHome;