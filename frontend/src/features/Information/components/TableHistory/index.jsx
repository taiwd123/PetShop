import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Spacer } from '@chakra-ui/react';
import TablePanel from '../TablePanel';
import PaginateHistory from '../PaginateHistory';
import TableDetail from '../TableDetail';
import { useLocation } from 'react-router';

TableHistory.propTypes = {

};

function TableHistory(props) {
   const [stateHistory, setstateHistory] = useState('Pets')
   const location = useLocation()
   const hanldeStatePets = () => {
      setstateHistory('Pets')
      location.state = {
         idBill: ''
      }
   }
   const hanldeStateServices = () => {
      setstateHistory('Services')
      location.state = {
         idBill: ''
      }
   }
   return (
      <>
         <Box
            marginTop={'-20'}
            marginBottom={'0'}
            flex='2'
            boxShadow={'dark-lg'}

            background='#f7fafc'
            backgroundClip={'border-box'}

            border={'1px solid rgba(0, 0, 0, .05)'}
            borderRadius='0.375rem'
         >
            <Tabs isFitted variant='enclosed'>
               <TabList mb='1em'>
                  <Tab
                     onClick={hanldeStatePets}
                     _selected={{ color: '#222', bg: 'blackAlpha.100', border: '1px solid #7f8c8d', borderBottom: '0px' }}>PETS</Tab>
                  <Tab
                     onClick={hanldeStateServices}
                     _selected={{ color: '#222', bg: 'blackAlpha.100', border: '1px solid #7f8c8d', borderBottom: '0px' }} >SERVICES</Tab>
               </TabList>
               <TabPanels>
                  <TabPanel>
                     <PaginateHistory itemsPerPage={5} historyState={stateHistory} />
                  </TabPanel>
                  <TabPanel>
                     <PaginateHistory itemsPerPage={5} historyState={stateHistory} />
                  </TabPanel>
               </TabPanels>
            </Tabs>
         </Box>

         <Spacer maxW='30px' />
         <TableDetail stateHistory={stateHistory} />
      </>
   );
}

export default TableHistory;