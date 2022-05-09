import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Flex, FormControl, FormLabel, Image, Input, InputGroup, Skeleton, Spacer, useToast, SkeletonCircle, FormErrorMessage } from '@chakra-ui/react';
import imageApi from '../../../../api/imageApi';
import IMAGES from '../../../../constants/images';
import ButtonSubmit from '../ButtonSubmit';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { playCorrectSound_audio, playWrongSound_audio } from '../../../../utils/PlaySound';
import userApi from '../../../../api/userApi';
import { useDispatch } from 'react-redux';
import { updateAvatar, updateInfo } from '../../userSlice';
import ModalBox from '../../../../components/ModalBox';
import { resizeImage } from '../../../../utils/ResizeImage';

UserAccount.propTypes = {

};

UserAccount.DefaultProp = {

};

const userAccountSchema = yup.object().shape({
   currentPassword: yup
      .string()
      .required('⚠ Current password invalid'),
   newPassword: yup
      .string()
      .required('⚠ New password invalid')
      .min(6, '⚠ New password must be at least 6 characters')
      .max(17, '⚠ New password must be at most 17 characters')
      .matches(
         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
         "⚠ Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ).notOneOf([yup.ref('currentPassword'), null], '⚠ New passwords not like current password'),
   confirmNewPassword: yup
      .string()
      .required('⚠ Confirm new password invalid')
      .oneOf([yup.ref('newPassword'), null], '⚠ Confirm new passwords must match'),
});

function UserAccount(props) {
   const { userInfo, isLoading, message } = props;
   const toast = useToast();

   const [image, setImage] = useState(process.env.REACT_APP_DEFAULT_IMAGE);
   const [imageBeforeUpload, setImageBeforeUpload] = useState(process.env.REACT_APP_DEFAULT_IMAGE);
   const [isLoadingImg, setIsLoadingImg] = useState(false);
   const [isLoadingChangePwd, setIsLoadingChangePwd] = useState(false);
   const [statusModal, setStatusModal] = useState(false);
   const [changeImg, setChangeImg] = useState(false);
   const [imageData, setImageData] = useState({ url: "", public_id: "" });

   const dispatch = useDispatch();

   const { register, handleSubmit, reset, formState: { errors } } = useForm({
      mode: 'all',
      resolver: yupResolver(userAccountSchema),
   });

   useEffect(() => {
      if (userInfo && userInfo.avatar) {
         if (userInfo.avatar !== process.env.REACT_APP_DEFAULT_IMAGE) {
            setImage(userInfo.avatar);
         }
      }
   }, [userInfo]);

   const _onClickUpdatePhoto = () => {
      document.getElementById('fileid').click();
   };

   const _onChangeImage = async (e) => {
      setIsLoadingImg(true);
      const img_profile = e.target.files[0];
      if (img_profile === undefined) {
         toast({
            title: 'Choose your image ~~',
            description: "accept any type of images",
            status: 'warning',
            duration: 3000,
            isClosable: true,
            position: 'top-right',
         });
         setIsLoadingImg(false);
         return;
      }
      if (img_profile.type === 'image/jpeg' || img_profile.type === 'image/png') {
         const imageAfterResize = await resizeImage(img_profile);
         const data = new FormData();
         data.append('file', imageAfterResize);
         data.append('upload_preset', 'chat-app-basic');
         data.append('cloud_name', 'thangduong');

         try {
            const response = await imageApi.uploadImage(data);
            setImageBeforeUpload(image);
            setImage(response.data.url);
            setStatusModal(true);
            setIsLoadingImg(false);
            setChangeImg(true);
            setImageData({ url: response.data.url, public_id: response.data.public_id });
         } catch (error) {
            console.log(error);
            setIsLoadingImg(false);
         }
      } else {
         toast({
            title: 'Choose your image ~~',
            description: "accept any type of images",
            status: 'warning',
            duration: 3000,
            isClosable: true,
            position: 'top-right',
         });
         setIsLoadingImg(false);
         return;
      }
   };

   const _onSubmitForm = async (data) => {
      setIsLoadingChangePwd(true);
      console.log(">>> Check data UserAccount: ", data);
      if (data.newPassword === data.confirmNewPassword) {
         const params = {
            password: data.currentPassword,
            newPassword: data.confirmNewPassword,
         };

         try {
            const response = await userApi.updatePassword(params);
            if (response.data.success) {
               toast({
                  title: 'Change password successfully !!',
                  status: 'success',
                  isClosable: true,
                  duration: 3000,
                  position: 'top',
                  variant: 'left-accent',
               });
               playCorrectSound_audio();
            }
         } catch (error) {
            playWrongSound_audio();
            toast({
               title: 'Error Occured!',
               description: error.response.data.message,
               status: 'error',
               duration: 3000,
               isClosable: true,
               position: 'top',
               variant: 'left-accent',
            });
         } finally {
            setIsLoadingChangePwd(false);
         }
      }
      else {
         playWrongSound_audio();
         toast({
            title: 'Error Occured!',
            description: 'New password not match',
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top',
            variant: 'left-accent',
         });
         setIsLoadingChangePwd(false);
      }
   };

   const handleOnChangeModal = () => {
      dispatch(updateAvatar({
         url: image,
      }))
         .unwrap()
         .then((res) => {
            setStatusModal(false);
            toast({
               title: 'Change avatar successfully 😚😗😚',
               status: 'success',
               duration: 2000,
               isClosable: true,
               position: 'top',
            });
         })
         .catch((err) => {
            setImage(imageBeforeUpload);
            setStatusModal(false);
            toast({
               title: 'Something wrongs when save your changing 😢😢😢',
               description: err,
               status: 'error',
               duration: 2000,
               isClosable: true,
               position: 'top',
            });
         });
   };

   const handleCloseModal = () => {
      setIsLoadingImg(true);
      setStatusModal(false);
      setImage(imageBeforeUpload);
      setIsLoadingImg(false);
   };

   const setDefaultAvatar = () => {
      dispatch(updateAvatar({
         url: process.env.REACT_APP_DEFAULT_IMAGE,
      }))
         .unwrap()
         .then((res) => {
            setStatusModal(false);
            setImage(process.env.REACT_APP_DEFAULT_IMAGE);
            toast({
               title: 'Change avatar successfully 😚😗😚',
               status: 'success',
               duration: 2000,
               isClosable: true,
               position: 'top',
            });
         })
         .catch((err) => {
            setImage(imageBeforeUpload);
            setStatusModal(false);
            toast({
               title: 'Something wrongs when save your changing 😢😢😢',
               description: err,
               status: 'error',
               duration: 2000,
               isClosable: true,
               position: 'top',
            });
         });
   }

   return (
      <>
         {
            <ModalBox
               isOpenModal={statusModal}
               modalTitle='Confirm Action'
               modalContent='Are you sure to change avatar'
               buttonActionContent='CONFIRM'
               onActionClick={handleOnChangeModal}
               onSetCloseModal={handleCloseModal}
            />
         }
         <Box
            h={'100%'}
            marginTop={'-20'}
            marginBottom={'0'}
            flex='1'
            boxShadow={'dark-lg'}

            background='#fff'
            backgroundClip={'border-box'}

            // border={'1px solid rgba(0, 0, 0, .05)'}
            borderRadius='0.375rem'

            paddingBottom='1.5rem'
         >
            <Flex
               justify={'center'}
               marginTop='-70px'
            >
               {
                  isLoadingImg ?
                     <SkeletonCircle size='200px' />
                     :
                     <Image
                        borderRadius='full'
                        boxSize='200px'
                        src={image}
                        alt={userInfo && userInfo.userName}
                     />
               }
            </Flex>
            <Flex
               justify={'space-between'}
               paddingX={'1.25rem'}
               marginTop='-109px'
            >
               <Button
                  bg={'#11cdef'}
                  color='#fff'

                  lineHeight='1.5'

                  size='sm'
                  padding={'.25rem .5rem'}

                  boxShadow={'0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)'}
                  borderRadius='.375rem'

                  onClick={() => { setDefaultAvatar() }}
               >
                  Delete
               </Button>
               <Button
                  bg={'#172b4d'}
                  color='#fff'

                  lineHeight='1.5'

                  size='sm'
                  padding={'.25rem .5rem'}

                  boxShadow={'0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)'}
                  borderRadius='.375rem'

                  onClick={() => { _onClickUpdatePhoto() }}
               >
                  Update
               </Button>
               <Input
                  id='fileid'
                  hidden
                  name='image'
                  type={'file'}
                  p={1.5}
                  accept='image/*'
                  onChange={(e) => _onChangeImage(e)}
               />
            </Flex>
            <form
               style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '1.6rem' }}
               onSubmit={handleSubmit(_onSubmitForm)}
            >
               <FormControl
                  isRequired
                  marginTop={'70px'}
                  marginBottom='4'
                  paddingX='27px'
               >
                  <FormLabel color={'#525f7f'}>Username</FormLabel>
                  <Skeleton isLoaded={!isLoading}>
                     <InputGroup>
                        <Input
                           isDisabled
                           borderColor={'gray.500'}
                           placeholder='ThangCute'
                           bg='gray.50'
                           focusBorderColor='pink.300'
                           lineHeight={'3'}
                           h='60px'
                           variant='outline'
                           size='lg'
                           boxShadow={'md'}
                           fontSize='md'
                           fontWeight={'semibold'}
                           defaultValue={userInfo && userInfo.userName ? userInfo.userName : ''}
                        />
                     </InputGroup>
                  </Skeleton>
               </FormControl>

               <Spacer h={'15px'} />

               <FormControl
                  isRequired
                  paddingX='27px'
                  isInvalid={!!errors?.currentPassword?.message}
                  errortext={errors?.currentPassword?.message}
               >
                  <FormLabel color={'#525f7f'}>Current password</FormLabel>
                  <InputGroup>
                     <Input
                        placeholder='Current password'
                        bg='gray.50'
                        focusBorderColor='pink.300'
                        lineHeight={'3'}
                        h='60px'
                        variant='outline'
                        size='lg'
                        boxShadow={'md'}
                        fontSize='md'
                        fontWeight={'semibold'}
                        {...register('currentPassword')}
                     />
                  </InputGroup>
                  <FormErrorMessage>{errors?.currentPassword?.message}</FormErrorMessage>
               </FormControl>

               <Spacer h={'15px'} />

               <FormControl
                  isRequired
                  paddingX='27px'
                  isInvalid={!!errors?.newPassword?.message}
                  errortext={errors?.newPassword?.message}
               >
                  <FormLabel color={'#525f7f'}>New password</FormLabel>
                  <InputGroup>
                     <Input
                        placeholder='New password'
                        bg='gray.50'
                        focusBorderColor='pink.300'
                        lineHeight={'3'}
                        h='60px'
                        variant='outline'
                        size='lg'
                        boxShadow={'md'}
                        fontSize='md'
                        fontWeight={'semibold'}
                        {...register('newPassword')}
                     />
                  </InputGroup>
                  <FormErrorMessage>{errors?.newPassword?.message}</FormErrorMessage>
               </FormControl>
               <Spacer h={'15px'} />
               <FormControl
                  isRequired
                  paddingX='27px'
                  isInvalid={!!errors?.confirmNewPassword?.message}
                  errortext={errors?.confirmNewPassword?.message}
               >
                  <FormLabel color={'#525f7f'}>Confirm new password</FormLabel>
                  <InputGroup>
                     <Input
                        placeholder='Confirm new password'
                        bg='gray.50'
                        focusBorderColor='pink.300'
                        lineHeight={'3'}
                        h='60px'
                        variant='outline'
                        size='lg'
                        boxShadow={'md'}
                        fontSize='md'
                        fontWeight={'semibold'}
                        {...register('confirmNewPassword')}
                     />
                  </InputGroup>
                  <FormErrorMessage>{errors?.confirmNewPassword?.message}</FormErrorMessage>
               </FormControl>

               <ButtonSubmit
                  content='Change password'
                  isLoading={isLoadingChangePwd}
               />
            </form>
         </Box>
      </>
   );
}

export default UserAccount;