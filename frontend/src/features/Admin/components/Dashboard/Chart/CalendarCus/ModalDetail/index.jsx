import React from 'react';
import PropTypes from 'prop-types';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button, Skeleton
} from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Heading,
    TableContainer,
} from '@chakra-ui/react'
import moment from 'moment';

ModalDetail.propTypes = {

};

function ModalDetail(props) {
    const { isOpen, onClose, modalTitle, currBooking } = props
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size='5xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{modalTitle}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {currBooking !== null && currBooking.length !== 0 ?
                            <TableContainer>
                                <Table variant='striped' colorScheme='teal'>
                                    <Thead>
                                        <Tr>
                                            <Th textAlign='center' isNumeric>Serial Number</Th>
                                            <Th textAlign='center'>Name's Booking</Th>
                                            <Th textAlign='center'>Service Name</Th>
                                            <Th textAlign='center'>Payment</Th>
                                            <Th textAlign='center'>Status</Th>
                                            <Th textAlign='center'>Date Booking</Th>
                                            <Th textAlign='center' isNumeric>Price</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {

                                            currBooking.map((item, index) => {
                                                return (
                                                    <Tr key={index}>
                                                        <Td textAlign='center'>
                                                            {index + 1}
                                                        </Td>
                                                        <Td textAlign='center'>
                                                            {item.userBookService.firstName + ' ' + item.userBookService.lastName}
                                                        </Td>
                                                        <Td textAlign='center'>
                                                            {item.service.name}
                                                        </Td>
                                                        <Td textAlign='center'>
                                                            {item.payment ? 'Paid' : 'Unpaid'}
                                                        </Td>
                                                        <Td textAlign='center'>
                                                            {item.status}
                                                        </Td>
                                                        <Td textAlign='center'>
                                                            {moment(item.dateBooking).format('YYYY-MM-DD')}
                                                        </Td>
                                                        <Td textAlign='center'>
                                                            {'$' + item.service.price}
                                                        </Td>
                                                    </Tr>
                                                )
                                            })
                                        }
                                    </Tbody>
                                    <Tfoot>
                                        <Tr>
                                            <Th textAlign='center' isNumeric>Serial Number</Th>
                                            <Th textAlign='center'>Name's Booking</Th>
                                            <Th textAlign='center'>Service Name</Th>
                                            <Th textAlign='center'>Payment</Th>
                                            <Th textAlign='center'>Status</Th>
                                            <Th textAlign='center'>Date Booking</Th>
                                            <Th textAlign='center' isNumeric>Price</Th>
                                        </Tr>
                                    </Tfoot>
                                </Table>
                            </TableContainer>
                            :
                            // <Skeleton width='976px' height='231px' />
                            <Heading textAlign='center'>No Info Booking Service</Heading>
                        }
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalDetail;