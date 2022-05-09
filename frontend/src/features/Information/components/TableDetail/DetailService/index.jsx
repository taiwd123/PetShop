import React from 'react';
import { Box, List, ListItem, Text, Heading, Spinner, Flex } from '@chakra-ui/react';
import Loading from '../../../../../components/Loading'
import PropTypes from 'prop-types';

DetailService.propTypes = {
    dataBillService: PropTypes.object
};

function DetailService(props) {
    const { dataBillService } = props
    return (
        <>
            {dataBillService !== null ?
                <List
                    padding='10px 20px'
                >
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>Full name: </strong>
                            {dataBillService.userBookService.firstName + " " + dataBillService.userBookService.lastName}
                        </Text>
                    </ListItem>
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>Street: </strong>
                            {dataBillService.userBookService.address.houseNumber + ", " + dataBillService.userBookService.address.streetName}
                        </Text>
                    </ListItem>
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>City: </strong>
                            {dataBillService.userBookService.address.province + ", " + dataBillService.userBookService.address.city}
                        </Text>
                    </ListItem>
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>Phone: </strong>
                            {dataBillService.userBookService.phone}
                        </Text>
                    </ListItem>
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>Service name: </strong>
                            {dataBillService.service.name}
                        </Text>
                    </ListItem>
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>Description: </strong>
                            {dataBillService.service.description}
                        </Text>
                    </ListItem>
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>Slot: </strong>
                            {dataBillService.service.slot}
                        </Text>
                    </ListItem>
                    <ListItem
                        margin='12px'
                    >
                        <Text>
                            <strong>Price: </strong>
                            {dataBillService.service.price}
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

export default DetailService;