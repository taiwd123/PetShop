import React from 'react';
import PropTypes from 'prop-types';
import { Container, Heading, Text, Button, Input, Flex } from '@chakra-ui/react'
import IMAGES from '../../constants/images';
import { useLocation } from 'react-router-dom';

NewsLetter.propTypes = {
    heading: PropTypes.string,
    description: PropTypes.string
};

function NewsLetter(props) {
    const location = useLocation();

    if (location.pathname === '/admin/profile' || !location.pathname.match('/admin/*') || location.pathname === '/admin') {
        return (
            <Container
                maxWidth='100%'
                margin='0'
                padding='90px 0'
                height='320px'
                backgroundImage={IMAGES.NewsLetter}
                backgroundPosition='center bottom'
                backgroundRepeat='no-repeat'
                backgroundSize='cover'
                boxShadow='inset 0 0 0 1000px rgb(41 41 41 / 42%)'
            >
                <Container
                    margin='0 190px'
                    maxWidth='100%'
                    width='auto'
                    height='100%'
                    padding='0 15px'
                >
                    <Container
                        maxWidth='100%'
                        width='480px'
                        marginLeft='0'
                        textAlign='center'
                    >
                        <Heading color='#fff' fontWeight='600' marginBottom='20px'>{props.heading}</Heading>
                        <Text color='#fff' marginBottom='16px'>{props.description}</Text>
                        <form action="#">
                            <Flex>
                                <Input
                                    backgroundColor='#fff'
                                    placeholder='Your mail here'
                                    height='44px' maxWidth='314px'
                                    borderTopRightRadius='0'
                                    borderBottomRightRadius='0'
                                    border='0'
                                    required={true}
                                    type='email'
                                />
                                <Button
                                    type='submit'
                                    borderTopLeftRadius='0'
                                    borderBottomLeftRadius='0'
                                    height='44px'
                                    backgroundColor='#018AE0'
                                >
                                    SUBCRIBE
                                </Button>
                            </Flex>
                        </form>
                    </Container>

                </Container>
            </Container>
        );
    }
    return null;
}

export default NewsLetter;