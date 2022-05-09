import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Heading, Text, Divider, List, ListIcon } from '@chakra-ui/react';
import IMAGES from '../../../../../constants/images';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import './BoxMember.scss'

BoxMember.propTypes = {
    maxW: PropTypes.string,
    maxH: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    fontSizeH: PropTypes.string,
};

function BoxMember(props) {
    const { maxW, maxH, name, description } = props
    return (
        <Container
            maxWidth={maxW}
            width='auto'
            maxHeight={maxH}
            height='auto'
            margin='0 30px 0 0'
            padding='0'
        >
            <Container
                maxWidth='100%'
                width='auto'
                margin='0'
                padding='0 10px'
                className={'box'}
            >
                <Container
                    maxWidth='100%'
                    width='auto'
                    margin='0'
                    padding='0'
                    position='relative'
                    overflow='hidden'
                    _before={{
                        content: '""',
                        position: 'absolute',
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        zIndex: '1',
                        opacity: '0',
                    }}
                    className={'box__image'}
                >
                    <Image
                        overflow='hidden'
                        src={IMAGES.Team1}
                        backgroundPosition='center center'
                    />
                    <List
                        color='#fff'
                        position='absolute'
                        bottom='5%'
                        textAlign='center'
                        width='100%'
                        opacity='0'
                        zIndex='2'
                        className='box__media'
                    >
                        <ListIcon fontSize='20px' marginX='6px' as={FaFacebookSquare} />
                        <ListIcon fontSize='20px' marginX='6px' as={FaTwitter} />
                        <ListIcon fontSize='20px' marginX='6px' as={FaLinkedin} />
                    </List>
                </Container>
                <Link
                    to='/ourteam-single'
                    style={{
                        display: 'block',
                        marginTop: '30px'
                    }}
                >
                    <Heading
                        fontSize='26px'
                        fontWeight='600'
                        lineHeight='26px'
                    >
                        {name}
                    </Heading>
                </Link>
                <Text
                    fontSize='16px'
                    fontWeight='700'
                    color='#018AE0'
                >
                    {description}
                </Text>
                <Divider
                    width='60px'
                    border='1.2px solid #c6c6c6 !important'
                    margin='10px 0'
                />
                <Text
                    marginTop='20px'
                    color='#6f6f6f'
                    fontWeight='500'
                    fontSize='14px'
                >
                    Id fermentum augue, ut pellen tesque leo nas. Maecenas at arcu risus Donec com modo.
                </Text>
            </Container>
        </Container>
    );
}

export default BoxMember;