import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Flex, List, ListItem, Text, Button, Menu, MenuButton, MenuItem, MenuList, Icon } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { FaHistory, FaMapMarker } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../../../features/Auth/authSlice';

TopBar.propTypes = {

};

function TopBar(props) {
    const { handleEventLogout } = props;
    const pathCurr = useLocation()
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth)
    const { isLoggedIn, userName } = auth
    // console.log('auth: ', auth);
    // console.log('path: ', pathCurr);
    const dispatch = useDispatch();
    const handleLogOut = () => {
        // dispatch(logout())
        if (handleEventLogout) handleEventLogout();
    }

    return (
        <Container
            margin='0'
            maxWidth='100%'
            padding='0'
            backgroundColor='#1446A0'
            height='42px'
        >
            <Flex
                justifyContent='space-between' alignItems='center'
                margin='0 190px'
            >
                <List display='flex' >
                    <ListItem display='flex' alignItems='center' padding='0 20px 0 0' color='#fff'>
                        <FaMapMarker />
                        <Text marginLeft='8px'>Số 1 Võ Văn Ngân </Text>
                    </ListItem>
                    <ListItem display='flex' alignItems='center' padding='0 20px' color='#fff'>
                        <EmailIcon />
                        <Text marginLeft='8px'>email@gmail.com </Text>
                    </ListItem>
                    <ListItem display='flex' alignItems='center' padding='0 20px' color='#fff'>
                        <PhoneIcon />
                        <Text marginLeft='8px'>0123456789 </Text>
                    </ListItem>
                </List>
                {
                    isLoggedIn
                        ?
                        <List display='flex' color='#fff' alignItems='center' height='42px'>
                            <ListItem >
                                <Menu>
                                    {({ isOpen }) => (
                                        <>
                                            <MenuButton
                                                isActive={isOpen} as={Button}
                                                backgroundColor='#1446A0'
                                                boxShadow='none !important  '
                                                _active={{
                                                    backgroundColor: '#1446A0'
                                                }}
                                                _hover={{
                                                    backgroundColor: '#018AE0'
                                                }}

                                            >
                                                Hello, {userName}!
                                            </MenuButton>
                                            <MenuList
                                                backgroundColor='#1446A0'
                                            >
                                                <MenuItem
                                                    background='#1446A0 !important'
                                                    _hover={{
                                                        backgroundColor: '#D61C62 !important'
                                                    }}
                                                    onClick={() => {
                                                        navigate('/profile')
                                                    }}
                                                >
                                                    <Icon as={BsPersonCircle} marginRight='8px' />
                                                    Profile
                                                </MenuItem>
                                                <MenuItem
                                                    background='#1446A0 !important'
                                                    _hover={{
                                                        backgroundColor: '#D61C62 !important'
                                                    }}
                                                    onClick={() => {
                                                        navigate('/history', {
                                                            state: {
                                                                idBill: ''
                                                            }
                                                        })
                                                    }}
                                                >
                                                    <Icon as={FaHistory} marginRight='8px' />
                                                    History
                                                </MenuItem>
                                            </MenuList>
                                        </>
                                    )}
                                </Menu>
                            </ListItem>
                            <ListItem >
                                <Button
                                    backgroundColor={pathCurr.pathname === '/register' ? '#D61C62' : '#1446A0'}
                                    boxShadow='none !important  '
                                    _hover={{
                                        backgroundColor: pathCurr.pathname === '/register' ? '#D61C62' : '#018AE0'
                                    }}
                                    _active={{
                                        backgroundColor: '#1446A0'
                                    }}
                                    onClick={handleLogOut}
                                >
                                    Logout
                                </Button>
                            </ListItem>
                        </List>
                        :
                        <List display='flex' color='#fff' alignItems='center' height='42px'>
                            <ListItem >
                                <Button
                                    backgroundColor={pathCurr.pathname === '/login' ? '#D61C62' : '#1446A0'}
                                    boxShadow='none !important  '
                                    _hover={{
                                        backgroundColor: pathCurr.pathname === '/login' ? '#D61C62' : '#018AE0'
                                    }}
                                    _active={{
                                        backgroundColor: '#1446A0'
                                    }}
                                    onClick={() => {
                                        if (pathCurr !== '/login') navigate('/login')
                                    }}
                                >
                                    Login
                                </Button>
                            </ListItem>
                            <ListItem >
                                <Button
                                    backgroundColor={pathCurr.pathname === '/register' ? '#D61C62' : '#1446A0'}
                                    boxShadow='none !important  '
                                    _hover={{
                                        backgroundColor: pathCurr.pathname === '/register' ? '#D61C62' : '#018AE0'
                                    }}
                                    _active={{
                                        backgroundColor: '#1446A0'
                                    }}
                                    onClick={() => {
                                        if (pathCurr !== '/register') navigate('/register')
                                    }}
                                >
                                    Register
                                </Button>
                            </ListItem>
                        </List>
                }

            </Flex>
        </Container>
    );
}

export default TopBar;