import React from 'react';
import PropTypes from 'prop-types';
import { Box, Icon, Text, Heading, Divider, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai'
import './HeaderAdmin.scss'
import { BsPlus } from 'react-icons/bs'

HeaderAdmin.propTypes = {
    heading: PropTypes.string,
    isButton: PropTypes.bool,
    btnName: PropTypes.string,
};

function HeaderAdmin(props) {
    const { heading, isButton, btnName, handleOnModal } = props
    return (
        <Box>
            <Link
                className='link'
                to='/admin'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '12px',
                    color: '#6f6f6f',
                    maxWidth: 'max-content'
                }}
            >
                <Icon as={AiOutlineLeft} />
                <Text>Home</Text>
            </Link>
            <Flex
                alignItems='center'
                justifyContent='space-between'
            >
                <Heading
                    fontSize='24px'
                    fontWeight='500'
                    margin='18px 0'
                >
                    {heading}
                </Heading>
                <Button
                    display={isButton ? 'flex' : 'none'}
                    backgroundColor='#1446A0'
                    alignItems='center'
                    boxShadow='none !important'
                    color='#fff'
                    _hover={{
                        backgroundColor: '#018AE0'
                    }}
                    _active={{
                        backgroundColor: '#1446A0'
                    }}
                    onClick={handleOnModal}
                >
                    <Icon fontSize='28px' as={BsPlus} />
                    <Text>{btnName}</Text>
                </Button>
            </Flex>
            <Divider
                marginBottom='20px'
                border='2px solid #f3f3f3'
            />
        </Box>
    );
}

export default HeaderAdmin;