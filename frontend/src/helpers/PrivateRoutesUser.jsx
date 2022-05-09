import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import roles from '../constants/roles';

PrivateRoutesUser.propTypes = {

};

function PrivateRoutesUser(props) {
   const navigate = useNavigate();
   const location = useLocation();

   const { isLoggedIn, role } = useSelector((state) => state.auth);
   // console.log(">>> Check PrivateRoutesUser - isLoggedIn & role: ", isLoggedIn, " ", role);

   // useEffect(() => {
   //    if (isLoggedIn) {
   //       navigate(-1)
   //    }
   // }, [isLoggedIn])

   if (isLoggedIn === undefined)
      return <Loading />

   if (!isLoggedIn) {
      return <Navigate
         to='/login'
         state={{ from: location }}
         replace
      />
   }
   else {
      if (role[0] === roles.USER) {
         return <Outlet />
      }
      else {
         return <Navigate
            to='/home'
            state={{ from: location }}
            replace
         />
      }
   }
}

export default PrivateRoutesUser;