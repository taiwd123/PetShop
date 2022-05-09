import React from 'react';
import PropTypes from 'prop-types';
import { Container, Flex, Heading, Text, List, ListItem, Input, Textarea, Button } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { FaMapMarker } from "react-icons/fa";
import Map from '../../../../components/Map';

ContentContact.propTypes = {

};

function ContentContact(props) {
    return (
        <Container
            maxWidth='100%'
            padding='90px 0 0 0'
            width='auto'
        >
            <Container
                width='auto'
                maxWidth='100%'
                margin='0 190px'
                padding='0 16px'
            >
                <Flex
                    alignItems='center'
                >
                    <Container
                        width='100%'
                        margin='0'
                        padding='0 16px'
                    >
                        <Heading
                            fontSize='44px'
                            fontWeight='500'
                            marginBottom='8px'
                        >
                            Get in Touch
                        </Heading>
                        <Text
                            color='#8a8a8a'
                            fontWeight='400'
                            fontSize='20px'
                        >
                            We offer quick & easy services for cats and dogs,fermentum purus. Quisque vitae hendrerit elit.
                        </Text>
                        <Text
                            margin='8px 0 16px 0'
                            fontSize='16px'
                            lineHeight='24px'
                            fontWeight='400'
                            color='#6f6f6f'
                        >
                            Etiam rhoncus leo a dolor placerat,
                            nec elem entum ipsum conval Qui quaerat fugit quas veniam perferendis repudiandae sequi,
                            dolore quisquam illum.
                        </Text>
                        <List
                            margin='16px 0'
                        >
                            <ListItem display='flex' lineHeight='32px' alignItems='center' color='#D61C62'>
                                <EmailIcon />
                                <Text marginLeft='8px' color='#6f6f6f'>email@gmail.com </Text>
                            </ListItem>
                            <ListItem display='flex' lineHeight='32px' alignItems='center' color='#D61C62'>
                                <PhoneIcon />
                                <Text marginLeft='8px' color='#6f6f6f'>0123456789 </Text>
                            </ListItem>
                            <ListItem display='flex' lineHeight='32px' alignItems='center' color='#D61C62'>
                                <FaMapMarker />
                                <Text marginLeft='8px' color='#6f6f6f'>Số 1 Võ Văn Ngân </Text>
                            </ListItem>
                        </List>
                    </Container>
                    <Container
                        margin='0 0 0 96px'
                        padding='0 16px'
                    >
                        <Heading
                            fontSize='44px'
                            fontWeight='500'
                            marginBottom='20px'
                        >
                            Send us a message
                        </Heading>
                        <Container
                            margin='0'
                            padding='0'
                        >
                            <Container
                                margin='0'
                                padding='0'
                            >
                                <Flex>
                                    <Container
                                        padding='0 4px'
                                    >
                                        <Text
                                            margin='8px 0'
                                            color='#6f6f6f'
                                        >
                                            Name*
                                        </Text>
                                        <Input
                                            border='2px solid rgb(228, 71, 71) !important'
                                        />
                                    </Container>
                                    <Container
                                        padding='0 4px'
                                    >
                                        <Text
                                            margin='8px 0'
                                            color='#6f6f6f'
                                        >
                                            Email*
                                        </Text>
                                        <Input
                                            border='2px solid rgb(228, 71, 71) !important'
                                            type='email'
                                        />
                                    </Container>
                                </Flex>
                                <Container
                                    padding='0 4px'
                                >
                                    <Text
                                        margin='8px 0'
                                        color='#6f6f6f'
                                    >
                                        Subject*
                                    </Text>
                                    <Input
                                        border='2px solid rgb(228, 71, 71) !important'
                                        type='email'
                                    />
                                </Container>
                                <Container
                                    padding='0 4px'
                                >
                                    <Text
                                        margin='8px 0'
                                        color='#6f6f6f'
                                    >
                                        Message*
                                    </Text>
                                    <Textarea
                                        border='2px solid rgb(228, 71, 71) !important'
                                        type='email'
                                        height='102px'
                                    />
                                </Container>
                                <Button
                                    margin='16px 0 0 0'
                                    borderRadius='24px'
                                    width='226px'
                                    backgroundColor='#018AE0'
                                    color='#fff'
                                    fontWeight='700'
                                    fontSize='16px'
                                    height='44px'
                                    _hover={{ backgroundColor: '#1446A0' }}
                                >
                                    SEND MESSAGE
                                </Button>
                            </Container>
                        </Container>
                    </Container>
                </Flex>
            </Container>
            <Container
                margin='48px 0 0 0'
                padding='0'
                maxWidth='100%'
                width='auto'
            >
                <Map maxH='350px' />
            </Container>
        </Container>
    );
}

export default ContentContact;