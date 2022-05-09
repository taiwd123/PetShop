import React from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import TopNav from './TopNav';
import { Container, Box } from '@chakra-ui/layout';
import { useLocation } from 'react-router-dom';

Header.propTypes = {
    handleEventLogout: PropTypes.func,
};

function Header(props) {
    const { handleEventLogout } = props;
    const location = useLocation();

    if (!location.pathname.match('/admin/*') || location.pathname === '/admin') {
        return (
            <Container
                maxWidth='100%'
                width='100%'
                padding='0'
                position='fixed'
                top='0'
                background='#fff'
                zIndex='999'
            >
                <TopBar handleEventLogout={handleEventLogout} />
                <TopNav />
            </Container>
        );
    }
    else if (location.pathname === '/admin/profile') {
        return (<Container
            maxWidth='100%'
            width='100%'
            padding='0'
            position='fixed'
            top='0'
            background='#fff'
            zIndex='999'
        >
            <TopBar handleEventLogout={handleEventLogout} />
            <Box
                cursor='not-allowed'
                pointerEvents={'none'}
            >
                <TopNav />
            </Box>
        </Container>);
    }
    return null;
}

export default Header;