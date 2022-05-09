import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, List, ListItem, Text, Heading } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import billAPI from '../../../../api/billApi';
import bookServiceAPI from '../../../../api/bookServiceApi';
import DetailPet from './DetailPet';
import DetailService from './DetailService';
import moment from 'moment'

TableDetail.propTypes = {
   stateHistory: PropTypes.string
};

function TableDetail(props) {
   const { stateHistory } = props
   const location = useLocation()
   const [dataBillPet, setDataBillPet] = useState(null)
   const [dataBillService, setDataBillService] = useState(null)
   // console.log('location: ', location.state);
   useEffect(() => {
      const testMoment = moment("2022-04-08T09:20:26", 'YYYY-MM-DDThh:mm:ss').format("DD/MM/YYYY hh:mm");
      console.log(testMoment);
      const idBill = location.state.idBill
      if (idBill) {
         if (stateHistory === 'Pets') {
            const getBill = async () => {
               const response = await billAPI.getBilById(idBill)
               const { data } = response.data
               setDataBillPet(data.billInfo)
               setDataBillService(null)
               // console.log('data pet', data)
            }
            getBill()
         }
         if (stateHistory === 'Services') {
            const getBooking = async () => {
               const response = await bookServiceAPI.getByIdBooking(idBill)
               const { data } = response.data
               setDataBillService(data.BookingInfo)
               setDataBillPet(null)
               // console.log('service', data)
            }
            getBooking()
         }
      }
   }, [location.state, stateHistory])
   // console.log('dataBillService', dataBillService);
   // console.log('stateHistory: ', stateHistory);
   return (
      <Box
         h={'100%'}
         marginTop={'-20'}
         marginBottom={'0'}
         flex='1'
         boxShadow={'dark-lg'}

         background='#fff'
         backgroundClip={'border-box'}

         // border={'1px solid rgba(0, 0, 0, .05)'}
         borderRadius='0.375rem'

         paddingBottom='1.5rem'
      >
         <Heading
            textAlign='center'
            color='#018AE0'
            fontSize='30px'
            marginTop='40px'
         >Detail {stateHistory}
         </Heading>
         {
            stateHistory === 'Pets'
               ?
               <DetailPet dataBillPet={dataBillPet} />
               :
               <DetailService dataBillService={dataBillService} />
         }
      </Box>
   );
}

export default TableDetail;