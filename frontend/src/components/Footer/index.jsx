import React from 'react';
import PropTypes from 'prop-types';
import { Container, Flex, Image, List, ListItem, Text, Heading, Divider, Link } from '@chakra-ui/react'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import IMAGES from '../../constants/images';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarker } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

Footer.propTypes = {

};

function Footer(props) {
    const location = useLocation();

    if (location.pathname === '/admin/profile' || !location.pathname.match('/admin/*') || location.pathname === '/admin') {
        return (
            <Container
                backgroundImage={IMAGES.FooterBG}
                backgroundPosition='center bottom'
                backgroundRepeat='repeat-x'
                height='380px'
                margin='0'
                maxWidth='100%'
                padding='80px 0'
            >
                <Container
                    maxWidth='100%'
                    height='220px'
                    padding='0'
                    width='auto'
                    margin='0 190px'
                >
                    <Flex>
                        <Container
                            maxWidth='25%'
                            margin='0'
                            padding='0 15px'
                        >
                            <Image
                                src={IMAGES.Logo}
                                alt='Dan Abramov'
                            />
                            <List display='flex' color='#018AE0' justifyContent='center' alignItems='center' height='42px'>
                                <ListItem padding='0 10px'><FaFacebookF /></ListItem>
                                <ListItem padding='0 10px'><FaTwitter /></ListItem>
                                <ListItem padding='0 10px'><FaInstagram /></ListItem>
                            </List>
                        </Container>
                        <Container
                            maxWidth='25%'
                            margin='0'
                            padding='0 15px'
                        >
                            <Heading as='h4' size='md' fontWeight='600'>
                                About us
                            </Heading>
                            <Divider width='60px' border=' 1px solid #cecece' margin='10px auto' marginLeft='0' opacity='1' />
                            <Text>Elit aenean, amet eros curabitur. Wisi ad eget ipsum metus sociis Cras enim wisi elit aenean.</Text>
                        </Container>
                        <Container
                            maxWidth='25%'
                            margin='0'
                            padding='0 15px'
                        >
                            <Heading as='h4' size='md' fontWeight='600'>
                                Contact us
                            </Heading>
                            <Divider width='60px' border=' 1px solid #cecece' margin='10px auto' marginLeft='0' opacity='1' />
                            <List >
                                <ListItem display='flex' alignItems='center' color='#6f6f6f'>
                                    <FaMapMarker />
                                    <Text marginLeft='8px'>Số 1 Võ Văn Ngân </Text>
                                </ListItem>
                                <ListItem display='flex' alignItems='center' color='#6f6f6f'>
                                    <EmailIcon />
                                    <Text marginLeft='8px'>email@gmail.com </Text>
                                </ListItem>
                                <ListItem display='flex' alignItems='center' color='#6f6f6f'>
                                    <PhoneIcon />
                                    <Text marginLeft='8px'>0123456789 </Text>
                                </ListItem>
                            </List>
                        </Container>
                        <Container
                            maxWidth='25%'
                            margin='0'
                            padding='0 15px'
                        >
                            <Heading as='h4' size='md' fontWeight='600'>
                                Working Hours
                            </Heading>
                            <Divider width='60px' border=' 1px solid #cecece' margin='10px auto' marginLeft='0' opacity='1' />
                            <List >
                                <ListItem color='#6f6f6f'>
                                    <Text>Open from 9am - 6pm </Text>
                                </ListItem>
                                <ListItem color='#6f6f6f'>
                                    <Text>Holidays - Closed</Text>
                                </ListItem>
                                <ListItem color='#6f6f6f'>
                                    <Text>Weekends - Closed</Text>
                                </ListItem>
                            </List>
                        </Container>
                    </Flex>
                    <Divider width='100%' border='0 solid #cecece' margin='16px 0' opacity='1' />
                    <Flex alignItems='center' justifyContent='center'>
                        <Text>Copyright 2019 - 2021 / Cloned by <Link href='http://www.ingridkuhn.com/' target='_blank'>Tài Phan & Anthony Đức Thắng</Link></Text>
                    </Flex>
                </Container>
            </Container>
        );
    }
    return null;
}

export default Footer;