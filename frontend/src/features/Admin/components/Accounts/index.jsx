import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react'
import HeaderAdmin from '../Header';
import TableAccount from './TableAccount';
import PaginateUser from './PaginateUser';

AccountsManagement.propTypes = {
};

function AccountsManagement(props) {
    return (
        <Box marginLeft='288px'>
            <Box
                padding='40px'
            >
                <HeaderAdmin heading='Accounts Management' />
                <PaginateUser itemsPerPage={10} />
            </Box>
        </Box>
    );
}

export default AccountsManagement;