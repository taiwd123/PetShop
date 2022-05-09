import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import * as animationLoading from '../../assets/json/68724-lazydoge-sleeping.json';
import { Box, Flex, Spinner } from '@chakra-ui/react';

Loading.propTypes = {

};

const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData: animationLoading,
   rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
   }
};

function Loading(props) {
   return (
      <Flex
         minH='100vh'
         w='100%'
         direction={'column'}
         justify='center'
         align={'center'}
      >
         <Lottie options={defaultOptions}
            height={200}
            width={200}
         />
         <Spinner
            thickness='8px'
            speed='0.8s'
            emptyColor='gray.200'
            color='black.300'
            size='xl'
         />
      </Flex>
   );
}

export default Loading;