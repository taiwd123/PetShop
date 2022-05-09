import React from 'react';
import PropTypes from 'prop-types';
import NavAdmin from '../../components/NavAdmin';
import { Routes, Outlet, useLocation } from 'react-router-dom';
import { Flex, Box, Container } from '@chakra-ui/layout';
import { useSelector } from 'react-redux';

Admin.propTypes = {

};

function Admin(props) {
    const { handleEventLogout } = props;
    const location = useLocation();
    const { userInfo, isLoading } = useSelector((state) => state.user);
    const { message } = useSelector((state) => state.message);

    if (location.pathname === '/admin/profile' || !location.pathname.match('/admin/*') || location.pathname === '/admin') {
        return null;
    }
    return (
        <>
            <NavAdmin userInfo={userInfo} handleEventLogout={handleEventLogout} />

            <Outlet />
        </>
    );
}

export default Admin;