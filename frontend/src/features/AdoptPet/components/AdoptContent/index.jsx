import React from 'react';
import PropTypes from 'prop-types';
import AdoptCart from '../../../../components/AdoptCart';
import { Container, Flex } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/react';

AdoptContent.propTypes = {
    currentItems: PropTypes.array,
    // isLoading: PropTypes.bool,
};

function AdoptContent(props) {
    const { currentItems } = props
    // console.log('isLoading: ', isLoading);
    return (
        <Container
            maxWidth='100%'
            width='auto'
            padding='0 16px'
            margin='48px 0'
        >
            <Flex
                alignItems='center'
                justifyContent='center'
                flexWrap='wrap'
            >
                {currentItems &&
                    currentItems.map((item, index) => (
                        <Container
                            maxWidth='48%'
                            width='auto'
                            margin='8px'
                            padding='0'
                            h='369px'
                            flex='0 0 48%'
                            overflow='hidden'
                            key={index}
                        >
                            <AdoptCart
                                srcImage={item.imagePetEntityList[0].url}
                                breed={item.breed}
                                vaccin={item.vaccinated}
                                info={item.description}
                                namePet={item.name}
                                gender={item.gender}
                                age={item.age}
                                maxW='100%'
                                idPet={item.id}
                                h='auto'
                            />
                        </Container>
                    ))}
            </Flex>
        </Container>
    );
}

export default AdoptContent;