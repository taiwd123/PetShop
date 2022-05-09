import React from 'react';
import PropTypes from 'prop-types';
import { Container, Heading, Divider, Link, Image, Flex, List, ListItem, Text } from '@chakra-ui/react'
import IMAGES from '../../constants/images';
import { FaPinterest, FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

SideBar.propTypes = {
    maxW: PropTypes.string,
    flex: PropTypes.string,
};

function SideBar(props) {
    return (
        <Container
            margin='0px'
            padding='20px'
            backgroundColor='#f4f4f4'
            border='0px'
            border-radius='15px'
            height='100% !important'
            maxWidth='100%'
            flex={props.flex}
            width={props.maxW}
            backgroundImage={IMAGES.FooterBG}
            backgroundPosition='center bottom'
            backgroundRepeat='repeat-x'
            borderRadius='16px'
        >
            <Container
                maxWidth='100%'
                height='100%'
                marginBottom='40px'
                padding='0 !important'
            >
                <Container
                    maxWidth='100%'
                    height='100%'
                    marginBottom='20px'
                    padding='0 !important'
                >
                    <Flex
                        justifyContent='center'
                        alignItems='center'
                        padding='0 !important'
                    >
                        <Heading
                            fontSize='24px'
                        >
                            Meet our Team
                        </Heading>
                    </Flex>
                    <Divider
                        border='2px solid #9E9E9E'
                        width='60px'
                        margin='10px auto'
                    />
                </Container>
                <Container
                    padding='0 !important'
                >
                    <Container
                        padding='0 !important'
                        maxWidth='100%'
                        height='100%'
                    >
                        <Container
                            padding='0 !important'
                            maxWidth='100%'
                            height='100%'
                        >
                            <Link href='#'>
                                <Image src={IMAGES.SideBar} />
                            </Link>
                        </Container>
                        <Container
                            padding='20px'
                            backgroundColor='#fff'
                            borderBottomRadius='10px'
                            maxWidth='100%'
                            height='142px'
                        >
                            <Link textDecoration='none !important' href='#'>
                                <Heading
                                    fontSize='24px'
                                    fontWeight='400'
                                >
                                    20 Qualified Pet care Professionals
                                </Heading>
                            </Link>
                            <Flex
                                justifyContent='center'
                                alignItems='center'
                                marginTop='8px'
                            >
                                <Link
                                    textDecoration='none !important'
                                    href='#'
                                    padding='8px 50px'
                                    borderRadius='20px'
                                    backgroundColor='#D61C62'
                                    color='#fff'
                                    fontWeight='700'
                                >
                                    SEE MORE
                                </Link>
                            </Flex>
                        </Container>
                    </Container>
                </Container>

            </Container>
            <Container
                maxWidth='100%'
                height='100%'
                margin='40px 0'
                padding='0 !important'
            >
                <Flex
                    justifyContent='center'
                    alignItems='center'
                >
                    <Heading
                        fontSize='24px'
                    >
                        Follow us
                    </Heading>
                </Flex>
                <Divider
                    border='2px solid #9E9E9E'
                    width='60px'
                    margin='10px auto'
                />
                <Container
                    width='100%'
                >
                    <List
                        fontSize='30px'
                        display='flex'
                        justifyContent='space-around'
                        alignItems='center'
                    >
                        <ListItem>
                            <Link href='#' color='#018AE0'>
                                <FaFacebookSquare />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='#' color='#018AE0'>
                                <FaInstagram />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='#' color='#018AE0'>
                                <FaTwitter />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='#' color='#018AE0'>
                                <FaPinterest />
                            </Link>
                        </ListItem>
                    </List>
                </Container>
            </Container>
            <Container
                maxWidth='100%'
                height='100%'
                margin='40px 0'
                padding='0 !important'
            >
                <Flex
                    justifyContent='center'
                    alignItems='center'
                >
                    <Heading
                        fontSize='24px'
                    >
                        Our video
                    </Heading>
                </Flex>
                <Divider
                    border='2px solid #9E9E9E'
                    width='60px'
                    margin='10px auto'
                />
                <Container
                    width='100%'
                    height='184px'
                    display='flex'
                    justifyContent='center'
                    position='relative'

                >
                    <iframe src="https://www.youtube.com/embed/22-OYBWLWU4" style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',

                    }} />
                </Container>
            </Container>

            <Container
                maxWidth='100%'
                height='100%'
                margin='40px 0'
                padding='0 !important'
            >
                <Flex
                    justifyContent='center'
                    alignItems='center'
                >
                    <Heading
                        fontSize='24px'
                    >
                        Our Mission
                    </Heading>
                </Flex>
                <Divider
                    border='2px solid #9E9E9E'
                    width='60px'
                    margin='10px auto'
                />
                <Text
                    textAlign='center'
                    color='#6f6f6f'
                    fontSize='16px'
                    lineHeight='1.6'
                    fontWeight='400'
                >
                    Aliquam erat volutpat In id fermentum augue Maecenas at arcu risus. Donec com modo sodales ex.
                </Text>
            </Container>
        </Container >
    );
}

export default SideBar;