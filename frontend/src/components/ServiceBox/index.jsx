import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Box, Button, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

ServiceBox.propTypes = {
   ImageUrl: PropTypes.string,
   Tag: PropTypes.string,
   Slots: PropTypes.string,
   Status: PropTypes.string,
   ServiceName: PropTypes.string,
   BriefDescription: PropTypes.string,
   Price: PropTypes.string,
   Star: PropTypes.number,
   Reviews: PropTypes.string,
};

ServiceBox.DefaultProp = {
   ImageUrl: '',
   Tag: '',
   Slots: '',
   Status: '',
   ServiceName: '',
   BriefDescription: '',
   Price: '',
   Star: 0,
   Reviews: '',
};

function ServiceBox(props) {
   const { ImageUrl, Tag, Slots, Status, ServiceName, BriefDescription, Price, Star, Reviews } = props;

   return (
      <Box
         width={'80'}
         rounded='20px'
         overflow={'hidden'}
         boxShadow='2xl'
         bg={'gray.200'}
         margin='0.5'
         display={'inline-block'}
      >
         <Image
            minW='80'
            minH='80'
            src={ImageUrl}
            alt='service'
            fallbackSrc='https://via.placeholder.com/150'
         />
         <Box p={5}>
            <Stack
               isInline align={'baseline'}
               justify={'space-around'}
            >
               <Box>
                  {
                     Tag !== '' ?
                        <Badge variant='solid' variantColor='teal' rounded='full' px={2}>
                           NEW!
                        </Badge>
                        :
                        ''
                  }
                  &nbsp;
                  <Badge variant='solid' variantColor='teal' rounded='full' px={2}>
                     {Slots} slots
                  </Badge>
               </Box>
               <Text
                  textTransform={'uppercase'}
                  fontSize='sm'
                  color={'gray.500'}
                  letterSpacing='wide'
               >
                  {Status}
               </Text>
            </Stack>
            <Heading
               as={'h2'}
               fontWeight='semibold'
               fontSize={'xl'}
               my={2}
            >
               {ServiceName}
            </Heading>
            <Text
               //isTruncated
               fontWeight={'light'}
               fontSize='md'
               textAlign={'center'}
            >
               {BriefDescription}
            </Text>
            <Stack
               isInline
               justify={'space-between'}
            >
               <Text
                  fontWeight={'semibold'}
                  fontSize='lg'
               >
                  {Price} $
               </Text>
               <Box
                  d={'flex'}
               >
                  <Box
                     as='span'
                  >
                     {Array(Star)
                        .fill('')
                        .map((_, i) => (
                           <StarIcon name='star' color={'teal.500'} key={i} />
                        ))
                     }
                     {Array(5 - Star)
                        .fill('')
                        .map((_, i) => (
                           <StarIcon name='star' color={'blackAlpha.200'} key={i} />
                        ))
                     }
                  </Box>
                  <Text
                     as='h3'
                     fontSize='lg'
                     fontWeight={'semibold'}
                     ml={2}
                  >
                     {Reviews} Reviews
                  </Text>
               </Box>
            </Stack>
            <Box textAlign={'center'}>
               <Button
                  colorScheme={'teal'}
                  size='lg'
                  mt={3}
                  boxShadow='sm'
                  _hover={{ boxShadow: 'md', bg: 'green.500' }}
                  _active={{ boxShadow: 'md' }}
               >
                  Read more
               </Button>
            </Box>
         </Box>
      </Box>
   );
}

export default ServiceBox;