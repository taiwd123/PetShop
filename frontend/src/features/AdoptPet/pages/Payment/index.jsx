import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Flex, Container, Table, Thead, Tbody, Tr, Th, Td, Heading, useToast } from '@chakra-ui/react';
import Paypal from '../../components/Paypal';
import Banner from '../../../../components/Banner';
import { useParams, useLocation, useNavigate, Navigate } from 'react-router-dom';
import petAPI from '../../../../api/petApi'
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../../../Information/userSlice';
import billAPI from '../../../../api/billApi';
import moment from 'moment'

Payment.propTypes = {
    // idPet: PropTypes.string
};

function Payment(props) {
    window.scrollTo(0, 0)
    // const { idPet } = props
    const { isLoggedIn } = useSelector((state) => state.auth)
    const { userInfo } = useSelector((state) => state.user)
    const [pet, setPet] = useState({})
    const { id: idPet } = useParams()
    const navigate = useNavigate()
    const toast = useToast()
    const dispatch = useDispatch()

    const initFetch = useCallback(async () => {
        dispatch(getInfo());
    }, [dispatch]);

    if (!isLoggedIn) {
        navigate('/login')
    }
    useEffect(() => {
        const getPet = async () => {
            const response = await petAPI.getPet(idPet)
            const { data } = response.data
            setPet(data.petInfo)
        }
        getPet()
        initFetch();
    }, [idPet, initFetch])
    const arr = [
        {
            head: 'Adoption',
            link: 'adoption'
        },
        {
            head: 'Adoption single page',
            link: `adoption/${idPet}`
        },
        {
            head: 'Payment',
            link: ''
        }
    ]
    const arrJson = JSON.stringify(arr)
    const handleAdoptPayPal = () => {

        const testMoment = moment().format('YYYY-MM-DDThh:mm:ss');
        const params = {
            idPet: idPet,
            idUser: userInfo.id,
            methodPayment: "Paypal",
            paymentDate: `${testMoment}`,
            price: pet.price
        }
        const addBillPet = async (infoBill) => {
            try {
                const response = await billAPI.addBill(infoBill)
                const { data, message, status, success } = response.data
                // console.log(data, message, status, success);
                if (status === 200) {
                    toast({
                        title: 'Payment For Adopting',
                        description: `Thank you for adopting pet of our website!`,
                        status: 'success',
                        duration: '5000',
                        position: 'top',
                        isClosable: true
                    })
                }
            } catch (error) {
                console.log(error.response.data);
            }

        }
        addBillPet(params)
        navigate('/adoption', { replace: true, state: { isRender: true } })
    }
    // console.log('user pay: ', userInfo);
    return (
        <>
            <Banner headingPage={'Payment'} arrHeading={arrJson} />

            <Container
                maxWidth='100%'
                width='auto'
                margin='0 190px'
                padding='90px 0'
            >
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    flexWrap='wrap'
                >
                    {
                        pet !== {} ?
                            <>
                                <Table
                                    flex='0 0 1'
                                    width='100%'
                                    marginBottom='40px'
                                >
                                    <Thead>
                                        <Tr >
                                            <Th textAlign='center'>ID Pet</Th>
                                            <Th textAlign='center'>Name</Th>
                                            <Th textAlign='center'>Price</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr >
                                            <Td textAlign='center'>{pet.id}</Td>
                                            <Td textAlign='center'>{pet.name}</Td>
                                            <Td textAlign='center'>{pet.price} $</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                                <Container
                                    width='75%'
                                    flex='0 0 75%'
                                    margin='0'
                                    padding='0'
                                >
                                    <Paypal pet={pet} handleAdoptPayPal={handleAdoptPayPal} />
                                </Container>
                            </>
                            :
                            <Heading>Please, Choose Pet !!!</Heading>
                    }

                </Flex>
            </Container>
        </>
    );
}

export default Payment;