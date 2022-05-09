import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../../../../app/messageSlice';
import Banner from '../../../../components/Banner';
import { Button, Container, Flex, Heading, Table, Tbody, Td, Th, Thead, Tr, useToast } from '@chakra-ui/react';
import Paypal from '../../components/Paypal';
import moment from 'moment';
import bookingServiceApi from '../../../../api/bookingServiceApi';

ServicesPayment.propTypes = {

};

function ServicesPayment(props) {
   const location = useLocation();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const toast = useToast();
   var services = [];
   const { isLoggedIn, userName } = useSelector((state) => state.auth);
   // console.log(">>> parse date: ", moment(location.state.date).format('YYYY-MM-DD[T]HH:mm:ss[Z]'));

   // console.log(">>> Check state location: ", JSON.parse(location.state.data), " ", location.state.date);

   useEffect(() => {
      if (!isLoggedIn) {
         dispatch(setMessage("You must to login"));
         navigate('/login');
      }
      else if (location.state === null) {
         dispatch(setMessage("You must to booking"));
         navigate('/home');
      }
   }, []);

   var arrJson;
   if (location.state !== null) {
      services = JSON.parse(location.state.data);
      const arr = services.length === 1 ? [
         {
            head: 'Services',
            link: 'services'
         },
         {
            head: 'Service single page',
            link: `services/${services[0].id}`
         },
         {
            head: 'Payment',
            link: ''
         }
      ] : [
         {
            head: 'Services',
            link: 'services',
         },
         {
            head: 'Payment',
            link: ''
         }
      ];

      arrJson = JSON.stringify(arr)
   }

   const handleBookingServicePayPal = () => {
      if (services.length === 1) {
         const params = {
            dateBooking: moment(location.state.date).format('YYYY-MM-DD[T]HH:mm:ss[Z]'),
            serviceId: services[0].id,
            userBookService: userName,
         }

         const bookingService = async () => {
            try {
               const response = await bookingServiceApi.addNewBookingService(params);
               console.log(">>> Check response/bookingServiceApi: ", response);
               toast({
                  title: 'Payment For Booking Service',
                  description: `Thank you for booking!`,
                  status: 'success',
                  duration: '5000',
                  position: 'top',
                  isClosable: true
               });
            } catch (error) {
               console.log(error.response.data);
            }
         }
         bookingService();
      }
      else {
         const servicesId = [];
         services.map((item) => (
            servicesId.push(item.id)
         ));

         const params = {
            dateBooking: moment(location.state.date).format('YYYY-MM-DD[T]HH:mm:ss[Z]'),
            serviceIds: [...servicesId]
         }
         console.log(">>> a: ", params);

         const bookingServices = async () => {
            try {
               const response = await bookingServiceApi.addNewBookingServices(params);
               console.log(">>> Check response/bookingServiceApi: ", response);
               toast({
                  title: 'Payment For Booking Services',
                  description: `Thank you for booking!`,
                  status: 'success',
                  duration: '5000',
                  position: 'top',
                  isClosable: true
               });
            } catch (error) {
               console.log(error.response.data);
            }
         }
         bookingServices();
      }
      navigate('/services', { replace: true })
   }

   return (
      <>
         <Banner headingPage={'Payment'} arrHeading={arrJson} />
         <Container
            maxWidth='100%'
            width='auto'
            margin='0 190px'
            padding='90px 0'
         >
            <Flex
               alignItems='center'
               justifyContent='center'
               flexWrap='wrap'
            >
               {
                  services && services.length > 0 ?
                     <>
                        <Table
                           flex='0 0 1'
                           width='100%'
                           marginBottom='40px'
                        >
                           <Thead>
                              <Tr >
                                 <Th textAlign='center'>ID Service</Th>
                                 <Th textAlign='center'>Name Service</Th>
                                 <Th textAlign='center'>Price</Th>
                              </Tr>
                           </Thead>
                           <Tbody>
                              {
                                 services.map((_s, index) => (
                                    <Tr key={_s.id}>
                                       <Td textAlign='center'>{_s.id}</Td>
                                       <Td textAlign='center'>{_s.name}</Td>
                                       <Td textAlign='center'>{_s.price} $</Td>
                                    </Tr>
                                 ))
                              }
                           </Tbody>
                        </Table>
                        <Container
                           width='75%'
                           flex='0 0 75%'
                           margin='0'
                           padding='0'
                        >
                           <Paypal services={services} handleBookingServicePayPal={handleBookingServicePayPal} />
                        </Container>
                     </>
                     :
                     <Heading>Please, Choose Pet !!!</Heading>
               }

            </Flex>
         </Container>
      </>
   );
}

export default ServicesPayment;