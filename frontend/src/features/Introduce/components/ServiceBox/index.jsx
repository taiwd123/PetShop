import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Heading, Text } from '@chakra-ui/react';
import IMAGES from '../../../../constants/images';
import { Link } from 'react-router-dom';

ServiceBox.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    srcImage: PropTypes.string,
};

function ServiceBox(props) {
    return (
        <Container
            width='340px'
            margin='0 30px 0 0'
            padding='0'
            position='relative'
        >
            <Container
                backgroundColor='#1446A0!important'
                backgroundImage={IMAGES.FooterBG}
                backgroundPosition='center bottom'
                backgroundRepeat='repeat-x'
                padding='0 10px 30px '
                border='1px solid transparent'
                borderRadius='20px'
                marginTop='90px'
            >
                <Container
                    textAlign='center'
                    padding='15px 20px 30px'
                    marginTop='-80px'
                    borderRadius='25px'
                    backgroundColor='#f4f4f4!important'
                    position='relative'
                    transition='all 0.3s'
                    height='374'
                >
                    <Container
                        display='inline-block'
                        padding='0'
                        marginBottom='20px'
                        maxWidth='180px'
                        height='180px !important'
                    >
                        <Image
                            src={props.srcImage}
                            borderRadius='full'
                            boxSize='180px'
                            border='10px solid #fff'
                        />
                    </Container>
                    <Heading
                        fontSize='22px'
                        fontWeight='700'
                        textTransform='uppercase'
                        marginBottom='10px'
                    >
                        <Link
                            to='/services'
                        >
                            {props.title}
                        </Link>
                    </Heading>
                    <Text
                        marginBottom='10px'
                        color='#6f6f6f'
                        fontSize='16px'
                        lineHeight='24px'
                        fontWeight='400'
                    >
                        {props.description}
                    </Text>
                </Container>
                <Container
                    margin='0'
                    padding='0'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Link
                        to='/services-single'
                        style={{
                            color: '#fff',
                            padding: '10px 50px',
                            backgroundColor: '#D61C62',
                            fontSize: '17px',
                            fontWeight: 'bold',
                            display: 'inline-block',
                            borderRadius: '24px',
                            marginTop: '30px',
                        }}
                    >
                        READ MORE
                    </Link>
                </Container>

            </Container>

        </Container >
    );
}

export default ServiceBox;