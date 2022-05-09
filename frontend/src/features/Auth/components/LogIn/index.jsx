import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Title from '../Title';
import { Alert, AlertIcon, Button, Checkbox, Flex, FormControl, FormErrorMessage, FormLabel, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Link, Spacer } from '@chakra-ui/react';
import { RiUser3Fill } from 'react-icons/ri';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BiShowAlt, BiHide } from 'react-icons/bi';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import ButtonAction from '../ButtonAction';
import { Link as ReactRouterDom_Link, useNavigate, Navigate } from 'react-router-dom';
import { clearMessage } from '../../../../app/messageSlice';
import { login } from '../../authSlice';
import Cookies from 'universal-cookie';
import { playWrongSound_audio } from '../../../../utils/PlaySound';
import roles from '../../../../constants/roles';

LogIn.propTypes = {

};

const loginSchema = yup.object().shape({
   userName: yup
      .string()
      .required('⚠ Username invalid'),
   password: yup
      .string()
      .required('⚠ Password invalid'),
});

const current = new Date();
const nextYear = new Date();
nextYear.setFullYear(current.getFullYear() + 1);

function LogIn(props) {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [showPassword, setShowPassword] = useState(false);
   const [check, setCheck] = useState(false);

   const { isLoading } = useSelector((state) => state.auth);
   const { message } = useSelector((state) => state.message);

   const cookies = new Cookies();

   const { register, handleSubmit, reset, formState: { errors }, setValue, watch } = useForm({
      mode: 'all',
      resolver: yupResolver(loginSchema),
      defaultValues: {
         userName: '',
         password: '',
      },
   });

   // useEffect(() => {
   //    dispatch(clearMessage());
   // }, [dispatch]);

   useEffect(() => {
      const loginData = cookies.get('loginData') ? cookies.get('loginData') : null;

      if (loginData !== null) {
         setValue("userName", atob(loginData.userName), {
            shouldValidate: true,
            shouldDirty: true
         });
         setValue("password", atob(loginData.password), {
            shouldValidate: true,
            shouldDirty: true
         });
         setShowPassword(true);
         setCheck(true);
      }
   }, []);

   const userName_watch = watch('userName');
   const password_watch = watch('password');
   useEffect(() => {
      if (check === true) {
         cookies.remove('loginData');
         const data = {
            userName: btoa(userName_watch),
            password: btoa(password_watch),
         };
         cookies.set('loginData', JSON.stringify(data), { path: '/', expires: nextYear, });
      }
      else {
         cookies.remove('loginData');
      }
   }, [userName_watch, password_watch, check]);

   const _onSubmitForm = async (data) => {
      console.log(">>> Check login", data);

      const params = {
         username: data.userName,
         password: data.password,
      };

      dispatch(login(params))
         .unwrap()
         .then((response) => {
            console.log(">>> Check login/response - success: ", response);
            if (response.role[0] === roles.USER) {
               navigate('/home');
            }
            else {
               navigate('/admin/dashboard');
            }
         })
         .catch((response) => {
            console.log('>>> Check login/response - errors: ', response);
            reset({
               userName: '',
               password: '',
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
            title='Log in'
            subtitle='Log in to explore other features'
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

               isInvalid={!!errors?.userName?.message}
               errortext={errors?.userName?.message}
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

            <Flex>
               <Checkbox
                  size='md'
                  colorScheme='pink'
                  isChecked={check}
                  onChange={() => { setCheck(!check) }}
               >
                  Remember me
               </Checkbox>
               <Spacer />
               <Link
                  as={ReactRouterDom_Link}
                  to='/forgot-password'
                  _hover={{
                     color: 'pink.500',
                  }}
               >
                  Forgot Your Password?
               </Link>
            </Flex>

            <ButtonAction
               action='LOG IN'
               question='Not registered'
               direction='Create a account'
               isLoading={isLoading}
            />
         </form>
      </>
   );
}

export default LogIn;