import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Heading, Link, Skeleton } from '@chakra-ui/react';
import { Link as LinkReactRouterDom } from 'react-router-dom';
import IMAGES from '../../../../constants/images';

ServicesSidebar.propTypes = {

};

function ServicesSidebar(props) {
   const { services } = props;
   const isLoaded = services.length > 0 ? true : false;
   console.log(">>> Check services/sidebar: ", services);
   return (
      // <Skeleton isLoaded={isLoaded} >
      <Box
         flex={'0 0 25%'}
         maxW='25%'
         bgColor={'#f4f4f4'}
         display='block'
         border={'0px'}
         borderRadius='15px'
         padding={'20px'}
         backgroundImage={IMAGES.FooterBG}
         backgroundPosition={'center bottom'}
         backgroundRepeat='repeat-x'
         height={'50%'}
      >
         <Box
         >
            <Heading
               marginTop={'0'}
               marginBottom='20px'
               color='#222'
               textAlign={'center'}
               fontSize='22px'
               fontWeight={'700'}
            >
               Some services
            </Heading>
            <Divider margin={'auto'} textAlign={'center'} w='60px' />
            <Skeleton isLoaded={isLoaded} >
               <Box
                  fontWeight={'700'}
                  fontSize='18px'
               >
                  {services &&
                     services.map((service, index) => (
                        <Link
                           as={LinkReactRouterDom}
                           to={`../${service.id}`}
                           key={service.id}
                           color={'#018AE0'}
                           transition='all 0.2s ease-in-out'
                           marginBottom='4px'
                           border='0'
                           borderRadius={'5px'}
                           fontSize='16px'
                           display={'block'}
                           padding='0.75rem 1.25rem'
                           bg={'#fff'}
                           textDecoration='none'
                           _hover={{
                              textDecoration: 'none',
                              bg: '#D61C62',
                              color: '#fff'
                           }}
                        >
                           {service.name}
                        </Link>
                     ))
                  }
               </Box>
            </Skeleton>
         </Box>
      </Box>
      // </Skeleton>
   );
}

export default ServicesSidebar;