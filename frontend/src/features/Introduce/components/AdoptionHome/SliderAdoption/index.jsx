import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Image } from '@chakra-ui/react'
import AdoptCart from '../../../../../components/AdoptCart';
import petAPI from '../../../../../api/petApi';

SliderAdoption.propTypes = {

};

function SliderAdoption(props) {
    const style = {
        // textAlign: 'center',
        // padding: '50px 0 0 0',
        // fontSize: '30px'
        margin: '0 30px',
        // width: 'auto !important'
    };

    const properties = {
        duration: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        indicators: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    const [listPet, setListPet] = useState([])
    useEffect(() => {
        const getListPet = async () => {
            try {
                const params = {
                    page: 0,
                    size: 10,
                }
                const response = await petAPI.getAll(params)
                // console.log(response.data);
                setListPet(response.data.data.pets)
            } catch (error) {
                console.log();
            }
        }
        getListPet()
    }, [])


    return (
        <Slide {...properties}>
            {listPet.map((pet, index) => {
                return (
                    <div style={style} key={index}>
                        <AdoptCart
                            srcImage={pet.imagePetEntityList[0].url}
                            namePet={pet.name}
                            gender={pet.gender}
                            age={pet.age}
                            breed='Mixed'
                            vaccin={pet.vaccinated}
                            info={pet.description}
                            breed={pet.breed ? pet.breed : 'No Info'}
                            maxW='505px !important'
                            h='396px'
                        />
                    </div>
                )
            })}
        </Slide>
    );
}

export default SliderAdoption;