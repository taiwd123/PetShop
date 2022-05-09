import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import Advertisement from '../../components/Advertisement';
import { Box, Skeleton, Spinner } from '@chakra-ui/react';
import ContactAction from '../../components/ContactAction';
import Question from '../../components/Question';
import ServicesList from '../../components/ServicesList';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../../serviceSlice';

Services.propTypes = {

};

function Services(props) {
   // window.scrollTo(0, 0)
   const dispatch = useDispatch();

   const { services, isLoading, pagination } = useSelector((state) => state.service);
   // const [pagination, setPagination] = useState({
   //    _currentItem: 0,
   //    _limit: 0,
   //    _page: 0,
   //    _totalItem: 0,
   //    _totalPage: 0,
   // });

   const [filters, setFilters] = useState({
      _page: pagination._page,
      _size: 3,
      _sort: "id",
   });

   useEffect(() => {
      const fetchData = async () => {
         const params = {
            page: filters._page,
            size: filters._size,
            sort: filters._sort,
         };

         dispatch(getServices(params))
            .unwrap()
            .then((response) => {
               // setPagination(response.pagination);
            })
            .catch(() => { });
      };
      fetchData();
   }, [dispatch, filters]);

   const loadMore = (newPage) => {
      setFilters({
         ...filters,
         _page: newPage,
      });
   }

   const arr = [{
      head: 'Services',
      link: ''
   }]
   const addJson = JSON.stringify(arr)

   return (
      <>
         <Banner
            arrHeading={addJson} headingPage='Services'
         />
         <Box
            paddingY={'20'}
         >
            <Advertisement />
            <Skeleton isLoaded={!isLoading} >
               <ServicesList services={services} pagination={pagination} loadMore={loadMore} />
            </Skeleton>
            <ContactAction />
            <Question />
         </Box>
         {/* <Outlet /> */}
      </>
   );
}

export default Services;