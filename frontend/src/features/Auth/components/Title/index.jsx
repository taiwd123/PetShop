import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from '@chakra-ui/react';

Title.propTypes = {
   title: PropTypes.string,
   subtitle: PropTypes.string,
};

Title.defaultProps = {
   title: 'title',
   subtitle: 'subtitle',
}

function Title(props) {
   const { title, subtitle } = props;
   return (
      <>
         <Heading
            as='h2'
            size='xl'
            textTransform={'uppercase'}
         >
            {title}
         </Heading>
         <Text
            fontSize='2xl'
            marginBottom={'25px'}
         //textAlign='center'
         >
            {subtitle}
         </Text>
      </>
   );
}

export default Title;