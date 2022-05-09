import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import IMAGES from '../../../../constants/images';
import ServiceCard from '../ServiceCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../../serviceSlice';
import { register, remove } from '../../servicesRegistrationSlice';
import ModalBox from '../../../../components/ModalBox';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import '../ContentServiceDetails/ContentServiceDetails.scss';
import { useNavigate } from 'react-router-dom';

ServicesList.propTypes = {
   services: PropTypes.array,
   isLoading: PropTypes.bool,
   loadMore: PropTypes.func,
};

ServicesList.defaultProps = {
   services: [],
   isLoading: false,
   loadMore: null,
};

function ServicesList(props) {
   // window.scrollTo(0, document.body.scrollHeight);
   const { services, pagination, loadMore } = props;
   console.log(">> a: ", services);
   const navigate = useNavigate();
   const { _currentItem, _limit, _page, _totalItem, _totalPage } = pagination;

   const [statusLoadMore, setStatusLoadMore] = useState(false);
   const [login, setLogin] = useState(true);
   const [confirm, setConfirm] = useState(false);
   const [startDate, setStartDate] = useState(new Date());
   const [text, setText] = useState(false);

   const { isLoggedIn } = useSelector((state) => state.auth);
   const servicesRegistration = useSelector((state) => state.servicesRegistration);
   const dispatch = useDispatch();
   console.log(">>> Check status load more: ", statusLoadMore);

   useEffect(() => {
      if (_page !== 0) {
         scrollToBottom();
      }

      if (_page + 1 >= _totalPage) {
         var objDiv = document.getElementById("infiniteScroll");
         objDiv.style.overflow = 'hidden';
      }
   }, [pagination]);

   // useEffect(() => {
   //    servicesRegistrationRef.current = [...servicesRegistration];
   //    console.log(">>> Ref: ", servicesRegistrationRef.current);
   // }, [servicesRegistration]);

   const scrollToBottom = () => {
      var objDiv = document.getElementById("infiniteScroll");
      window.scrollTo(0, objDiv.offsetHeight + 120);
   };

   const handleLoadMore = (newPage) => {
      if (loadMore) loadMore(newPage);
   }

   const handleCheckboxChange = (service, isChecked) => {
      console.log(">>> Check id from serviceslist: ", service.id);
      let find = servicesRegistration.indexOf(service);
      console.log(">>> find: ", find);
      // var newArray = [...servicesRegistration];
      if (find === -1 && isChecked) {
         // newArray.push(id);
         // console.log(">>> chec new array: ", newArray);
         // setServicesRegistration([...new Set(newArray)]); // make unique id // not really need
         // console.log(">>> Check arrays: ", servicesRegistration);
         const action = register(service);
         dispatch(action);
      }
      else if (find > -1 && !isChecked) {
         // newArray.splice(find, 1);
         const action = remove(service.id);
         dispatch(action);
      }
      // setServicesRegistration([...new Set(newArray)]);
   };

   const handleCloseModalLogIn = () => {
      setLogin(!login);
   };

   const handleCloseModalConfirm = () => {
      setConfirm(false);
   };

   const handleConfirm = () => {
      console.log(">>> startDate: ", startDate);

      if (startDate <= new Date()) {
         setText(true);
      }
      else {
         navigate("/services/payment", { state: { data: JSON.stringify(servicesRegistration), date: startDate } })
      }
   };

   const handleRegister = () => {
      if (!isLoggedIn) {
         setLogin(false);
      }
      else {
         setConfirm(true);
      }
      // alert("a");
   };

   return (
      <Box
         paddingY={'90px'}
         paddingX='0'
         bgColor={'#f4f4f4'}
         bgImage={IMAGES.FooterBG}
         bgPosition='center bottom'
         backgroundRepeat={'repeat-x'}
         width='100%'
         marginX='auto'
         minHeight={'500'}
         position='relative'
         // height='500'
         height={(_page + 1) * 450}
         overflow={'auto'}
         id='infiniteScroll'
         scrollBehavior={'smooth'}
         css={{
            '&::-webkit-scrollbar': {
               width: '4px',
            },
            '&::-webkit-scrollbar-track': {
               width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
               background: '#222',
               borderRadius: '24px',
               ":hover": {
                  background: '#636e72'
               }
            },
         }}
      >
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
         {
            servicesRegistration.length > 0 ?
               <Button
                  position={'absolute'}
                  top='50%'
                  bottom={'50%'}
                  left='10%'
                  bg={'#D61C62'}
                  color='white'
                  // paddingTop={'20px'}
                  // paddingBottom={'20px'}
                  onClick={() => handleRegister()}
               >
                  Register for <br /> multiple services
               </Button>
               : <></>
         }
         <Container
            maxW={'6xl'}
         >
            <Flex
               wrap={'wrap'}
               alignItems='center'
               justify={'center'}
            >
               {services ?
                  <InfiniteScroll
                     style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        overflow: 'hidden',
                     }}
                     dataLength={services.length}
                     next={() => handleLoadMore(_page + 1)}
                     hasMore={_page + 1 >= _totalPage ? false : true}
                     loader={<><p style={{ width: '100%' }}></p> <Spinner thickness='4px' /></>}
                     scrollableTarget='infiniteScroll'

                     useWindow={false}
                     endMessage={
                        <p style={{ textAlign: "center", width: '100%' }}>
                           <b>Yay! You have seen it all</b>
                        </p>
                     }
                  >
                     {
                        services.map((service, index) => (
                           <ServiceCard
                              key={service.id}
                              service={service}
                              servicesRegistration={servicesRegistration}
                              handleCheckboxChange={handleCheckboxChange}
                           />
                        ))
                     }
                  </InfiniteScroll>
                  :
                  <Spinner thickness='4px' />
               }
            </Flex>
         </Container>
      </Box>
   );
}

export default ServicesList;