import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import authApi from '../../../../api/authApi';
import PropTypes from 'prop-types';
import Loading from '../../../../components/Loading';

ConfirmEmail.propTypes = {

};

function ConfirmEmail(props) {
   let { token } = useParams();
   const navigate = useNavigate();
   console.log(">>> Check token to confirm email: ", token);
   const [confirming, setConfirming] = useState(true);

   useEffect(() => {
      let flag = true;
      const confirmEmail = async () => {
         try {
            const response = await authApi.confirmEmail(token);
            if (flag === true) {
               console.log('>>> Check confirm email/GET Method: ', response);
               // response true => home
               // else => login
               if (response.data.success) {
                  navigate("/");
               }
               else {
                  navigate("/login");
               }
            }
         } catch (error) {
            console.log(">>> Confirm email error/GET Method: ", error.response.data.message);
            navigate("/login");
         }
         finally {
            setConfirming(false);
         }
      }

      confirmEmail();

      return () => {
         flag = false;
      };
   }, []);

   return (
      <div>
         {
            confirming ?
               <p>Hello1</p>
               :
               <p>Hello</p>
         }
      </div>
   );
}

export default ConfirmEmail;