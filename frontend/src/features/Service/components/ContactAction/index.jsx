import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import IMAGES from '../../../../constants/images';

ContactAction.propTypes = {

};

function ContactAction(props) {
   return (
      <Flex
         height={'100%'}
         marginX='0'

         flexWrap={'wrap'}
      >
         <Box
            backgroundImage={IMAGES.SERVICE_CONTACT}
            backgroundPosition='center left'
            backgroundSize={'cover'}

            paddingX='0'
            flex={'0 0 50%'}
            maxW='50%'
         >
            {/* Background image */}
         </Box>
         <Box
            paddingY={'90px'}
            paddingX='0'

            bgColor={'#1446A0'}
            color='#f8f9fa'
            textAlign={'center'}


            flex={'0 0 50%'}
            maxW='50%'
         >
            <Box
               marginLeft={'8.333333%'}
               flex='0 0 83.333333%'
               maxW={'83.333333%'}
            >
               <Heading
                  as={'h2'}
                  size='lg'
                  fontWeight={'500'}
                  marginBottom={'20px'}
               >
                  Get in touch with us
               </Heading>
               <Text
                  fontSize={'xl'}
                  marginBottom='1rem'
                  lineHeight={'1.6'}
                  textAlign='center'
               >
                  Scelerisque laoreet nibh hendrerit id. lorem ipsuet In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall lorem ipsuet In aliquet ma.
               </Text>

               <Button
                  marginTop={'8px'}

                  transition='all .2s ease-in-out'

                  textTransform='uppercase'
                  bg={'#D61C62'}
                  color='#fff'

                  padding={'10px 50px'}
                  borderRadius='25px'

                  whiteSpace={'normal'}
                  letterSpacing='0.2px'
                  fontWeight={'bold'}
               >
                  contact us
               </Button>
            </Box>
         </Box>
      </Flex>
   );
}

export default ContactAction;