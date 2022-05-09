import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import roles from '../constants/roles';


PrivateRoutesAdmin.propTypes = {

};

function PrivateRoutesAdmin(props) {
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
      if (role[0] === roles.ADMIN) {
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

export default PrivateRoutesAdmin;