import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react';
import Banner from '../../../../components/Banner';
import DisplayText from '../../components/DisplayText';
import UserInformation from '../../components/UserInformation';
import UserAccount from '../../components/UserAccount';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../../userSlice';
import userApi from '../../../../api/userApi';

UserProfile.propTypes = {

};

function UserProfile(props) {
   window.scrollTo(0, 0)
   const dispatch = useDispatch();

   const { userInfo, isLoading } = useSelector((state) => state.user);
   const { message } = useSelector((state) => state.message);

   const initFetch = useCallback(async () => {
      dispatch(getInfo());
   }, [dispatch]);

   useEffect(() => {
      initFetch();
   }, [initFetch]);
   const arr = [{
      head: 'Profile',
      link: ''
   }]
   const arrJson = JSON.stringify(arr)

   return (
      <>
         <Banner
            arrHeading={arrJson} headingPage='Profile'
         />
         <Box>
            <Container
               maxW={'7xl'}
               zIndex='100'

               padding='12'
               marginX={'auto'}

               backgroundColor='#f7f6fbb0'
            >
               <DisplayText userName={userInfo && userInfo.userName ? userInfo.userName : 'USERNAME'} />
            </Container>

            <Container
               maxW={'7xl'}
               padding='12'
               backgroundColor='#dffeeca8'
            >
               <Flex>
                  <UserInformation userInfo={userInfo} isLoading={isLoading} message={message} />
                  <Spacer maxW='30px' />
                  <UserAccount userInfo={userInfo} isLoading={isLoading} message={message} />
               </Flex>
            </Container>
         </Box>
      </>
   );
}

export default UserProfile;