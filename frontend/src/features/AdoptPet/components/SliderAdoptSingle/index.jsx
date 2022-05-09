import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Image } from '@chakra-ui/react'
import IMAGES from '../../../../constants/images';

SliderAdoptSingle.propTypes = {

};

function SliderAdoptSingle(props) {
    const style = {
        // textAlign: 'center',
        // padding: '50px 0 0 0',
        // fontSize: '30px'
        margin: '20px 0px',
        // width: 'auto !important'
    };

    const properties = {
        duration: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        indicators: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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

    return (
        <Slide {...properties}>
            <div style={style}>
                <Image
                    src='https://www.ingridkuhn.com/themes/unitedpets/img/adoption/adoptiongallery3.jpg'
                    maxHeight='300px'
                    maxWidth='400px'
                    borderRadius='6px'
                />
            </div>
            <div style={style}>
                <Image
                    src='https://www.ingridkuhn.com/themes/unitedpets/img/adoption/adoption1.jpg'
                    maxHeight='300px'
                    maxWidth='400px'
                />
            </div>
            <div style={style}>
                <Image
                    src='https://www.ingridkuhn.com/themes/unitedpets/img/adoption/adoptiongallery1.jpg'
                    maxHeight='300px'
                    maxWidth='400px'
                />
            </div>
            <div style={style}>
                <Image
                    src='https://www.ingridkuhn.com/themes/unitedpets/img/adoption/adoptiongallery2.jpg'
                    maxHeight='300px'
                    maxWidth='400px'
                />
            </div>
        </Slide>
    );
}

export default SliderAdoptSingle;