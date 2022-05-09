import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';

FormLable.propTypes = {
   content: PropTypes.string,
};

FormLable.DefaultProp = {
   content: '',
}

function FormLable(props) {
   const { content } = props;

   return (
      <Text
         fontSize='13px'
         fontWeight={'500'}

         textTransform='uppercase'
         color={'#8898aa'}
         letterSpacing='.04em'

         paddingY={'0.25rem'}
         marginBottom='1.5rem'
      >
         {content}
      </Text>
   );
}

export default FormLable;