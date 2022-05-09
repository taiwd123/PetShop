import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Text, Heading, Icon, Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaPaw } from "react-icons/fa";
import IMAGES from '../../../../constants/images';
import AccordionAbout from '../Accordion';
import Slider from '../../../../components/Slider';
import SliderAboutHome from '../SliderAboutHome';


AboutHome.propTypes = {

};

function AboutHome(props) {
    const [tabOne, setTabOne] = useState(true);
    const [tabTwo, setTabTwo] = useState(false);
    const [tabThree, setTabThree] = useState(false);

    const handleTabOne = () => {
        if (tabOne === false) {
            setTabOne(true)
            setTabTwo(false)
            setTabThree(false)
        }
        console.log(tabOne);
    }

    const handleTabTwo = () => {
        if (tabTwo === false) {
            setTabTwo(true)
            setTabOne(false)
            setTabThree(false)
        }
    }

    const handleTabThree = () => {
        if (tabThree === false) {
            setTabThree(true)
            setTabTwo(false)
            setTabOne(false)
        }
    }

    return (
        <Container
            backgroundImage={IMAGES.AboutHomeBG}
            backgroundSize='cover'
            backgroundPosition='center bottom'
            backgroundRepeat='no-repeat'
            maxWidth='100%'
            width='auto'
            margin='0'
            padding='90px 0'
            // background='#fff'
            boxShadow='inset 0 0 0 1000px rgb(255 255 255 / 42%)'

        >
            <Container
                width='auto'
                maxWidth='100%'
                paddingRight='16px'
                paddingLeft='16px'
                marginRight='190px'
                marginLeft='190px'
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
                        GET TO KNOW US
                    </Text>
                    <Heading
                        fontSize='45px'
                        fontWeight='700'
                    >
                        ABOUT US
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
                <Flex
                    alignItems='center'
                    justifyContent='center'
                >
                    <Tabs
                        flex='0 0 1'
                        width='100%'
                        borderBottom='none'
                    >
                        <TabList
                            borderBottom='none'
                        >
                            <Tab
                                width='226px'
                                height='55px'
                                marginRight='20px'
                                backgroundColor='#1446A0 !important'
                                color='#fff !important'
                                fontSize='16px'
                                boxShadow='none !important'
                                fontWeight='700'
                                borderTopRadius='4px'
                                onClick={handleTabOne}
                                background={tabOne === true ? '#D61C62 !important' : '#1446A0 !important'}
                                borderBottom='none'
                            >
                                OUR MISSION
                            </Tab>
                            <Tab
                                width='226px'
                                height='55px'
                                marginRight='20px'
                                backgroundColor='#1446A0 !important'
                                color='#fff  !important'
                                fontSize='16px'
                                boxShadow='none !important'
                                fontWeight='700'
                                borderTopRadius='4px'
                                onClick={handleTabTwo}
                                background={tabTwo === true ? '#D61C62 !important' : '#1446A0 !important'}
                                borderBottom='none'
                            >
                                OUR EVENTS
                            </Tab>
                            <Tab
                                width='226px'
                                height='55px'
                                marginRight='20px'
                                backgroundColor='#1446A0 !important'
                                color='#fff  !important'
                                fontSize='16px'
                                boxShadow='none !important'
                                fontWeight='700'
                                borderTopRadius='4px'
                                onClick={handleTabThree}
                                background={tabThree === true ? '#D61C62 !important' : '#1446A0 !important'}
                                borderBottom='none'
                            >
                                TESTIMONIALS
                            </Tab>
                        </TabList>

                        <TabPanels
                            padding='90px 50px'
                            boxShadow='1px 2px 20px rgb(105 105 105 / 35%)'
                            backgroundColor='#fff'
                        // height='800px'
                        >
                            <TabPanel>
                                <Container
                                    margin='0'
                                    padding='0'
                                    maxWidth='100%'
                                    width='auto'
                                >
                                    <Flex
                                        alignItems='start'
                                        justifyContent='center'
                                    >
                                        <Container
                                            flex='0 0 41.67%'
                                            width='41.67%'
                                            maxWidth='41.67%'
                                            margin='0'
                                            padding='0 16px'
                                            transform='translate(0) scale(1)'
                                            position='relative'
                                        >
                                            <Container
                                                overflow='hidden'
                                                maxWidth='100%'
                                                width='auto'
                                                margin='0'
                                                padding='0'

                                            >
                                                <Image
                                                    src={IMAGES.AboutTab1}
                                                    transform='rotate(-3deg)'
                                                    border='15px solid #cecece'
                                                    position='absolute'
                                                    left='-100px'
                                                    verticalAlign='middle'
                                                    height='524px'
                                                    width='458px'
                                                    _hover={{
                                                        transform: 'scale(1.1)',
                                                        transition: 'all 0.2s ease-in-out'
                                                    }}
                                                />
                                            </Container>
                                        </Container>
                                        <Container
                                            flex='0 0 58.33%'
                                            width='58.33%'
                                            maxWidth='58.33%'
                                            margin='0'
                                            padding='0 16px'
                                        >
                                            <Heading
                                                fontSize='38px'
                                                lineHeight='40px'
                                                fontWeight='700'
                                                marginBottom='20px'
                                                _after={{
                                                    content: '""',
                                                    display: 'block',
                                                    borderBottom: '2px solid #cecece !important',
                                                    width: '60px',
                                                    margin: '10px 0'
                                                }}
                                            >
                                                Your pets deserve the best
                                            </Heading>
                                            <Text
                                                fontWeight='400'
                                                fontSize='16px'
                                                color='#6f6f6f'
                                            >
                                                Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id.
                                                In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                                            </Text>
                                            <AccordionAbout padd='10px 10px' />
                                            <Link
                                                to='/aboutus'
                                                style={{
                                                    color: '#fff',
                                                    padding: '10px 50px',
                                                    backgroundColor: '#018AE0',
                                                    fontSize: '18px',
                                                    fontWeight: '600',
                                                    borderRadius: '24px',
                                                    marginTop: '16px',
                                                    display: 'block',
                                                    width: '280px',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                MORE ABOUT US
                                            </Link>
                                        </Container>
                                    </Flex>
                                </Container>
                            </TabPanel>
                            <TabPanel>
                                <Container
                                    margin='0'
                                    padding='0'
                                    maxWidth='100%'
                                    width='auto'
                                >
                                    <Flex
                                        alignItems='start'
                                        justifyContent='center'
                                    >
                                        <Container
                                            flex='0 0 58.33%'
                                            width='58.33%'
                                            maxWidth='58.33%'
                                            margin='0'
                                            padding='0 16px'
                                        >
                                            <Heading
                                                fontSize='38px'
                                                lineHeight='40px'
                                                fontWeight='700'
                                                marginBottom='20px'
                                                _after={{
                                                    content: '""',
                                                    display: 'block',
                                                    borderBottom: '2px solid #cecece !important',
                                                    width: '60px',
                                                    margin: '10px 0'
                                                }}
                                            >
                                                Adoption Events
                                            </Heading>
                                            <Text
                                                fontWeight='400'
                                                fontSize='16px'
                                                color='#6f6f6f'
                                            >
                                                Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id.
                                                In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                                            </Text>
                                            <Link
                                                to='/events'
                                                style={{
                                                    color: '#fff',
                                                    padding: '10px 50px',
                                                    backgroundColor: '#D61C62',
                                                    fontSize: '18px',
                                                    fontWeight: '600',
                                                    borderRadius: '24px',
                                                    marginTop: '20px',
                                                    display: 'block',
                                                    width: '280px',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                SEE ALL EVENTS
                                            </Link>
                                            <Heading
                                                fontSize='38px'
                                                lineHeight='40px'
                                                fontWeight='700'
                                                margin='48px 0 0 0'
                                            >
                                                Upcoming events:
                                            </Heading>
                                            <SliderAboutHome />
                                        </Container>
                                        <Container
                                            flex='0 0 41.67%'
                                            width='41.67%'
                                            maxWidth='41.67%'
                                            margin='0'
                                            padding='0 16px'
                                            transform='translate(0) scale(1)'
                                            position='relative'
                                        >
                                            <Container
                                                overflow='hidden'
                                                maxWidth='100%'
                                                width='auto'
                                                margin='0'
                                                padding='0'

                                            >
                                                <Image
                                                    src={IMAGES.AboutTab2}
                                                    transform='rotate(-3deg)'
                                                    border='15px solid #cecece'
                                                    position='absolute'
                                                    left='100px'
                                                    verticalAlign='middle'
                                                    height='524px'
                                                    width='458px'
                                                    _hover={{
                                                        transform: 'scale(1.1)',
                                                        transition: 'all 0.2s ease-in-out'
                                                    }}
                                                />
                                            </Container>
                                        </Container>
                                    </Flex>
                                </Container>
                            </TabPanel>
                            <TabPanel>
                                <Container
                                    margin='0'
                                    padding='0'
                                    maxWidth='100%'
                                    width='auto'
                                >
                                    <Flex
                                        alignItems='start'
                                        justifyContent='center'
                                    >
                                        <Container
                                            flex='0 0 58.33%'
                                            width='58.33%'
                                            maxWidth='58.33%'
                                            margin='0'
                                            padding='0 16px'
                                        >
                                            <Heading
                                                fontSize='38px'
                                                lineHeight='40px'
                                                fontWeight='700'
                                                marginBottom='20px'
                                                _after={{
                                                    content: '""',
                                                    display: 'block',
                                                    borderBottom: '2px solid #cecece !important',
                                                    width: '60px',
                                                    margin: '10px 0'
                                                }}
                                            >
                                                Testimonials
                                            </Heading>
                                            <Text
                                                fontWeight='400'
                                                fontSize='16px'
                                                color='#6f6f6f'
                                            >
                                                Aliquam erat volutpat In id fermentum augue, ut pellentesque leo.
                                                Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id.
                                                In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                                            </Text>
                                            <Container
                                                maxWidth='100%'
                                                width='auto'
                                                margin='48px 0 0 0'
                                                padding='0'
                                            >
                                                <Slider h='450px' w='576px' />
                                            </Container>
                                        </Container>
                                        <Container
                                            flex='0 0 41.67%'
                                            width='41.67%'
                                            maxWidth='41.67%'
                                            margin='0'
                                            padding='0 16px'
                                            transform='translate(0) scale(1)'
                                            position='relative'
                                        >
                                            <Container
                                                overflow='hidden'
                                                maxWidth='100%'
                                                width='auto'
                                                margin='0'
                                                padding='0'

                                            >
                                                <Image
                                                    src={IMAGES.AboutTab3}
                                                    transform='rotate(-3deg)'
                                                    border='15px solid #cecece'
                                                    position='absolute'
                                                    left='100px'
                                                    verticalAlign='middle'
                                                    height='524px'
                                                    width='458px'
                                                    _hover={{
                                                        transform: 'scale(1.1)',
                                                        transition: 'all 0.2s ease-in-out'
                                                    }}
                                                />
                                            </Container>
                                        </Container>
                                    </Flex>
                                </Container>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Flex>
            </Container>
        </Container >
    );
}

export default AboutHome;