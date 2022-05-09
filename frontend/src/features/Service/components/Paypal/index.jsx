import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useToast } from '@chakra-ui/react'

Paypal.propTypes = {

};

function Paypal(props) {
   const { services, handleBookingServicePayPal } = props;
   const toast = useToast();
   console.log(">>> services: ", services);
   var name = '', totalPrice = 0;

   const init = () => {
      services.map(item => {
         name = name + "; " + item.name;
         totalPrice = totalPrice + item.price;
      });
   };
   init();

   return (
      <PayPalScriptProvider options={{ "client-id": "AeTQo9Grtf4bwr7mpVzYUlMxImRmPPOIo3tXWUobKDc5a3OY9RWsLOrSVotLfah9bdCYsJGzNQfjG1cf", "currency": "USD" }}>
         {services && services.length > 0
            ?
            <PayPalButtons
               createOrder={(data, actions) => {
                  return actions.order.create({
                     intent: "CAPTURE",
                     purchase_units: [{
                        description: `Booking services: ${name}`,
                        amount: {
                           value: totalPrice
                        }
                     }]
                  });
               }}
               onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                     const name = details.payer.name.given_name;
                     console.log(name);
                     handleBookingServicePayPal()
                  });
               }}
               onError={(error) => {
                  toast({
                     title: 'Payment For Booking',
                     description: `An error has occurred at the moment, please try again later!`,
                     status: 'error',
                     duration: '5000',
                     position: 'top',
                     isClosable: true
                  })
               }}
            /> :
            ""
         }
      </PayPalScriptProvider>
   );
}

export default Paypal;