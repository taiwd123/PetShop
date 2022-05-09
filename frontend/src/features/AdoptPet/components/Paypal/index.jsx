import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { loadScript } from "@paypal/paypal-js";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useToast } from '@chakra-ui/react'
import petAPI from '../../../../api/petApi';


Paypal.propTypes = {
    pet: PropTypes.object,
    handleAdoptPayPal: PropTypes.func,
};
const updatePet = async (pet) => {
    const id = pet.id
    const params = {
        "name": pet.name,
        "gender": pet.gender,
        "location": pet.location,
        "breed": pet.breed,
        "age": pet.age,
        "size": pet.size,
        "description": pet.description,
        "vaccinated": pet.vaccinated,
        "status": false,
        "price": pet.price,
        "category": pet.category,
        "imagePetEntityList": pet.imagePetEntityList

    }
    try {
        const response = await petAPI.updatePet(id, params)
        const data = response.data
        // console.log(data);
    } catch (error) {
        console.log(error.response.data);
    }
}

function Paypal(props) {
    const { pet, handleAdoptPayPal } = props
    const toast = useToast()
    const [status, setStatus] = useState(0)
    return (
        <PayPalScriptProvider options={{ "client-id": "AeTQo9Grtf4bwr7mpVzYUlMxImRmPPOIo3tXWUobKDc5a3OY9RWsLOrSVotLfah9bdCYsJGzNQfjG1cf", "currency": "USD" }}>
            {pet.price !== undefined
                ?

                <PayPalButtons
                    createOrder={(data, actions) => {
                        // console.log(pet);
                        return actions.order.create({
                            intent: "CAPTURE",
                            purchase_units: [{
                                description: `Adopt Pet ${pet.name}`,
                                amount: {
                                    value: pet.price
                                }
                            }]
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            const name = details.payer.name.given_name;
                            // console.log(name);
                            handleAdoptPayPal()
                            updatePet(pet)
                        });
                    }}
                    onError={(error) => {
                        toast({
                            title: 'Payment For Adopting',
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