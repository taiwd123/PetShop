import React from 'react';
import PropTypes from 'prop-types';
import { Container, Flex, Heading, Text } from '@chakra-ui/react'
import IMAGES from '../../constants/images';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { AiOutlineRight } from "react-icons/ai";
import { Link } from 'react-router-dom'

Banner.propTypes = {
    arrHeading: PropTypes.string,
    headingPage: PropTypes.string
};

function Banner(props) {
    const { arrHeading, headingPage } = props
    console.log(`length: ${arrHeading.length}`);
    const arr = JSON.parse(arrHeading)
    return (
        <Container
            margin='0'
            padding='0'
            maxWidth='100%'
            width='auto'
            backgroundImage={IMAGES.Banner}
            height='212'
            marginTop='148px'
            padding='64px 0'
            backgroundSize={'cover'}
            backgroundRepeat='no-repeat'
            backgroundPosition='center center'
            position='relative'
            backgroundSize='cover'
            _before={{
                content: '""',
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                width: '100%',
                height: '100%',
                zIndex: '0',
                background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%)',
            }}
        >
            <Container
                margin='0 190px'
                padding='0'
                maxWidth='100%'
                width='auto'
                position='absolute'
                zIndex='1'
            >
                <Heading
                    color='#fff'
                    fontSize='60px'
                >
                    {headingPage}
                </Heading>
                <Flex alignItems='center' justifyContent='center' borderRadius='5px' background='#D61C62' height='30px' maxWidth='max-content' padding='5px 30px'>
                    <Link to='/'
                        style={{
                            lineHeight: '14px',
                            fontSize: '14px',
                            fontWeight: '400',
                            color: '#fff'
                        }}
                    >
                        Home
                    </Link>
                    {arr.map((item, index) => {
                        if (index < arr.length - 1) {
                            return (
                                <Link to={`/${item.link}`}
                                    key={index}
                                    style={{
                                        lineHeight: '14px',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        color: '#fff'
                                    }}
                                >
                                    <ChevronRightIcon color='#fff' />
                                    {item.head}
                                </Link>
                            )

                        }
                        else {
                            return (
                                <Text key={index} lineHeight='14px' fontSize='14px' fontWeight='400' color='#cecece'>
                                    <ChevronRightIcon color='#fff' />
                                    {item.head}
                                </Text>
                            )
                        }
                    })}

                </Flex>
            </Container>

        </Container>
    );
}

export default Banner;