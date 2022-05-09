import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner'
import PaginateAdopt from '../../components/Paginate';
import { Container, Flex, Heading, Text, List, ListIcon, ListItem, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaCheckSquare } from "react-icons/fa";
import FiltersPet from '../../components/FiltersPet';

AdoptPet.propTypes = {

};

function AdoptPet(props) {
    window.scrollTo(0, 0)

    useEffect(() => {

    })
    const [fliterAll, setFilterAll] = useState(true)
    const [fliterDog, setFilterDog] = useState(false)
    const [fliterCat, setFilterCat] = useState(false)

    const [category, setCategory] = useState('')
    const handleFilterAll = () => {
        if (!fliterAll) {
            setFilterAll(true)
            setFilterCat(false)
            setFilterDog(false)
            setCategory('')
        }
    }
    const handleFilterDog = () => {
        if (!fliterDog) {
            setFilterDog(true)
            setFilterCat(false)
            setFilterAll(false)
            setCategory('dog')
        }
    }
    const handleFilterCat = () => {
        if (!fliterCat) {
            setFilterCat(true)
            setFilterAll(false)
            setFilterDog(false)
            setCategory('cat')
        }
    }
    // console.log('category: ', category);
    return (
        <>
            <Banner headingPage={'Adoption'} arrHeading={JSON.stringify([{ head: 'Adoption', link: 'adoption' }])} />
            <Container
                maxWidth='100%'
                width='auto'
                margin='0 190px'
                padding='90px 16px'
            >
                <Flex
                    alignItems='center'
                    justifyContent='center'
                >
                    <Container
                        maxWidth='100%'
                        width='auto'
                        margin='0'
                        padding='0 16px'
                        flex='0 0 58.33%'
                    >
                        <Heading
                            fontSize='42px'
                            fontWeight='600'
                            marginBottom='8px'
                        >
                            Adopt a Pet
                        </Heading>
                        <Text
                            color='#6f6f6f'
                            margin='24px 0 16px 0'
                        >
                            Elit uasi quidem minus id omnis a nibh fusce mollis imperdie tlorem ipuset phas ellus ac sodales Lorem ipsum dolor Phas ellus ac sodales felis tiam non metus.
                            lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </Text>
                        <Text
                            color='#6f6f6f'
                            fontWeight='700'
                        >
                            If you have any doubts or need more information, please {' '}
                            <Link
                                to='/contact'
                                style={{
                                    color: '#018AE0',
                                }}
                            >
                                contact us
                            </Link>
                        </Text>
                    </Container>
                    <Container
                        maxWidth='100%'
                        width='auto'
                        margin='0'
                        padding='20px'
                        flex='0 0 41.67%'
                        backgroundColor='#f4f4f4'
                        borderRadius='16px'
                    >
                        <Heading
                            fontSize='24px'
                            fontWeight='600'
                            marginBottom='20px'
                        >
                            Ready for adoption
                        </Heading>
                        <List>
                            <ListItem
                                fontWeight='700'
                                color='#6f6f6f'
                                fontSize='15px'
                                marginBottom='10px'
                            >
                                <ListIcon color='#D61C62' as={FaCheckSquare} />
                                All pets are neutered and vaccinated
                            </ListItem>
                            <ListItem
                                fontWeight='700'
                                color='#6f6f6f'
                                fontSize='15px'
                                marginBottom='10px'
                            >
                                <ListIcon color='#D61C62' as={FaCheckSquare} />
                                All pets are examined by a vet and treated as required
                            </ListItem>
                            <ListItem
                                fontWeight='700'
                                color='#6f6f6f'
                            >
                                <ListIcon color='#D61C62' as={FaCheckSquare} />
                                We help to match you with a pet that meet you needs
                            </ListItem>
                        </List>
                    </Container>
                </Flex>
                <FiltersPet
                    fliterAll={fliterAll}
                    fliterCat={fliterCat}
                    fliterDog={fliterDog}
                    handleFilterAll={handleFilterAll}
                    handleFilterDog={handleFilterDog}
                    handleFilterCat={handleFilterCat}
                />
                <PaginateAdopt itemsPerPage={6} category={category} />
            </Container>
        </>
    );
}

export default AdoptPet;