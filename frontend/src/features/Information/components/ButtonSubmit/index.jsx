import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

ButtonSubmit.propTypes = {
   isLoading: PropTypes.bool,
   content: PropTypes.string,
};

ButtonSubmit.defaultProps = {
   isLoading: false,
   content: 'Submit',
};

function ButtonSubmit(props) {
   const { isLoading, content } = props;

   return (
      <Button
         type='submit'

         colorScheme='pink'

         width={'100%'}
         h='50px'
         size={'lg'}

         marginTop='25px'
         paddingY={'4'}
         paddingX={'0'}

         //bgGradient='linear(to-tr, pink.300, red.300)'
         bg={'#D61C62'}

         _hover={{
            bgGradient: 'linear(to-tr, #D61C62, pink.300)',
         }}
         isLoading={isLoading}
      >
         {content}
      </Button>
   );
}

export default ButtonSubmit;