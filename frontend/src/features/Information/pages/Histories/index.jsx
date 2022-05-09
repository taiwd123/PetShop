import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import { Box, Container, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import IMAGES from '../../../../constants/images';
import TableHistory from '../../components/TableHistory';
import TableDetail from '../../components/TableDetail';
import DisplayText from '../../components/DisplayText';
import { useLocation } from 'react-router-dom';

Histories.propTypes = {

};

const arr = [{
   head: 'History',
   link: ''
}]
const arrJson = JSON.stringify(arr)

function Histories(props) {
   const arr = [{
      head: 'History',
      link: ''
   }]
   const [stateHistory, setStateHistory] = useState('Pets')
   const arrJson = JSON.stringify(arr)
   return (
      <>
         <Banner
            arrHeading={arrJson}
            headingPage='History'
         />
         <Box
            paddingY={'20'}
            backgroundColor={'#f4f4f4'}
            bgImage={IMAGES.FooterBG}
            bgPosition='center bottom'
            backgroundRepeat={'repeat-x'}
            width='100%'
         >
            <Container
               maxW={'7xl'}
               zIndex='100'

               padding='12'
               marginX={'auto'}

               backgroundColor='#f7f6fbb0'
            >
               <Flex
                  align={'center'}
                  marginBottom='1.25rem'
               >
                  <Flex
                     marginX={'-15px'}
                     wrap='wrap'
                     direction={'column'}
                  >
                     <Heading as='h1' size='lg' isTruncated
                        marginBottom={'0.75rem'}
                     >
                        Trading History
                     </Heading>
                     <Text
                        fontSize={'lg'}
                     >
                        Manage your previous transactions <br />and enjoy other utilities.
                     </Text>
                  </Flex>
               </Flex>
            </Container>

            <Container
               maxW={'7xl'}
               padding='12'
               backgroundColor='#dffeeca8'
            >
               <Flex>
                  <TableHistory />
               </Flex>
            </Container>
         </Box>
      </>
   );
}

export default Histories;