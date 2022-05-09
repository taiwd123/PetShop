import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Container, Flex, Image, Menu, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { TriangleDownIcon } from '@chakra-ui/icons'
import {
    List,
    ListItem,
} from '@chakra-ui/react'
import IMAGES from '../../../constants/images';

TopNav.propTypes = {

};

function TopNav(props) {
    const unFocus = useRef()
    const handleUnFocus = () => {
        console.log(unFocus.current.classList.remove('css-f4h6uy'));
    }

    return (
        <Container
            margin='0'
            maxWidth='100%'
            padding='0'
            height='106px'
            padding='8px 0'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
        >
            <Flex
                justifyContent='space-between'
                flex='0 0 75%'
                alignItems='center'
                flexDirection='row'
                height='60px'
                margin={'0 190px'}
            >
                <Link onClick={handleUnFocus} ref={unFocus} to='/'>
                    <Image
                        maxHeight='60px'
                        src={IMAGES.Logo}
                        alt='Dan Abramov'
                    />
                </Link>
                <Flex>
                    <List display='flex' fontWeight='600'>
                        <ListItem padding={'0 16px'}>
                            <Link to='/'>Home</Link>
                        </ListItem>
                        <ListItem padding={'0 16px'}>
                            <Link to='/services'>Services</Link>
                        </ListItem>
                        <ListItem padding={'0 7px'}>
                            <Container>
                                <Menu isLazy>
                                    <MenuButton fontWeight='600'>About </MenuButton>
                                    <MenuList backgroundColor={'#018ae0'} >
                                        <MenuItem fontWeight='600'><Link to='/aboutus'>About Us</Link></MenuItem>
                                        <MenuItem fontWeight='600'><Link to='/ourteam'>Our team</Link></MenuItem>
                                    </MenuList>
                                </Menu>
                            </Container>
                        </ListItem>
                        <ListItem padding={'0 7px'}>
                            <Link to='/adoption'>Adopt</Link>
                        </ListItem>
                        <ListItem padding={'0 16px'}>
                            <Link to='/gallery'>Gallery</Link>
                        </ListItem>
                        <ListItem padding={'0 16px'}>
                            <Link to='/contact'>Contact</Link>
                        </ListItem>
                    </List>
                </Flex>
            </Flex>
        </Container>
    );
}

export default TopNav;