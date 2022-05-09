import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Flex, Heading, Text, List, ListIcon, ListItem, Button } from '@chakra-ui/react';

FiltersPet.propTypes = {
    fliterAll: PropTypes.bool,
    fliterDog: PropTypes.bool,
    fliterCat: PropTypes.bool,
    handleFilterAll: PropTypes.func,
    handleFilterDog: PropTypes.func,
    handleFilterCat: PropTypes.func,
};

function FiltersPet(props) {
    const { fliterAll, fliterDog, fliterCat, handleFilterAll, handleFilterDog, handleFilterCat } = props
    return (
        <Flex
            alignItems='center'
            justifyContent='center'
            marginTop='48px'
        >
            <Button
                fontSize='22px'
                fontWeight='700'
                color='#fff'
                backgroundColor={fliterAll ? '#018AE0' : '#1446A0'}
                boxShadow='none !important'
                padding='30px 44px'
                alignItems='center'
                borderRadius='40px'
                margin='0 8px'
                onClick={handleFilterAll}
                _hover={{
                    backgroundColor: fliterAll === true ? '' : '#018AE0'
                }}
                _active={{
                    backgroundColor: '#1446A0'
                }}
            >
                All
            </Button>
            <Button
                fontSize='22px'
                fontWeight='700'
                color='#fff'
                backgroundColor={fliterDog ? '#018AE0' : '#1446A0'}
                boxShadow='none !important'
                padding='30px 44px'
                alignItems='center'
                borderRadius='40px'
                margin='0 8px'
                onClick={handleFilterDog}
                _hover={{
                    backgroundColor: fliterDog === true ? '' : '#018AE0'
                }}
                _active={{
                    backgroundColor: '#1446A0'
                }}
            >
                Dogs Only
            </Button>
            <Button
                fontSize='22px'
                fontWeight='700'
                color='#fff'
                backgroundColor={fliterCat ? '#018AE0' : '#1446A0'}
                boxShadow='none !important'
                padding='30px 44px'
                alignItems='center'
                borderRadius='40px'
                margin='0 8px'
                onClick={handleFilterCat}
                _hover={{
                    backgroundColor: fliterCat === true ? '' : '#018AE0'
                }}
                _active={{
                    backgroundColor: '#1446A0'
                }}
            >
                Cats Only
            </Button>
        </Flex>
    );
}

export default FiltersPet;