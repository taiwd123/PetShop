import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Heading, List, ListItem, Text, Skeleton } from '@chakra-ui/react'
import { MdPets } from "react-icons/md";
import { GiLoveInjection } from "react-icons/gi";
AdoptCartSingle.propTypes = {
    pet: PropTypes.object,
    srcImage: PropTypes.string,
    isLoading: PropTypes.bool,
};

function AdoptCartSingle(props) {
    const { pet, srcImage, isLoading } = props
    // console.log('isLoading: ', isLoading);
    return (
        <Skeleton isLoaded={isLoading} width='100%' height='100%'>
            <Container
                maxWidth='100%'
                flex='0 0 1'
                width='auto'
                padding='20px'
                margin='10px'
                display='flex'
            >
                <Container
                    maxWidth='33.3333%'
                    width=' '
                    flex='0 0 33.3333%'
                    margin='0'
                    padding='0'
                    float='left'
                >

                    <Image
                        borderRadius='4px'
                        maxWidth='100%'
                        height='auto'
                        src={srcImage}
                    />
                </Container>
                <Container
                    maxWidth='66.6667%'
                    flex='0 0 66.6667%'
                    width='auto'
                    margin='0'
                    padding='0 20px'
                    float='right'
                >
                    <Heading
                        fontSize='42px'
                        fontWeight='600'
                        marginBottom='8px'
                    >
                        {pet.name}
                    </Heading>
                    <List
                        margin='16px 0'
                    >
                        <ListItem
                            fontSize='18px'
                            borderBottom='1px dashed #cecece'
                            padding='6px 0'
                            marginBottom='2px'
                        >
                            <strong>Gender: </strong>
                            {pet.gender}
                        </ListItem>
                        <ListItem
                            fontSize='18px'

                            borderBottom='1px dashed #cecece'
                            padding='6px 0'
                            marginBottom='2px'
                        >
                            <strong>Age: </strong>
                            {pet.age} years
                        </ListItem>
                        <ListItem
                            fontSize='18px'

                            borderBottom='1px dashed #cecece'
                            padding='6px 0'
                            marginBottom='2px'
                        >
                            <strong>Breed: </strong>
                            {pet.breed}
                        </ListItem>
                        <ListItem
                            fontSize='18px'

                            borderBottom='1px dashed #cecece'
                            padding='6px 0'
                            marginBottom='2px'
                        >
                            <strong>Price: </strong>
                            {pet.price} $
                        </ListItem>
                    </List>

                    <List
                        display='flex'
                        justifyContent='start'
                        alignItems='center'
                        padding='10px 0'
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
                                {pet.description}
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
                                {pet.vaccinated ? 'vaccinated' : 'no vaccinated'}
                            </Text>
                        </ListItem>
                    </List>
                </Container>
            </Container>
        </Skeleton>
    );
}

export default AdoptCartSingle;