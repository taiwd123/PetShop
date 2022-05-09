import React from 'react';
import PropTypes from 'prop-types';
import { Button, Flex, Link, Text } from '@chakra-ui/react';
import { Link as ReactRouterDom_Link, useLocation } from 'react-router-dom';

ButtonAction.propTypes = {
   action: PropTypes.string,
   question: PropTypes.string,
   direction: PropTypes.string,
   isLoading: PropTypes.bool,
};

ButtonAction.defaultProps = {
   action: '',
   question: '',
   direction: '',
   isLoading: false,
};

function ButtonAction(props) {
   const { action, question, direction, isLoading } = props;
   const { pathname } = useLocation();

   return (
      <>
         <Button
            type='submit'

            colorScheme='pink'

            width={'100%'}
            h='50px'
            size={'lg'}

            marginTop='25px'
            paddingY={'4'}
            paddingX={'0'}

            //bgGradient='linear(to-tr, pink.300, red.300)'
            bg={'#D61C62'}

            _hover={{
               bgGradient: 'linear(to-tr, #D61C62, pink.300)',
            }}
            isLoading={isLoading}
         >
            {action}
         </Button>

         {question !== '' ?
            <Flex
               justify={'center'}
               marginTop={'4'}
            >
               <Text fontSize='md'> {question}?&nbsp;
                  <Link
                     as={ReactRouterDom_Link}
                     to={pathname === '/login' ? '/register' : '/login'}
                     _hover={{
                        color: 'pink.500',
                     }}
                  >
                     {direction}
                  </Link>
               </Text>
            </Flex>
            :
            ''
         }
      </>
   );
}

export default ButtonAction;