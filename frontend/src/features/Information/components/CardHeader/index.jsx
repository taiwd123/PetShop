import React from 'react';
import PropTypes from 'prop-types';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';

CardHeader.propTypes = {

};

function CardHeader(props) {
   return (
      <Flex
         border={'0'}
         _first={{
            borderRadius: 'calc(.375rem - 1px) calc(.375rem - 1px) 0 0'
         }}

         bg='#fff'

         marginBottom={'0'}
         padding={'1.25rem'}

         justify='space-between'
      >
         <Text
            fontSize={'larger'}
            fontWeight='medium'

         >
            My profile
         </Text>
         <Button
            bg={'#5e72e4'}
            color='#fff'

            lineHeight='1.5'

            size='sm'
            padding={'.25rem .5rem'}

            boxShadow={'0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)'}
            borderRadius='.375rem'
         >
            Settings
         </Button>
      </Flex>
   );
}

export default CardHeader;