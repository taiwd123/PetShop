import React from 'react';
import PropTypes from 'prop-types';
import AccordionQuestions from '../AccordionQuestions';
import { Box, Container, Divider, Flex, Heading, Image } from '@chakra-ui/react';
import IMAGES from '../../../../constants/images';

Question.propTypes = {

};

function Question(props) {
   return (
      <Container
         maxW={'6xl'}
         paddingBottom='0'
         paddingTop={'90px'}
         backgroundImage={IMAGES.SERVICE_PATTERN}
         backgroundPosition='right center'
         backgroundRepeat={'no-repeat'}
      >
         <Flex>
            <Box
               alignItems={'center'}
               flexWrap='wrap'
               flex='0 0 41.666667%'
               maxW={'41.666667%'}
               paddingX='15px'
            >
               <Image
                  maxW={'100%'}
                  height='auto'
                  verticalAlign={'middle'}
                  borderStyle='none'
                  src={IMAGES.SERVICE_IMG2}
                  alt='Service Question'
               />
            </Box>
            <Box

               maxWidth='100%'
               flex={'0 0 58.333333%'}
               maxW='58.333333%'
            >
               <Heading
                  fontSize='38px'
                  lineHeight='40px'
                  fontWeight='700'
                  marginBottom='20px'
               >
                  Frequently asked questions
               </Heading>

               <Divider
                  display={'block'}
                  width='80px'
                  border='1px solid #cecece'
                  bg={'#cecece'}

                  margin={'10px auto'}
                  marginLeft={'0px'}
               />
               <AccordionQuestions />
            </Box>
         </Flex>
      </Container>
   );
}

export default Question;