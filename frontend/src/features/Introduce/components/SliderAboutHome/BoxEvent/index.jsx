import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Heading, Icon, ListItem, List, Text, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import IMAGES from '../../../../../constants/images';
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import './BoxEvent.scss'

BoxEvent.propTypes = {
    header: PropTypes.string,
    date: PropTypes.string,
    address: PropTypes.string,
};

function BoxEvent(props) {
    const { header, date, address } = props
    return (
        <Container
            maxWidth='100%'
            width='258px'
            margin='0 30px 0 0'
            padding='0'
            position='relative'
        >
            <Container
                maxWidth='100%'
                width='auto'
                margin='0'
                padding='0'
                backgroundColor='#f4f4f4'
                className={'box-event'}
            >
                <Container
                    maxWidth='100%'
                    width='auto'
                    margin='0'
                    padding='0'
                    overflow='hidden'
                    borderTopRadius='4px'
                >
                    <Link
                        to='/events-single'
                    >
                        <Image
                            src={IMAGES.AboutEvent1}
                            transform='scale(1)'
                            transition='transform 0.4s linear'
                            className={'box-event__image'}
                        />
                    </Link>
                </Container>
                <Container
                    maxWidth='100%'
                    width='auto'
                    margin='0'
                    padding='20px'
                    textAlign='center'
                    borderBottomRadius='4px'
                >
                    <Link
                        to='/events-single'
                    >
                        <Heading
                            fontSize='20px'
                            fontWeight='500'
                            marginBottom='12px'
                        >
                            {header}
                        </Heading>
                    </Link>
                    <List>
                        <ListItem
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            fontSize='16px'
                        >
                            <Icon
                                as={FaCalendarAlt}
                                color='#D61C62'
                                marginRight='8px'
                            />
                            <Text
                                color='#6f6f6f'
                            >
                                {date}
                            </Text>
                        </ListItem>
                        <ListItem
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            fontSize='16px'
                        >
                            <Icon
                                as={FaMapMarkerAlt}
                                color='#D61C62'
                                marginRight='8px'
                            />
                            <Text
                                color='#6f6f6f'
                            >
                                {address}
                            </Text>
                        </ListItem>
                    </List>
                    <Flex
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Link
                            to='/aboutus'
                            style={{
                                color: '#fff',
                                padding: '8px 20px',
                                backgroundColor: '#018AE0',
                                fontSize: '16px',
                                fontWeight: '700',
                                borderRadius: '24px',
                                marginTop: '16px',
                                display: 'block',
                                width: 'auto',
                                textAlign: 'center'
                            }}
                        >
                            MORE INFO
                        </Link>
                    </Flex>
                </Container>
            </Container>
        </Container>
    );
}

export default BoxEvent;