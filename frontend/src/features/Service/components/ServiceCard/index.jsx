import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Image, Text, Link, Badge, Checkbox } from '@chakra-ui/react';
import { Link as LinkReactRouterDom, useNavigate } from 'react-router-dom';
import CustomIcon from '../../../../custom/CustomIcon';

ServiceCard.propTypes = {
   service: PropTypes.object,
   handleCheckboxChange: PropTypes.func,
   servicesRegistration: PropTypes.array,
};

ServiceCard.defaultProps = {
   service: {},
   handleCheckboxChange: null,
   servicesRegistration: [],
};

function ServiceCard(props) {
   const { service, handleCheckboxChange, servicesRegistration } = props;
   const navigate = useNavigate();

   const [check, setCheck] = useState(false);
   const [hiddenText, setHiddenText] = useState(false);

   useEffect(() => {
      console.log(">>> Check check: ", check);
      if (handleCheckboxChange) handleCheckboxChange(service, check);
   }, [check]);

   useEffect(() => {
      const indexItem = servicesRegistration.indexOf(service);
      if (indexItem > -1) {
         setCheck(true);
      }
   }, []);

   return (
      <Box
         width={'255px'}
         marginRight='30px'
         marginBottom={'30px'}
      >
         <Box
            position={'relative'}
            textAlign='center'
         >
            <Image
               display={'flex'}
               src={service.image}
               alt={service.name}
               boxSize={'36'}
               borderRadius='25%'
               margin={'auto'}
               filter='auto'

               _hover={{
                  transform: 'scale3d(1.05, 1.05, 1)',
                  cursor: 'pointer',
                  brightness: '40%'
               }}

               onMouseMove={() => { setHiddenText(true) }}
               onMouseLeave={() => { setHiddenText(false) }}
               onClick={() => {
                  if (service.status) {
                     navigate(`/services/${service.id}`)
                  }
                  else {

                  }
               }}
            />
            <Text
               position={'absolute'}
               top='50%'
               left={'50%'}
               transform='translate(-50%,-50%)'
               color='white'
            >
               {hiddenText && service.name}
            </Text>

         </Box>
         <Box
            marginTop={'20px'}
            textAlign='center'
         >
            <Heading
               as={'h5'}
               color='#222'
               fontSize={'1.4em'}
               fontWeight='600'
            >
               {service.name}
            </Heading>
            <Checkbox
               isInvalid
               icon={<CustomIcon />}
               size='md'
               colorScheme='pink'
               marginBottom={'20px'}
               isChecked={check}
               onChange={() => { setCheck(!check) }}
               isDisabled={!service.status}
            >
               Registration
            </Checkbox>
            <Box display='flex'
               justifyContent={'center'}>
               {
                  service && service.status ?
                     <Badge borderRadius='full' px='2' colorScheme='teal'>
                        Available
                     </Badge> :
                     <Badge borderRadius='full' px='2' colorScheme='red'>
                        Unavailable
                     </Badge>
               }
               <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
               >
                  {service.price} VNĐ
               </Box>
            </Box>

            <Text
               fontSize={'16px'}
               lineHeight='1.6'
               fontWeight={'400'}
               marginBottom='1px'
               minH={'35px'}
               isTruncated
            >
               {service.description}
            </Text>

            <Link as={LinkReactRouterDom} to={service.status && service.id}
               borderColor={'#018AE0'}
               color={'#018AE0'}
               display='inline-block'
               margin={'10px'}
               padding='5px 20px'
               paddingBottom={'6px'}
               fontWeight={'700'}
               fontSize='16px'
               borderY={'1px solid'}
               letterSpacing='0.5px'
               transition={'all .2s ease-in-out'}

               _before={{
                  transition: 'all .2s ease-in-out',
                  display: 'inline-block',
                  fontSize: '13px',
                  fontWeight: '900',
                  content: `"⬅️"`,
                  marginRight: '5px',
               }}

               _hover={{
                  borderColor: '#D61C62',
                  color: '#D61C62'
               }}
            >
               read more
            </Link>
         </Box>
      </Box>
   );
}

export default ServiceCard;