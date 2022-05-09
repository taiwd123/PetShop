import React from 'react';
import PropTypes from 'prop-types';
import {
    Container, Text, Heading, Icon, Flex, Image, FormControl, FormLabel,
    Input, Textarea, Button, List, ListIcon, ListItem, Divider
} from '@chakra-ui/react';
import { FaPaw } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import IMAGES from '../../../../constants/images';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import Map from '../../../../components/Map'
import { FaMapMarker } from "react-icons/fa";


ContactHome.propTypes = {

};

function ContactHome(props) {
    return (
        <Container
            maxWidth='100%'
            width='auto'
            margin='0'
            padding='90px 0'
            backgroundColor='#f4f4f4'
        >
            <Container

                maxWidth='100%'
                width='auto'
                margin='0 0 90px 0'
                padding='0'
                textAlign='center'
            >
                <Text
                    color='#6f6f6f'
                    fontSize='18px'
                    fontWeight='600'
                    _before={{
                        content: '""',
                        display: 'inline-block',
                        position: 'relative',
                        top: '-4px',
                        width: '24px',
                        height: '2px',
                        background: "#6f6f6f",
                        marginRight: '10px',
                    }}
                    _after={{
                        content: '""',
                        display: 'inline-block',
                        position: ' relative',
                        top: '-4px',
                        width: '24px',
                        height: '2px',
                        marginLeft: '10px',
                        background: "#6f6f6f",
                    }}
                >
                    GET IN TOUCH
                </Text>
                <Heading
                    fontSize='45px'
                    fontWeight='700'
                    color='#000'
                >
                    CONTACT US
                </Heading>
                <Icon
                    as={FaPaw}
                    maxWidth='100%'
                    width='100%'
                    margin='0'
                    zIndex=' 0'
                    fontFamily="flaticon"
                    fontSize='20px'
                    zIndex='0'
                    transform=' rotate(20deg)'
                    opacity=' 0.5'
                    display='block'
                    color='#018AE0'
                    fontSize='20px'
                />
            </Container>
            <Container
                maxWidth='100%'
                width='auto'
                padding='0 16px'
                margin='0 190px'
            >
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    position='relative'
                >
                    <Image
                        src={IMAGES.ContactGB}
                        position='absolute'
                        left='-420px'
                        bottom='-280px'
                    />
                    <Container
                        flex='0 0 58.33%'
                        margin='0'
                        padding='0 16px'
                        maxWidth='58.33%'
                        width='58.33%'
                        zIndex='1'
                    >
                        <Container
                            margin='0 0 0 180px'
                            padding='0 20px 20px 20px'
                            maxWidth='100%'
                            width='auto'
                            backgroundColor='#018AE0'
                            textAlign='center'
                            borderRadius='12px'
                        >
                            <Container
                                margin='0'
                                padding='0'
                                maxWidth='100%'
                                width='100%'
                                alignItems='center'
                                top='-20px'
                                left='0'
                            >
                                <Icon
                                    width='80px'
                                    height='80px'
                                    padding='12px'
                                    backgroundColor='#018AE0'
                                    borderRadius='50%'
                                    fontSize='48px'
                                    color='#fff'
                                    as={MdMail}
                                    marginTop='-20px'
                                />
                            </Container>
                            <Heading
                                margin='16px 0'
                                fontSize='30px'
                                fontWeight='700'
                                color='#fff'
                            >
                                Send us a message
                            </Heading>
                            <FormControl
                                color='#fff'
                                padding='0 10px'
                            >
                                <FormLabel htmlFor='name' margin='10px 0'>Name*</FormLabel>
                                <Input
                                    variant='flushed'
                                    id='Name'
                                    placeholder='Name'
                                    borderBottom='2px solid #fff !important'
                                />

                                <FormLabel htmlFor='email-address' margin='10px 0'>Email address *</FormLabel>
                                <Input
                                    variant='flushed'
                                    required
                                    type='email'
                                    id='Email'
                                    placeholder='Email address'
                                    borderBottom='2px solid #fff !important' />

                                <FormLabel htmlFor='subject' margin='10px 0'>Subject</FormLabel>
                                <Input
                                    variant='flushed'
                                    required id='Subject'
                                    placeholder='Subject'
                                    borderBottom='2px solid #fff !important' />

                                <FormLabel htmlFor='message' margin='10px 0'>Message*</FormLabel>
                                <Textarea
                                    height='100px'
                                    variant='flushed'
                                    required id='Message'
                                    placeholder='Message'
                                    borderBottom='2px solid #fff !important' />

                                <Button
                                    margin='20px 0'
                                    color='#fff'
                                    backgroundColor='#D61C62'
                                    width='100%'
                                    borderRadius='20px'
                                    _hover={{
                                        backgroundColor: '#1446A0'
                                    }}
                                    _active={{
                                        backgroundColor: '#1446A0'
                                    }}
                                >
                                    SEND MESSAGE
                                </Button>
                            </FormControl>
                        </Container>
                    </Container>
                    <Container
                        margin='0'
                        padding='0'
                        maxWidth='41.67%'
                        width='41.67%'
                        flex='0 0 41.67%'
                    >
                        <Container
                            margin='0'
                            padding='0 16px'
                            maxWidth='100%'
                            width='auto'
                            textAlign='center'
                        >
                            <Heading
                                marginBottom='20px'
                            >
                                Get in Touch
                            </Heading>
                            <Text
                                fontWeight='400'
                                fontSize='16px'
                                color='#6f6f6f'
                                marginBottom='20px'
                            >
                                In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                            </Text>
                            <List
                                fontSize='16px'
                                color='#6f6f6'
                                fontWeight='600'
                            >
                                <ListItem
                                    margin='6px'
                                    display='inline-block'
                                    color='#018AE0'
                                >
                                    <ListIcon color='#D61C62' as={EmailIcon} />
                                    email@gmail.com
                                </ListItem>
                                <ListItem
                                    margin='6px'
                                    display='inline-block'
                                >
                                    <ListIcon color='#D61C62' as={PhoneIcon} />
                                    0123456789
                                </ListItem>
                                <ListItem
                                    margin='6px'
                                >
                                    <ListIcon color='#D61C62' as={FaMapMarker} />
                                    Số 1 Võ Văn Ngân
                                </ListItem>
                            </List>
                        </Container>
                        <Divider margin='8px 0 16px 0' borderTop='1px solid rgba(0,0,0,.2) ' />
                        <Container
                            maxWidth='100%'
                            width='auto'
                            padding='0'
                            margin='48px 0 0 0'
                        >
                            <Map maxH='350px' maxW='100%' />
                        </Container>
                    </Container>
                </Flex>
            </Container>
        </Container>
    );
}

export default ContactHome;