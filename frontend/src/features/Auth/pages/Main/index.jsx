import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container } from '@chakra-ui/react';
import Banner from '../../../../components/Banner';
import LogIn from '../../components/LogIn';
import Register from '../../components/Register';
import ForgotPassword from '../../components/ForgotPassword';
import { useLocation } from 'react-router-dom';

MainPages.propTypes = {

};

function MainPages(props) {
   const { pathname } = useLocation();
   console.log('>>> Check location: ', pathname);

   const redirect = () => {
      if (pathname === '/login') {
         return <LogIn />;
      }

      if (pathname === '/register') {
         return <Register />;
      }

      if (pathname === '/forgot-password') {
         return <ForgotPassword />;
      }
   }

   const titleBanner = () => {
      if (pathname === '/login') {
         const arr = [{
            head: 'Login',
            link: ''
         }]
         return ({
            arrJson: JSON.stringify(arr),
            heading: 'Login'
         });
      }

      if (pathname === '/register') {
         const arr = [{
            head: 'Register',
            link: ''
         }]
         return ({
            arrJson: JSON.stringify(arr),
            heading: 'Register'
         });
      }

      if (pathname === '/forgot-password') {
         const arr = [{
            head: 'Forgot password',
            link: ''
         }]
         return ({
            arrJson: JSON.stringify(arr),
            heading: 'Forgot password'
         });
      }
   }

   return (
      <>
         <Banner
            arrHeading={titleBanner().arrJson} headingPage={titleBanner().heading}
         />
         <Box>
            <Container
               maxW={'xl'}
               padding='12'
               marginX={'auto'}
            >
               {
                  redirect()
               }
            </Container>
         </Box>
      </>
   )
}

export default MainPages;