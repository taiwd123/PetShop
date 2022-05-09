import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Text, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './CallWidget.scss'

BoxWidget.propTypes = {
    srcImage: PropTypes.string,
    address: PropTypes.string,
    title: PropTypes.string,
};

function BoxWidget(props) {
    return (
        <Container
            maxWidth='100%'
            width='auto'
            margin='0'
            padding='0'
            flex='0 0 33.333%'
            borderBottom='4px solid #018AE0'
            position='relative'
            className='box-widget'
        >
            <Link
                to={`/${props.address}`}
            >
                <Image
                    height='auto'
                    src={props.srcImage}
                    transform='scale(1)'
                    transition='transform .4s'
                />
                <Container
                    maxWidth='100%'
                    width='100%'
                    margin='0'
                    padding='0'
                    position='absolute'
                    height='110px'
                    background='rgba(0,0,0,0.52)'
                    bottom='0'
                    textAlign='center'
                    className='box-title'
                    transition='height .4s linear'
                >
                    <Container
                        bottom='10%'
                        position='absolute'
                        width='100%'
                    >
                        <Text
                            color='#fff'
                            fontSize='18px'
                            fontWeight='600'
                            _before={{
                                content: '""',
                                display: 'inline-block',
                                position: 're   lative',
                                top: '-4px',
                                width: '32px',
                                height: '2px',
                                marginRight: '10px',
                                background: 'rgba(255, 255, 255, 0.24)',
                            }}
                            _after={{
                                content: '""',
                                display: 'inline-block',
                                position: ' relative',
                                top: '-4px',
                                width: '32px',
                                height: '2px',
                                marginLeft: '10px',
                                background: "rgba(255,255,255,0.24)",
                            }}
                        >
                            MORE INFO
                        </Text>
                        <Heading
                            textAlign='center'
                            color='#fff'
                            marginBottom='20px'
                        >
                            {props.title}
                        </Heading>
                    </Container>
                </Container>
            </Link>

        </Container>
    );
}

export default BoxWidget;