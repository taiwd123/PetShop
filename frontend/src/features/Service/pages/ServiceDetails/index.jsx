import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, Flex, Link, useToast } from '@chakra-ui/react';
import Banner from '../../../../components/Banner';
import { useParams, useNavigate } from 'react-router-dom';
import ContentServiceDetails from '../../components/ContentServiceDetails';
import ServicesSidebar from '../../components/ServicesSidebar';
import serviceApi from '../../../../api/serviceApi';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../../serviceSlice';

ServiceDetails.propTypes = {

};

function ServiceDetails(props) {
   window.scrollTo(0, 0);
   const { id: idService } = useParams();
   console.log(">>> Check param servicedetails page: ", idService);

   const navigate = useNavigate();
   const toast = useToast();
   const dispatch = useDispatch();

   // const { services, isLoading } = useSelector((state) => state.service);
   const [services, setServices] = useState([]);

   const initialServiceState = {
      id: '',
      name: '',
      description: '',
      price: 0,
      slot: 0,
      status: false,
   };
   const [currentService, setCurrentService] = useState(initialServiceState);

   const fetchData = async (idService) => {
      try {
         const response = await serviceApi.getInfoService(idService);
         console.log(">>> Check response fetchData/ServiceDetail: ", response);

         if (response.data.success) {
            setCurrentService(response.data.data.serviceInfo);
            console.log(">>> Check state: ", services);
         }
      } catch (error) {
         toast({
            title: 'Something wrong🥺🥺...',
            description: error.response.data.message,
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top'
         })
      }
   }

   const arr = [{
      head: 'Services',
      link: 'Services'
   },
   {
      head: 'Services single page',
      link: ''
   }]
   const arrJson = JSON.stringify(arr)

   useEffect(() => {
      const fetchData = async () => {
         const params = {
            page: 0,
            size: 5,
         };

         // dispatch(getServices(params))
         //    .unwrap()
         //    .then((response) => {
         //       //
         //    })
         //    .catch(() => { });
         try {
            const response = await serviceApi.getServices(params);
            console.log(">>> Check response/serviceDetail: ", response);
            if (response.data.success) {
               setServices(response.data.data.services);
               console.log(">>> Check state services: ", services);
            }
         } catch (error) {

         }
      };
      fetchData();
   }, []);

   useEffect(() => {
      fetchData(idService);
   }, [idService]);

   return (
      <>
         <Banner arrHeading={arrJson} headingPage={'Services single page'} />
         <Container
            maxW={'6xl'}
            paddingY='90px'
         >
            <Flex>
               <ContentServiceDetails service={currentService} />
               <ServicesSidebar services={services} />
            </Flex>
            <Link
               borderColor={'#018AE0'}
               color={'#018AE0'}
               display='inline-block'
               marginTop='50px'
               padding='5px 20px'
               paddingBottom={'2px'}
               fontWeight={'700'}
               fontSize='16px'
               borderY={'1px solid'}
               letterSpacing='0.5px'
               transition={'all .2s ease-in-out'}

               _before={{
                  transition: 'all .2s ease-in-out',
                  display: 'inline-block',
                  fontSize: '13px',
                  fontWeight: '900',
                  content: `"⬅️"`,
                  marginRight: '5px',
               }}

               _hover={{
                  borderColor: '#D61C62',
                  color: '#D61C62'
               }}

               onClick={() => { navigate(-1) }}
            >
               Go back before
            </Link>
         </Container>
      </>
   );
}

export default ServiceDetails;