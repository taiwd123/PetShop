import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Flex, Icon, Button, FormControl, InputGroup, InputLeftElement, Input, FormErrorMessage, useToast } from '@chakra-ui/react';
import { IoMdArrowBack } from 'react-icons/io';
import { HiMail } from 'react-icons/hi';
import ButtonAction from '../ButtonAction';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import authApi from '../../../../api/authApi';

ForgotPassword.propTypes = {

};

const forgotPasswordSchema = yup.object().shape({
   email: yup
      .string()
      .email('⚠ Email must be a valid email')
      .required('⚠ Email invalid'),
});

function ForgotPassword(props) {
   const toast = useToast();
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();

   const { register, handleSubmit, reset, formState: { errors } } = useForm({
      mode: 'all',
      resolver: yupResolver(forgotPasswordSchema),
      defaultValues: {
         email: '',
      },
   });

   const _onSubmitForm = async (data) => {
      console.log(">>> Check forgot password", data);
      setLoading(true);
      try {
         const params = {
            email: data.email,
         };

         const response = await authApi.forgotPassword(params);
         console.log('>>> Check forgot password/response: ', response);

         toast({
            title: 'New password temp was sent. Pleas check your email!!',
            description: response.data.message,
            status: 'success',
            position: 'top',
            variant: 'left-accent',
         });
      } catch (error) {
         console.log('>>> Check forgot password/response - errors: ', error.response);
         toast({
            title: 'Error Occured!',
            description: error.response.data.message,
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top',
         });
         reset();
      }
      finally {
         setLoading(false);
      }
   };

   return (
      <Box
         bg='white'
         w='100%'
         p={4}
         color='black'
         boxShadow={'dark-lg'}
      >
         <Flex
            direction={'row'}
            justify='center'
            align={'center'}
            w={'100%'}
            marginBottom='10'
            marginX='auto'
         >
            <Button
               bg={'transparent'}
               padding='0'
               _hover={{
                  bg: 'transparent',
                  color: '#D61C62',
               }}
               onClick={() => { navigate('/login') }}
            >
               <Icon fontSize={'2xl'} as={IoMdArrowBack} />
            </Button>

            <Text
               fontSize='3xl'
               color={'blackAlpha.800'}
               textAlign='center'
               w='100%'
               marginRight={'1.5rem'}
            >
               Reset Password
            </Text>
         </Flex>

         <form onSubmit={handleSubmit(_onSubmitForm)}>
            <FormControl
               isRequired
               marginBottom={'4'}

               isInvalid={!!errors?.email?.message}
               errortext={errors?.email?.message}
            >
               <InputGroup>
                  <InputLeftElement
                     pointerEvents={'none'}
                     children={<Icon as={HiMail} color={'gray.300'} />}
                     height={'100%'}
                     fontSize='xl'
                  />
                  <Input
                     placeholder='thangduc.duong14@gmail.com'
                     bg={'blackAlpha.200'}
                     focusBorderColor='pink.300'
                     lineHeight={'3'}
                     h='60px'
                     variant='filled'
                     size='lg'
                     boxShadow={'md'}
                     fontSize='md'
                     fontWeight={'semibold'}
                     {...register('email')}
                  />
               </InputGroup>
               <FormErrorMessage>
                  {errors?.email?.message}
               </FormErrorMessage>
            </FormControl>

            <ButtonAction
               action='NEXT'
               isLoading={loading}
            />
         </form>
      </Box>
   );
}

export default ForgotPassword;