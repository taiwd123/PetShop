import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Box
} from '@chakra-ui/react'
import HeaderAdmin from '../Header';
import ChartAdmin from './Chart'
import OverviewDash from './OverviewDash'
import userApi from '../../../../api/userApi';
import { set } from 'react-hook-form';
import petAPI from '../../../../api/petApi';
import serviceApi from '../../../../api/serviceApi';
import billAPI from '../../../../api/billApi';
import bookServiceAPI from '../../../../api/bookServiceApi';

Dashboard.propTypes = {

};

function Dashboard(props) {
    const [totalUser, setTotalUser] = useState(0)
    const [totalPet, setTotalPet] = useState(0)
    const [totalService, setTotalService] = useState(0)
    const [toltalRevenue, setToltalRevenue] = useState(0)

    useEffect(() => {
        const getAllUser = async () => {
            const params = {
                page: 0,
                size: 999,
            }
            const response = await userApi.getAllUsers(params)
            const { data } = response.data
            // console.log('data.users: ', data.users);
            setTotalUser(data.users.length)
        }
        const getAllPet = async () => {
            const params = {
                page: 0,
                size: 999,
            }
            const response = await petAPI.getAll(params)
            const { data } = response.data
            // console.log('data.pets: ', data.pets);
            setTotalPet(data.pets.length)
        }
        const getAllService = async () => {
            const params = {
                page: 0,
                size: 999,
                sort: 'id'
            }
            const response = await serviceApi.getServices(params)
            const { data } = response.data
            // console.log('data.services: ', data.services);
            setTotalService(data.services.length)
        }
        const getAllRevenue = async () => {
            let total = 0
            const paramsBill = {
                page: 0,
                size: 999,
            }
            const responseBill = await billAPI.getBills(paramsBill)
            const { bills } = responseBill.data.data

            const paramsBooking = {
                page: 0,
                size: 999,
            }
            const responseBooking = await bookServiceAPI.getAllBooking(paramsBooking)
            const { bookingServices } = responseBooking.data.data

            bills.forEach((item) => {
                total += item.price
            })
            bookingServices.forEach((item) => {
                total += item.service.price
            })

            setToltalRevenue(total)
            // console.log('bills: ', bills);
            // console.log('bookingServices: ', bookingServices);
        }
        getAllUser()
        getAllPet()
        getAllService()
        getAllRevenue()
    }, [])

    return (
        <Box marginLeft='288px'>
            <Box
                padding='40px'
            >
                <HeaderAdmin heading='Dashboard' isButton={false} />
                <OverviewDash totalUser={totalUser} totalPet={totalPet} totalService={totalService} toltalRevenue={toltalRevenue} />
                <ChartAdmin />
            </Box>
        </Box>
    );
}

export default Dashboard;