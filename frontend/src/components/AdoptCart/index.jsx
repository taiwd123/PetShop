import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Image, Container, Heading, List, ListItem, Text } from '@chakra-ui/react';
import IMAGES from '../../constants/images';
import { MdPets } from "react-icons/md";
import { FaDog } from "react-icons/fa";
import { GiLoveInjection } from "react-icons/gi";
import { Link } from 'react-router-dom';
import './AdoptCart.scss'

AdoptCart.propTypes = {
    srcImage: PropTypes.string,
    namePet: PropTypes.string,
    gender: PropTypes.string,
    age: PropTypes.number,
    breed: PropTypes.string,
    info: PropTypes.string,
    vaccin: PropTypes.bool,
    maxW: PropTypes.string,
    h: PropTypes.string,
    idPet: PropTypes.string,
};

function AdoptCart(props) {
    const { maxW, h } = props
    return (
        <Flex
            maxWidth={maxW ? maxW : '544px'}
            height={h ? h : '396px'}
            flexWrap='wrap'
            backgroundImage={IMAGES.AdoptCart}
            backgroundRepeat='repeat'
            backgroundColor='#f4f4f4!important'
            padding='20px'
            className='adopt'
        >

            <Flex
                width='100%'
            >
                <Container
                    margin='0'
                    padding='0'
                    width='41.67%'
                    flex='0 0 41.67%'
                    padding='0 15px'
                >
                    <Link
                        to={`/adoption/${props.idPet}`}
                        style={{
                            overflow: 'hidden',
                            display: 'block',
                            borderBottom: '5px solid #018AE0',
                        }}
                    >
                        <Image
                            objectFit='cover'
                            src={props.srcImage}
                            alt='Pet 1'
                            width='162px'
                            height='162px'
                        />
                    </Link>
                </Container>
                <Container
                    maxWidth='58,33%'
                    padding='0 15px'
                >
                    <Heading
                        margin='20px 0'
                        fontSize='24px'
                    >
                        {props.namePet}
                    </Heading>
                    <List>
                        <ListItem
                            borderBottom='1px dashed #cecece'
                            padding='5px 0'
                        >
                            <strong>Gender: {' '}</strong>{props.gender}
                        </ListItem>
                        <ListItem
                            borderBottom='1px dashed #cecece'
                            padding='5px 0'
                        >
                            <strong>Age: {' '}</strong>{props.age} {' '}years
                        </ListItem>
                        <ListItem
                            borderBottom='1px dashed #cecece'
                            padding='5px 0'
                        >
                            <strong>Breed: {' '}</strong>{props.breed ? props.breed : 'No Info'}
                        </ListItem>
                    </List>
                </Container>
            </Flex>
            <Container
                maxWidth='100%'
                marginTop='15px'
                textAlign='center'
            >
                <List
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    padding='10px'
                    marginBottom='20px'
                    backgroundColor='#fff'
                >
                    <ListItem
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        padding='5px 0'
                        margin='6px'
                    >
                        <MdPets />
                        <Text
                            fontSize='12px'
                            fontWeight='500'
                            textTransform='uppercase'
                        >
                            {props.info}
                        </Text>
                    </ListItem>
                    <ListItem
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        padding='5px 0'
                        margin='6px'
                    >
                        <GiLoveInjection />
                        <Text
                            fontSize='12px'
                            fontWeight='500'
                            textTransform='uppercase'
                        >
                            {props.vaccin ? 'vaccinated' : 'No vaccinated'}
                        </Text>
                    </ListItem>
                </List>
                <Flex
                    alignItems='center'
                    justifyContent='center'
                >
                    <Link
                        to={`/adoption/${props.idPet}`}
                        style={{
                            marginTop: '5px',
                            padding: '10px 50px',
                            backgroundColor: '#018AE0',
                            borderRadius: '50px',
                            color: '#fff',
                            fontWeight: '700',
                        }}

                    >
                        MORE INFO
                    </Link>
                </Flex>

            </Container>
        </Flex>
    );
}

export default AdoptCart;