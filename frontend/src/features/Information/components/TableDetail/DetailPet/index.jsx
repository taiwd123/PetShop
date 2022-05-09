import React from 'react';
import { Box, List, ListItem, Text, Heading, Spinner, Flex } from '@chakra-ui/react';
import Loading from '../../../../../components/Loading'
import PropTypes from 'prop-types';

DetailPet.propTypes = {
    dataBillPet: PropTypes.object
};

function DetailPet(props) {
    const { dataBillPet } = props
    return (
        <>
            {dataBillPet !== null ?
                <List
                    padding='10px 20px'
                >
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>Full name: </strong>
                            {dataBillPet.userBuyPet.firstName + " " + dataBillPet.userBuyPet.lastName}
                        </Text>
                    </ListItem>
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>Street: </strong>
                            {dataBillPet.userBuyPet.address.houseNumber + ", " + dataBillPet.userBuyPet.address.streetName}
                        </Text>
                    </ListItem>
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>City: </strong>
                            {dataBillPet.userBuyPet.address.province + ", " + dataBillPet.userBuyPet.address.city}
                        </Text>
                    </ListItem>
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>Phone: </strong>
                            {dataBillPet.userBuyPet.phone}
                        </Text>
                    </ListItem>
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>Pet name: </strong>
                            {dataBillPet.petSale.name}
                        </Text>
                    </ListItem>
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>Location: </strong>
                            {dataBillPet.petSale.location}
                        </Text>
                    </ListItem>
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>Vaccinated: </strong>
                            {dataBillPet.petSale.vaccinated ? 'Vaccinated' : 'No Vaccinated'}
                        </Text>
                    </ListItem>
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>Breed: </strong>
                            {dataBillPet.petSale.breed}
                        </Text>
                    </ListItem>
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>Price: </strong>
                            {dataBillPet.petSale.price}
                            $
                        </Text>
                    </ListItem>
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>Category: </strong>
                            {dataBillPet.petSale.category}
                        </Text>
                    </ListItem>
                </List>
                :
                // <Text padding='10px 20px'>No Info</Text>
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    margin='80px'
                >
                    <Spinner
                        thickness='8px'
                        speed='0.8s'
                        emptyColor='gray.200'
                        color='black.300'
                        size='xl'
                    />
                </Flex>
            }
        </>
    );
}

export default DetailPet;