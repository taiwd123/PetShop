import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import CardHeader from '../CardHeader';
import CardBody from '../CardBody';

UserInformation.propTypes = {

};

function UserInformation(props) {
   const { userInfo, isLoading, message } = props;

   return (
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
         <CardHeader />
         <CardBody userInfo={userInfo} isLoading={isLoading} message={message} />
      </Box>
   );
}

export default UserInformation;