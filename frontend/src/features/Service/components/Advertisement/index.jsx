import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';
import IMAGES from '../../../../constants/images';

Advertisement.propTypes = {

};

function Advertisement(props) {
   return (
      <Box>
         <Container
            maxW={'6xl'}
            paddingBottom='90px'
         >
            <Flex
               wrap={'wrap'}
               marginX='-15px'
            >
               <Box
                  flex={'0 0 58.333333%'}
                  maxW='58.333333%'
               >
                  <Heading
                     as={'h2'}
                     fontSize={'2.5em'}
                     fontWeight={'600'}
                     marginBottom='2'
                  >
                     Quality for your best friend
                  </Heading>
                  <Heading
                     as='span'
                     color={'#D61C62'}

                     fontSize={'18px'}
                     lineHeight='26px'
                     letterSpacing={'0.3px'}
                     fontWeight='450'

                     marginTop={'0.5rem'}
                  >
                     We offer quick & easy services for cats and dogs
                  </Heading>
                  <Divider
                     display={'block'}
                     width='60px'
                     border='1px solid #cecece'
                     bg={'#cecece'}

                     margin={'10px auto'}
                     marginLeft={'0px'}
                  />
                  <Text
                     as={'p'}
                     fontSize='16px'
                     lineHeight={'1.6'}
                     fontWeight='450'

                     marginTop={'1.5rem'}
                     marginBottom='1rem'
                  >
                     Quisque at odio nunc. Etiam ac nibh egestas, accumsan felis id, fermentum purus. Quisque vitae hendrerit elit. Maecenas ipsum mi, iaculis quis mattis cursus, auctor ac magna. Integer felis metus, aliquet in dignissim ut, varius et odio. Donec malesuada diam quis dignissim suscipit. Praesent purus turpis, tristique hendrerit
                  </Text>

                  <Button
                     bg={'#018AE0'}
                     marginTop={'1.5rem'}
                     marginLeft={'0.25rem'}

                     paddingX='50px'
                     paddingY='10px'
                     borderRadius={'25px'}

                     color='white'
                     fontSize={'1rem'}
                     textTransform={'uppercase'}
                     letterSpacing='0.2px'

                     whiteSpace={'normal'}
                     fontWeight='bold'
                     transition={'all .2s ease-in-out'}

                     _hover={{
                        background: '#1446AF'
                     }}
                  >
                     contact us
                  </Button>
               </Box>
               <Box
                  flex={'0 0 41.666667%'}
                  maxW='41.666667%'

                  position={'relative'}
                  width='100%'
                  minH={'1px'}
                  paddingX='15px'
               >
                  <Image
                     src={IMAGES.SERVICE_IMG1}
                     alt='ImageService1'

                     maxW={'100%'}
                     height='auto'
                     verticalAlign={'middle'}
                     borderStyle='none'
                     borderRadius='0.25rem'
                  />
               </Box>
            </Flex>
         </Container>
      </Box>
   );
}

export default Advertisement;