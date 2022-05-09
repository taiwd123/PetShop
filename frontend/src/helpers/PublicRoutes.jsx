import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

PublicRoutes.propTypes = {

};

function PublicRoutes(props) {
   const navigate = useNavigate();
   const location = useLocation();

   const { isLoggedIn } = useSelector((state) => state.auth);

   // useEffect(() => {
   //    if (isLoggedIn) {
   //       navigate(-1)
   //    }
   // }, [isLoggedIn])

   if (isLoggedIn === undefined)
      return <Loading />

   return isLoggedIn ?
      <Navigate
         to='/home'
         state={{ from: location }}
         replace
      />
      // <div></div>
      :
      <Outlet />
}

export default PublicRoutes;