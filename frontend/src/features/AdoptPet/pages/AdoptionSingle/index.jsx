import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import { Container, Flex, Image, Heading, List, ListItem, Text, Button, Divider } from '@chakra-ui/react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import SliderAdoptSingle from '../../components/SliderAdoptSingle';
import AccordionAdoptSingle from '../../components/AccordionAdoptSingle';
import IMAGES from '../../../../constants/images';
import petAPI from '../../../../api/petApi';
import AdoptCartSingle from '../../components/AdoptCartSingle';
import ModalBox from '../../../../components/ModalBox';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../../../Information/userSlice';
import { useToast } from '@chakra-ui/react'
import billAPI from '../../../../api/billApi';


AdoptionSingle.propTypes = {
    namePet: PropTypes.string,
    age: PropTypes.string,
    breed: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    vaccinated: PropTypes.bool,
};

function AdoptionSingle(props) {

    const { id: idPet } = useParams();
    const [pet, setPet] = useState({});
    const [srcImage, setSrcIamge] = useState();
    const [listPet, setListPet] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [onModal, setOnModal] = useState(false)
    const { userInfo } = useSelector((state) => state.user);
    const { isLoggedIn } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const location = useLocation()

    const toast = useToast()
    const dispatch = useDispatch()
    // console.log('isLoggedIn: ', isLoggedIn);

    const initFetch = useCallback(async () => {
        dispatch(getInfo());
    }, [dispatch]);

    useEffect(() => {
        initFetch();
    }, [initFetch]);
    useEffect(() => {
        const getPet = async () => {
            const response = await petAPI.getPet(idPet);
            const { data } = response.data;
            if (response) {
                setIsLoading(true)
            }
            setPet(data.petInfo);
            setSrcIamge(data.petInfo.imagePetEntityList[0].url)
        }
        const getListPet = async () => {
            const params = {
                page: 0,
                size: 6,
            }
            const response = await petAPI.getAll(params)
            const { data } = response.data
            setListPet(data.pets)
        }
        getPet()
        getListPet()
        window.scrollTo(0, 0)
    }, [idPet])
    const handleAdoptPet = () => {
        setOnModal(true)
        // setCheckOut(true)
    }
    const onSetCloseModal = () => {
        setOnModal(false)
    }
    // console.log('height: ', window.)

    const handleAddBillPet = () => {
        if (isLoggedIn) {
            if (userInfo === undefined || !userInfo.email || !userInfo.firstName || !userInfo.lastName || !userInfo.phone || !userInfo.address) {
                console.log(userInfo === undefined);
                console.log(!userInfo.email);
                console.log(!userInfo.firstName);
                console.log(!userInfo.lastName);
                console.log(!userInfo.phone);
                console.log(!userInfo.address);
                toast({
                    title: 'Adopt Pet',
                    description: `Please, Update full information before adopt pet!`,
                    status: 'warning',
                    duration: '3000',
                    position: 'top',
                    isClosable: true,
                })
            }
            else {
                const url = location.pathname + "/payment"
                navigate(url)
                setOnModal(false)
            }
        }
        else {
            toast({
                title: 'Adopt Pet',
                description: `Please, Login to proceed with the adoption!`,
                status: 'warning',
                duration: '3000',
                position: 'top',
                isClosable: true,
            })
        }
    }
    console.log("userInfo: ", userInfo);
    const arr = [
        {
            head: 'Adoption',
            link: 'adoption'
        },
        {
            head: 'Adoption single page',
            link: ""
        }
    ]
    const arrJson = JSON.stringify(arr)
    return (
        <>
            <Banner arrHeading={arrJson} headingPage={'Adoption single page'} />
            <Container
                maxWidth='100%'
                width='auto'
                margin='0 190px'
                padding='90px 16px'
            >
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    flexWrap='wrap'
                >
                    <Container
                        flex='0 0 75%'
                        maxWidth='75%'
                        width='auto'
                        padding='0 30px 0 15px'
                        margin='0'
                    >
                        <Flex
                            alignItems='center'
                            justifyContent='center'
                            flexWrap='wrap'
                        >
                            <AdoptCartSingle pet={pet} srcImage={srcImage} isLoading={isLoading} />
                            <Container
                                flex='0 0 100%'
                                maxWidth='100%'
                                width='auto'
                                padding='0 15px'
                                margin='0'
                            >
                                <Heading
                                    marginBottom='20px'
                                >
                                    About me
                                </Heading>
                                <Text
                                    color='#6f6f6f'
                                    marginBottom='16px'
                                    fontWeight='400'
                                >
                                    Aliquam erat volutpat In id fermentum augue, ut pellentesque leo.Maecenas at arcu risus.Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id.
                                    In aliquet magna nec lobortis maximus.Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                                </Text>
                                <Text
                                    color='#6f6f6f'
                                    marginBottom='16px'
                                    fontWeight='400'
                                >
                                    Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall Maecenas at arcu risus scelerisque laoree.
                                </Text>
                                <Text
                                    color='#6f6f6f'
                                    marginBottom='16px'
                                    fontWeight='400'
                                >
                                    Elit uasi quidem minus id omnis a nibh fusce mollis imperdie tlorem ipuset phas ellus ac sodales Lorem ipsum dolor Phas ellus ac sodales felis tiam non metus.
                                    lorem ipsum dolor sit amet, consectetur adipisicing elit
                                </Text>
                                <Text
                                    color='#6f6f6f'
                                    marginBottom='16px'
                                    fontWeight='700'
                                >
                                    If you have any doubts or need more information, please {' '}
                                    <Link
                                        to='/contact'
                                        style={{
                                            color: '#018AE0'
                                        }}
                                    >
                                        contact us
                                    </Link>
                                </Text>
                                <Button
                                    textTransform='uppercase'
                                    color='#fff'
                                    fontWeight='700'
                                    padding='10px 50px'
                                    backgroundColor='#D61C62'
                                    borderRadius='24px'
                                    boxShadow='none !important'
                                    _hover={{
                                        backgroundColor: '#018AE0'
                                    }}
                                    _active={{
                                        backgroundColor: '#D61C62'
                                    }}
                                    onClick={handleAdoptPet}
                                >
                                    Adopt me
                                </Button>
                                <ModalBox
                                    isOpenModal={onModal}
                                    onSetCloseModal={onSetCloseModal}
                                    buttonActionContent='ADOPT PET'
                                    modalContent={`Are you sure to adopt ${pet.name} with price ${pet.price}$`}
                                    modalTitle='Confirm Adoption Pet'
                                    onActionClick={handleAddBillPet}
                                />
                            </Container>
                            <Container
                                flex='0 0 100%'
                                maxWidth='100%'
                                width='auto'
                                padding='0 15px'
                                margin='60px 0 0 0'
                            >
                                <Heading
                                    fontWeight='500'
                                    fontSize='32px'
                                >
                                    My photo gallery
                                </Heading>
                                <Divider
                                    width='60px'
                                    border='1px solid #cecece !important'
                                    margin='20px 0'
                                />

                                <SliderAdoptSingle />
                            </Container>
                            <Container
                                flex='0 0 100%'
                                maxWidth='100%'
                                width='auto'
                                padding='0 15px'
                                margin='40px 0 0 0'
                            >
                                <Heading
                                    fontWeight='500'
                                    fontSize='32px'
                                >
                                    Frequently Asked questions
                                </Heading>
                                <Divider
                                    width='60px'
                                    border='1px solid #cecece !important'
                                    margin='20px 0'
                                />
                                <AccordionAdoptSingle padd='20px 20px' />
                                <Flex
                                    alignItems='center'
                                    justifyContent='center'
                                    marginTop='40px'
                                >
                                    <Button
                                        textTransform='uppercase'
                                        color='#fff'
                                        fontWeight='700'
                                        padding='10px 50px'
                                        backgroundColor='#D61C62'
                                        borderRadius='24px'
                                        boxShadow='none !important'
                                        margin='8px'
                                        _hover={{
                                            backgroundColor: '#018AE0'
                                        }}
                                        _active={{
                                            backgroundColor: '#D61C62'
                                        }}
                                        onClick={handleAdoptPet}
                                    >
                                        Adopt me
                                    </Button>
                                    <Link
                                        to='/adoption'
                                        style={{
                                            textTransform: 'uppercase',
                                            backgroundColor: '#018AE0',
                                            padding: '10px 50px',
                                            margin: '8px',
                                            borderRadius: '24px',
                                            color: '#fff',
                                            fontWeight: '700',
                                        }}
                                    >
                                        go back to adoption
                                    </Link>
                                </Flex>
                            </Container>
                        </Flex>
                    </Container>
                    <Container
                        flex='0 0 25%'
                        maxWidth='25%'
                        width='auto'
                        padding='20px'
                        margin='0'
                        backgroundColor='#f4f4f4!important'
                        borderRadius=' 8px'
                        backgroundImage={IMAGES.FooterBG}
                        backgroundRepeat='no-repeat'
                        backgroundPosition='center bottom'
                    >
                        <Container
                            maxWidth='100%'
                            width='auto'
                            padding='0'
                            margin='0'
                            textAlign='center'
                        >
                            <Heading
                                fontSize='24px'
                                fontWeight='700'
                                marginBottom='20px'
                                _after={{
                                    content: '""',
                                    border: '1px solid #cecece',
                                    display: 'block',
                                    width: '80px',
                                    margin: '10px auto'
                                }}
                            >
                                Information
                            </Heading>
                            <Text
                                textAlign='left'
                                color='#6f6f6f'
                                marginBottom='20px'
                            >
                                In id fermentum augue, ut pellen tesque Maecenas at arcu risus.Donec com modo sodales ex.
                            </Text>
                            <Heading
                                fontSize='24px'
                                fontWeight='700'
                                marginTop='30px'
                                marginBottom='20px'
                                _after={{
                                    content: '""',
                                    border: '1px solid #cecece',
                                    display: 'block',
                                    width: '80px',
                                    margin: '10px auto'
                                }}
                            >
                                Adopt a pet
                            </Heading>
                            <List
                                padding='0 10px'
                            >
                                {listPet.map((pet, index) => {
                                    return (
                                        <ListItem
                                            backgroundColor='#fff'
                                            borderRadius='8px'
                                            margin='10px 0'
                                            key={index}
                                        >
                                            <Link
                                                to={`/adoption/${pet.id}`}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Image
                                                    borderRadius='8px'
                                                    maxWidth='60px'
                                                    src={pet.imagePetEntityList[0].url}
                                                />
                                                <Heading
                                                    marginLeft='20px'
                                                    fontSize='24px'
                                                    color='#018AE0'
                                                >
                                                    {pet.name}
                                                </Heading>
                                            </Link>
                                        </ListItem>
                                    )
                                })}


                            </List>
                            <Flex
                                alignItems='center'
                                justifyContent='center'
                                backgroundColor='#018AE0'
                                borderRadius='24px'
                                margin='20px 0 60px 0'
                                cursor='pointer'
                                _hover={{
                                    backgroundColor: '#D61C62'
                                }}
                            >
                                <Link
                                    to='/adoption'
                                    style={{
                                        display: 'block',
                                        textTransform: 'uppercase',
                                        color: '#fff',
                                        padding: '10px 50px',
                                        fontWeight: '700',
                                    }}
                                >
                                    see all
                                </Link>
                            </Flex>
                        </Container>
                    </Container>
                </Flex>
            </Container >
        </>
    );
}

export default AdoptionSingle;