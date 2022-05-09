import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Divider, Flex, FormControl, FormErrorMessage, FormLabel, HStack, Input, InputGroup, Skeleton, Spacer, useToast, useBreakpointValue } from '@chakra-ui/react';
import FormLable from '../FormLabel';
import ButtonSubmit from '../ButtonSubmit';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateInfo } from '../../userSlice';

CardBody.propTypes = {

};

const userInformationSchema = yup.object().shape({
   firstName: yup
      .string(),
   lastName: yup
      .string(),
   phone: yup
      .string()
      .min(9, '⚠ Phone number must be at least 9 characters')
      .max(11, '⚠ Phone number must be at most 11 charaters'),
   address: yup
      .string(),
   city: yup.string(),
   province: yup.string(),
   country: yup.string(),
});

function CardBody(props) {
   const { userInfo, isLoading, message } = props;
   const flexDirection = useBreakpointValue({ base: 'column', lg: 'row' });
   const toast = useToast();
   const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
   console.log(">>> check isLoading: ", isLoading);
   console.log(">>> check userInfo", userInfo);

   const dispatch = useDispatch();

   const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm({
      mode: 'all',
      resolver: yupResolver(userInformationSchema),
   });

   const statusAddress = userInfo && userInfo.address;
   const AddressDisplay = () => {
      var ads = '';
      if (statusAddress && userInfo.address.houseNumber) {
         ads += userInfo.address.houseNumber;
      }
      if (statusAddress && userInfo.address.streetName) {
         ads += " " + userInfo.address.streetName;
      }
      return ads;
   };

   useEffect(() => {
      setValue("firstName", userInfo && userInfo.firstName ? userInfo.firstName : '');
      setValue("lastName", userInfo && userInfo.lastName ? userInfo.lastName : '');
      setValue("phone", userInfo && userInfo.phone ? userInfo.phone : '');
      setValue("address", AddressDisplay());
      setValue("city", statusAddress && userInfo.address.city ? userInfo.address.city : '')
      setValue("province", statusAddress && userInfo.address.province ? userInfo.address.province : '')
      setValue("country", statusAddress && userInfo.address.country ? userInfo.address.country : '')
   }, [userInfo]);

   const _onSubmitForm = (data) => {
      setIsLoadingSubmit(true);
      console.log(">>> Check submit form cardbody: ", data);
      // check space data.address
      const dataAddress = data.address.trim();
      const indexOfSpacing = dataAddress.indexOf(" ");
      let houseNum, streetN;
      if (indexOfSpacing > 0) {
         houseNum = dataAddress.slice(0, indexOfSpacing);
         streetN = dataAddress.slice((indexOfSpacing + 1), dataAddress.length)
      }

      const params = {
         address: {
            city: data.city,
            country: data.country,
            houseNumber: houseNum ? houseNum : '',
            province: data.province,
            streetName: streetN ? streetN : '',
         },
         // avatar: userInfo && userInfo.avatar ? userInfo.avatar : process.env.REACT_APP_DEFAULT_IMAGE,
         firstName: data.firstName,
         lastName: data.lastName,
         phone: data.phone,
      }
      console.log(params);
      dispatch(updateInfo(params))
         .unwrap()
         .then((res) => {
            toast({
               title: 'Change avatar successfully 😚😗😚',
               status: 'success',
               duration: 2000,
               isClosable: true,
               position: 'top',
            });
         })
         .catch((err) => {
            toast({
               title: 'Something wrongs when save your changing 😢😢😢',
               description: err,
               status: 'error',
               duration: 2000,
               isClosable: true,
               position: 'top',
            });
         })
         .finally(() => {
            setIsLoadingSubmit(false);
         });
   };

   return (
      <form
         style={{ padding: '1.5rem' }}
         onSubmit={handleSubmit(_onSubmitForm)}
      >
         <FormLable content={'user information'} />
         <Flex
            direction={flexDirection}
            justify='space-around'
         >
            <FormControl
               isRequired
               marginBottom={'4'}
               w={flexDirection === 'row' ? '330px' : ''}
               paddingX='15px'
               isInvalid={!!errors?.firstName?.message}
               errortext={errors?.firstName?.message}
            >
               <FormLabel color={'#525f7f'}>First name</FormLabel>
               <Skeleton isLoaded={!isLoading}>
                  <InputGroup>
                     <Input
                        placeholder='Thang'
                        bg='white'
                        focusBorderColor='pink.300'
                        lineHeight={'3'}
                        h='60px'
                        variant='outline'
                        size='lg'
                        boxShadow={'md'}
                        fontSize='md'
                        fontWeight={'semibold'}
                        // defaultValue={userInfo && userInfo.firstName ? userInfo.firstName : ''}
                        {...register('firstName')}
                     />
                  </InputGroup>
               </Skeleton>
               <FormErrorMessage>{errors?.firstName?.message}</FormErrorMessage>
            </FormControl>

            <FormControl
               isRequired
               marginBottom={'4'}
               w={flexDirection === 'row' ? '330px' : ''}
               paddingX='15px'
               isInvalid={!!errors?.lastName?.message}
               errortext={errors?.lastName?.message}
            >
               <FormLabel color={'#525f7f'}>Last name</FormLabel>
               <Skeleton isLoaded={!isLoading}>
                  <InputGroup>
                     <Input
                        placeholder='Duong Duc'
                        bg='white'
                        focusBorderColor='pink.300'
                        lineHeight={'3'}
                        h='60px'
                        variant='outline'
                        size='lg'
                        boxShadow={'md'}
                        fontSize='md'
                        fontWeight={'semibold'}
                        // defaultValue={userInfo && userInfo.lastName ? userInfo.lastName : ''}
                        {...register('lastName')}
                     />
                  </InputGroup>
               </Skeleton>
               <FormErrorMessage>{errors?.lastName?.message}</FormErrorMessage>
            </FormControl>
         </Flex>
         <Spacer h={'15px'} />
         <Flex
            direction={flexDirection}
            justify='space-around'
         >
            <FormControl
               isRequired
               marginBottom={'4'}
               w={flexDirection === 'row' ? '330px' : ''}
               paddingX='15px'
            >
               <FormLabel color={'#525f7f'} >Email</FormLabel>
               <Skeleton isLoaded={!isLoading}>
                  <InputGroup>
                     <Input
                        isDisabled
                        borderColor={'gray.500'}
                        placeholder='thangduc.duong14@gmail.com'
                        bg='white'
                        focusBorderColor='pink.300'
                        lineHeight={'3'}
                        h='60px'
                        variant='outline'
                        size='lg'
                        boxShadow={'md'}
                        fontSize='md'
                        fontWeight={'semibold'}
                        defaultValue={userInfo && userInfo.email ? userInfo.email : ''}
                     />
                  </InputGroup>
               </Skeleton>
            </FormControl>

            <FormControl
               isRequired
               marginBottom={'4'}
               w={flexDirection === 'row' ? '330px' : ''}
               paddingX='15px'
               isInvalid={!!errors?.phone?.message}
               errortext={errors?.phone?.message}
            >
               <FormLabel color={'#525f7f'}>Phone number</FormLabel>
               <Skeleton isLoaded={!isLoading}>
                  <InputGroup>
                     <Input
                        placeholder='098x0xxx42'
                        bg='white'
                        focusBorderColor='pink.300'
                        lineHeight={'3'}
                        h='60px'
                        variant='outline'
                        size='lg'
                        boxShadow={'md'}
                        fontSize='md'
                        fontWeight={'semibold'}
                        {...register('phone')}
                     />
                  </InputGroup>
               </Skeleton>
               <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
            </FormControl>
         </Flex>
         <Divider
            marginY={'1.5rem'}
         />
         <FormLable content={'contact information'} />
         <FormControl
            isRequired
            marginBottom={'4'}
            paddingX='27px'
            isInvalid={!!errors?.address?.message}
            errortext={errors?.address?.message}
         >
            <FormLabel color={'#525f7f'}>Address</FormLabel>
            <Skeleton isLoaded={!isLoading}>
               <InputGroup>
                  <Input
                     placeholder='136 Cộng Hòa, Quận Tân Bình'
                     bg='white'
                     focusBorderColor='pink.300'
                     lineHeight={'3'}
                     h='60px'
                     variant='outline'
                     size='lg'
                     boxShadow={'md'}
                     fontSize='md'
                     fontWeight={'semibold'}
                     {...register('address')}
                  />
               </InputGroup>
            </Skeleton>
            <FormErrorMessage>{errors?.address?.message}</FormErrorMessage>
         </FormControl>
         <Spacer h={'15px'} />
         <Flex
            direction={flexDirection}
         >
            <FormControl
               isRequired
               marginBottom={'4'}
               paddingX='27px'
               isInvalid={!!errors?.city?.message}
               errortext={errors?.city?.message}
            >
               <FormLabel color={'#525f7f'}>City</FormLabel>
               <Skeleton isLoaded={!isLoading}>
                  <InputGroup>
                     <Input
                        placeholder='Thành phố Hồ Chí Minh'
                        bg='white'
                        focusBorderColor='pink.300'
                        lineHeight={'3'}
                        h='60px'
                        variant='outline'
                        size='lg'
                        boxShadow={'md'}
                        fontSize='md'
                        fontWeight={'semibold'}
                        {...register('city')}
                     />
                  </InputGroup>
               </Skeleton>
               <FormErrorMessage>{errors?.city?.message}</FormErrorMessage>
            </FormControl>

            <FormControl
               isRequired
               marginBottom={'4'}
               isInvalid={!!errors?.province?.message}
               errortext={errors?.province?.message}
            >
               <FormLabel color={'#525f7f'}>Province or District</FormLabel>
               <Skeleton isLoaded={!isLoading}>
                  <InputGroup>
                     <Input
                        placeholder='Thành phố Hồ Chí Minh'
                        bg='white'
                        focusBorderColor='pink.300'
                        lineHeight={'3'}
                        h='60px'
                        variant='outline'
                        size='lg'
                        boxShadow={'md'}
                        fontSize='md'
                        fontWeight={'semibold'}
                        {...register('province')}
                     />
                  </InputGroup>
               </Skeleton>
               <FormErrorMessage>{errors?.province?.message}</FormErrorMessage>
            </FormControl>

            <FormControl
               isRequired
               marginBottom={'4'}
               paddingX='27px'
               isInvalid={!!errors?.country?.message}
               errortext={errors?.country?.message}
            >
               <FormLabel color={'#525f7f'}>Country</FormLabel>
               <Skeleton isLoaded={!isLoading}>
                  <InputGroup>
                     <Input
                        placeholder='Vietnam'
                        bg='white'
                        focusBorderColor='pink.300'
                        lineHeight={'3'}
                        h='60px'
                        variant='outline'
                        size='lg'
                        boxShadow={'md'}
                        fontSize='md'
                        fontWeight={'semibold'}
                        {...register('country')}
                     />
                  </InputGroup>
               </Skeleton>
               <FormErrorMessage>{errors?.country?.message}</FormErrorMessage>
            </FormControl>
         </Flex>
         <ButtonSubmit
            content='Update'
            isLoading={isLoadingSubmit}
         />
      </form>
   );
}

export default CardBody;