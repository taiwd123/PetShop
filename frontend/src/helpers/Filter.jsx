import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

Filter.propTypes = {

};

// check jwt token
function Filter(props) {
   const location = useLocation();

   const cookies = new Cookies();
   const authToken = cookies.get("authToken") ? cookies.get("authToken") : null;

   if (authToken) {
      return <Outlet />;
   }
   else {
      return <Navigate
         to='/login'
         state={{ from: location }}
         replace
      />
   }
}

export default Filter;