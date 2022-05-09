import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import ModalBox from '../../../../components/ModalBox';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './ContentServiceDetails.scss';

ContentServiceDetails.propTypes = {
   service: PropTypes.object
};

ContentServiceDetails.defaultProps = {
   service: {},
};

function ContentServiceDetails(props) {
   const { service } = props;
   console.log(">>> Check service: ", service);
   const navigate = useNavigate();
   const [login, setLogin] = useState(true);
   const [confirm, setConfirm] = useState(false);
   const [infoIsFull, setInfoIsFull] = useState(true);
   const [startDate, setStartDate] = useState(new Date());
   const [text, setText] = useState(false);

   const { isLoggedIn } = useSelector((state) => state.auth);
   const { userInfo } = useSelector((state) => state.user);

   const handleRegister = () => {
      if (!isLoggedIn) {
         setLogin(false);
      }
      else if (!userInfo || !userInfo.firstName || !userInfo.lastName || !userInfo.phone ||
         !userInfo.address.houseNumber || !userInfo.address.streetName || !userInfo.address.city ||
         !userInfo.address.province || !userInfo.address.country) {
         setInfoIsFull(false);
      }
      else {
         setConfirm(true);
      }
   };

   const hanldeUserInfoIsFull = () => {
      setInfoIsFull(true);
   }

   const handleCloseModalLogIn = () => {
      setLogin(!login);
   };

   const handleCloseModalConfirm = () => {
      setConfirm(false);
   };

   const handleConfirm = () => {
      console.log(">>> startDate: ", startDate);
      const arrTemp = [];
      arrTemp.push(service);

      if (startDate <= new Date()) {
         setText(true);
      }
      else {
         navigate("/services/payment", { state: { data: JSON.stringify(arrTemp), date: startDate } })
      }
   };

   return (
      <>
         {
            <ModalBox
               isOpenModal={!login}
               modalTitle='Warning'
               modalContent='You have not logged in before'
               buttonActionContent='GO TO LOGIN'
               onActionClick={() => navigate('/login')}
               onSetCloseModal={handleCloseModalLogIn}
            />
         }
         {
            <ModalBox
               isOpenModal={!infoIsFull}
               modalTitle='Warning'
               modalContent='You have not fill your info'
               buttonActionContent='GO TO PROFILE'
               onActionClick={() => navigate('/profile')}
               onSetCloseModal={hanldeUserInfoIsFull}
            />
         }
         {
            <ModalBox
               isOpenModal={confirm}
               modalTitle='Information'
               modalContent={
                  <>
                     <Heading
                        as='h5'
                        size='sm'
                        marginBottom='5px'
                     >
                        Make a schedule to sign up for the service here. <br />Please choose the right date and time for you.
                     </Heading>

                     <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyyy h:mm aa"
                        showTimeInput
                        className='picker'
                     />

                     {
                        text && <Text
                           as='i'
                           fontSize='12px'
                           color={'red'}
                           marginBottom='15px'
                        >
                           *Please set your time in the future.
                        </Text>
                     }
                  </>
               }
               buttonActionContent='CONFIRM'
               onActionClick={handleConfirm}
               onSetCloseModal={handleCloseModalConfirm}
            />
         }
         <Box
            flex={'0 0 75%'}
            maxW='75%'
            paddingRight={'30px'}
         >
            <Heading
               as={'h2'}
               fontSize='2.5em'
               fontWeight={'600'}
               color='#222'
               lineHeight={'1.2'}
               marginBottom='8px'
            >
               {service.name}
            </Heading>
            <Text
               as={'h6'}
               color='#8a8a8a'
               fontSize={'1.2em'}
               fontWeight='350'
               marginBottom={'20px'}
               lineHeight='1.4em'
            >
               The service is provided by Aslan Team.
            </Text>
            <Text
               fontSize={'16px'}
               lineHeight='1.6'
               fontWeight={'400'}
            >
               {service.description}
            </Text>
            <Flex
               marginTop={'20px'}
            >
               <Box
                  flex={'0 0 50%'}
                  maxW='50%'
                  paddingX='15px'
               >
                  <Image src={service.image} alt={service.name} />
               </Box>

               <Box
                  flex={'0 0 50%'}
                  maxW='50%'
                  paddingX='15px'
               >
                  <Text
                     fontSize={'20px'}
                     padding={'5px 0px'}
                     lineHeight='26px'
                     marginBottom={'5px'}
                  >
                     🔥Slot(s): {service.slot}
                  </Text>
                  <Text
                     fontSize={'20px'}
                     padding={'5px 0px'}
                     lineHeight='26px'
                     marginBottom={'5px'}
                  >
                     🤑 Price: {service.price}
                  </Text>
                  <Text
                     fontSize={'20px'}
                     padding={'5px 0px'}
                     lineHeight='26px'
                     marginBottom={'5px'}
                  >
                     💗 Status: {service.status ? 'Available' : 'Unavailable'}
                  </Text>
                  <Button
                     bg={'#018AE0'}
                     marginTop={'45px'}
                     size='lg'
                     textTransform={'uppercase'}
                     color='white'
                     whiteSpace={'normal'}
                     letterSpacing='0.2px'
                     borderRadius={'25px'}
                     fontWeight='bold'

                     _hover={{
                        bg: '#1446A0'
                     }}

                     onClick={() => handleRegister()}
                  >
                     registration
                  </Button>
               </Box>
            </Flex>
         </Box>
      </>
   );
}

export default ContentServiceDetails;