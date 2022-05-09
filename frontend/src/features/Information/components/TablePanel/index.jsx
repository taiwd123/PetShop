import React from 'react';
import PropTypes from 'prop-types';
import { Link, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Icon } from '@chakra-ui/react';
import { FiMoreHorizontal } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import moment from 'moment'

TablePanel.propTypes = {
   currentItems: PropTypes.array,
   serialNum: PropTypes.number,
   stateHistory: PropTypes.string,
};

function TablePanel(props) {
   const { tableCaption, currentItems, serialNum, stateHistory } = props;
   const navigate = useNavigate()
   // console.log('serialNum history: ', serialNum);
   // console.log('stateHistory table: ', stateHistory);
   return (
      <TableContainer>
         <Table variant='striped' colorScheme='whatsapp'>
            <TableCaption>{tableCaption}</TableCaption>
            <Thead>
               <Tr>
                  <Th textAlign='center'>Serial number</Th>
                  <Th textAlign='center'>Date-Time</Th>
                  <Th textAlign='center' isNumeric>Amount</Th>
                  <Th textAlign='center'>Detail</Th>
               </Tr>
            </Thead>
            {stateHistory === 'Pets' ?

               <Tbody>
                  {
                     currentItems &&
                     currentItems.map((item, index) => {
                        return (
                           <Tr key={index}>
                              <Td textAlign='center'>{serialNum + index + 1}</Td>
                              <Td textAlign='center'>{moment(`${item.paymentDate}`, 'YYYY-MM-DDThh:mm:ss').format("DD/MM/YYYY hh:mm")}</Td>
                              <Td textAlign='center'>{item.price}$</Td>
                              <Td textAlign='center'>
                                 <Icon
                                    as={FiMoreHorizontal}
                                    cursor='pointer'
                                    fontSize='30px'
                                    borderRadius='50%'
                                    onClick={() => navigate('/history', { state: { idBill: item.id } })}
                                    _hover={{
                                       backgroundColor: '#018AE0',

                                    }}
                                 />
                              </Td>
                           </Tr>
                        )
                     })
                  }
               </Tbody> :
               <Tbody>
                  {
                     currentItems &&
                     currentItems.map((item, index) => {
                        if (item.service !== undefined)
                           return (
                              <Tr key={index}>
                                 <Td textAlign='center'>{serialNum + index + 1}</Td>
                                 <Td textAlign='center'>{moment(`${item.dateBooking}`, 'YYYY-MM-DDThh:mm:ss').format("DD/MM/YYYY hh:mm")}</Td>
                                 <Td textAlign='center'>{item.service.price}$</Td>
                                 <Td textAlign='center'>
                                    <Icon
                                       as={FiMoreHorizontal}
                                       cursor='pointer'
                                       fontSize='30px'
                                       borderRadius='50%'
                                       onClick={() => navigate('/history', { state: { idBill: item.id } })}
                                       _hover={{
                                          backgroundColor: '#018AE0',

                                       }}
                                    />
                                 </Td>
                              </Tr>
                           )
                     })
                  }
               </Tbody>
            }
            <Tfoot>
               <Tr>
                  <Th textAlign='center'>Serial number</Th>
                  <Th textAlign='center'>Date-Time</Th>
                  <Th textAlign='center' isNumeric>Amount</Th>
                  <Th textAlign='center'>Detail</Th>
               </Tr>
            </Tfoot>
         </Table>
      </TableContainer>
   );
}

export default TablePanel;