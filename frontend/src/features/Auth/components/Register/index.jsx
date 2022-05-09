import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Title from '../Title';
import { Alert, AlertIcon, Button, FormControl, FormErrorMessage, FormLabel, Icon, Input, InputGroup, InputLeftElement, InputRightElement, useToast } from '@chakra-ui/react';
import { HiMail } from 'react-icons/hi';
import { RiLockPasswordFill, RiUser3Fill } from 'react-icons/ri';
import { BiShowAlt, BiHide } from 'react-icons/bi';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import ButtonAction from '../ButtonAction';
import { register as registerAuth } from "../../authSlice";
import { clearMessage } from "../../../../app/messageSlice";
import { Navigate } from 'react-router-dom';
import { playCorrectSound_audio, playWrongSound_audio } from '../../../../utils/PlaySound';

Register.propTypes = {

};

const registerSchema = yup.object().shape({
   userName: yup
      .string()
      .required('⚠ Username invalid')
      .min(6, '⚠ Username must be at least 6 characters')
      .max(10, '⚠ Username must be at most 10 charaters'),
   email: yup
      .string()
      .required('⚠ Email invalid')
      .email('⚠ Email must be a valid email'),
   password: yup
      .string()
      .required('⚠ Password invalid')
      .min(6, '⚠ Password must be at least 6 characters')
      .max(17, '⚠ Password must be at most 17 characters')
      .matches(
         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
         "⚠ Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
   confirmPassword: yup.string()
      .required('⚠ Confirm password invalid')
      .oneOf([yup.ref('password'), null], '⚠ Passwords must match'),

});

function Register(props) {
   const toast = useToast();
   const dispatch = useDispatch();

   const { isLoading } = useSelector((state) => state.auth);
   const { message } = useSelector((state) => state.message);

   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

   const { register, handleSubmit, reset, formState: { errors } } = useForm({
      mode: 'all',
      resolver: yupResolver(registerSchema),
      defaultValues: {
         userName: '',
         email: '',
         password: '',
         confirmPassword: '',
      },
   });

   useEffect(() => {
      dispatch(clearMessage());
   }, [dispatch]);

   const _onSubmitForm = async (data) => {
      console.log(">>> Check register", data);
      if (data.password === data.confirmPassword) {
         const params = {
            email: data.email,
            password: data.password,
            username: data.userName,
         };

         dispatch(registerAuth(params))
            .unwrap()
            .then(() => {
               toast({
                  title: 'WELCOME !!',
                  description: 'Please check your email to confirm email',
                  status: 'success',
                  isClosable: false,
                  position: 'top',
                  variant: 'left-accent',
               });
               playCorrectSound_audio();
            })
            .catch((response) => {
               console.log('>>> Check register/response - errors: ', response);
               reset({
                  userName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
               }, {
                  keepErrors: true,
                  keepDirty: true,
                  keepIsSubmitted: false,
                  keepTouched: false,
                  keepIsValid: false,
                  keepSubmitCount: false,
               });
               playWrongSound_audio();
            });
      }
      else {
         playWrongSound_audio();
         toast({
            title: 'Error Occured!',
            description: 'Password not match',
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top',
            variant: 'left-accent',
         });
      }
   };

   return (
      <>
         {message &&
            <Alert
               status='error'
               variant='left-accent'
               marginBottom={'15px'}
               borderRadius='xl'
            >
               <AlertIcon />
               {message}
            </Alert>}
         <Title
            title='Register'
            subtitle='Register to manage your account'
         />

         <form onSubmit={handleSubmit(_onSubmitForm)}>
            <FormControl
               isRequired
               marginBottom={'4'}

               isInvalid={!!errors?.userName?.message}
               errortext={errors?.userName?.message}
            >
               <FormLabel
                  fontSize={'xl'}
               >
                  Username
               </FormLabel>
               <InputGroup>
                  <InputLeftElement
                     pointerEvents={'none'}
                     children={<Icon as={RiUser3Fill} color={'gray.300'} />}
                     height={'100%'}
                     fontSize='xl'
                  />
                  <Input
                     placeholder='ThangCuteee'
                     bg={'blackAlpha.200'}
                     focusBorderColor='pink.300'
                     lineHeight={'3'}
                     h='60px'
                     variant='filled'
                     size='lg'
                     boxShadow={'md'}
                     fontSize='md'
                     fontWeight={'semibold'}
                     {...register('userName')}
                  />
               </InputGroup>
               <FormErrorMessage>
                  {errors?.userName?.message}
               </FormErrorMessage>
            </FormControl>

            <FormControl
               isRequired
               marginBottom={'4'}

               isInvalid={!!errors?.email?.message}
               errortext={errors?.email?.message}
            >
               <FormLabel
                  fontSize={'xl'}
               >
                  Email
               </FormLabel>
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

            <FormControl
               isRequired
               marginBottom={'4'}

               isInvalid={!!errors?.password?.message}
               errortext={errors?.password?.message}
            >
               <FormLabel
                  fontSize={'xl'}
               >
                  Password
               </FormLabel>
               <InputGroup>
                  <InputLeftElement
                     pointerEvents={'none'}
                     children={<Icon as={RiLockPasswordFill} color={'gray.300'} />}
                     height={'100%'}
                     fontSize='xl'
                  />
                  <Input
                     type={showPassword ? 'text' : 'password'}
                     placeholder={showPassword ? 'ZzzThangducDuongVipPro123Zzz' : '*************'}
                     bg={'blackAlpha.200'}
                     focusBorderColor='pink.300'
                     lineHeight={'3'}
                     h='60px'
                     variant='filled'
                     size='lg'
                     boxShadow={'md'}
                     fontSize='md'
                     fontWeight={'semibold'}
                     {...register('password')}
                  />
                  <InputRightElement
                     height={'100%'}
                     width='2rem'
                     marginRight={2}
                  >
                     <Button bg={'gray.200'} size='sm' onClick={() => { setShowPassword(!showPassword) }}>
                        {showPassword ? <Icon as={BiShowAlt} /> : <Icon as={BiHide} />}
                     </Button>
                  </InputRightElement>
               </InputGroup>
               <FormErrorMessage>
                  {errors?.password?.message}
               </FormErrorMessage>
            </FormControl>

            <FormControl
               isRequired
               marginBottom={'4'}

               isInvalid={!!errors?.confirmPassword?.message}
               errortext={errors?.confirmPassword?.message}
            >
               <FormLabel
                  fontSize={'xl'}
               >
                  Confirmed Password
               </FormLabel>
               <InputGroup>
                  <InputLeftElement
                     pointerEvents={'none'}
                     children={<Icon as={RiLockPasswordFill} color={'gray.300'} />}
                     height={'100%'}
                     fontSize='xl'
                  />
                  <Input
                     type={showConfirmPassword ? 'text' : 'password'}
                     placeholder={showConfirmPassword ? 'ZzzThangducDuongVipPro123Zzz' : '*************'}
                     bg={'blackAlpha.200'}
                     focusBorderColor='pink.300'
                     lineHeight={'3'}
                     h='60px'
                     variant='filled'
                     size='lg'
                     boxShadow={'md'}
                     fontSize='md'
                     fontWeight={'semibold'}
                     {...register('confirmPassword')}
                  />
                  <InputRightElement
                     height={'100%'}
                     width='2rem'
                     marginRight={2}
                  >
                     <Button bg={'gray.200'} size='sm' onClick={() => { setShowConfirmPassword(!showConfirmPassword) }}>
                        {showConfirmPassword ? <Icon as={BiShowAlt} /> : <Icon as={BiHide} />}
                     </Button>
                  </InputRightElement>
               </InputGroup>
               <FormErrorMessage>
                  {errors?.confirmPassword?.message}
               </FormErrorMessage>
            </FormControl>

            <ButtonAction
               action='REGISTER'
               question='Do you have an account'
               direction='Login'
               isLoading={isLoading}
            />
         </form>
      </>
   );
}

export default Register;