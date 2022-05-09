import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Image } from '@chakra-ui/react'
import IMAGES from '../../../../../constants/images';

SliderGallery.propTypes = {
    marg: PropTypes.string,
};

function SliderGallery(props) {
    const { marg } = props
    const style = {
        // textAlign: 'center',
        // padding: '50px 0 0 0',
        // fontSize: '30px'
        margin: marg ? marg : '0 30px',
        // width: 'auto !important'
    };

    const properties = {
        duration: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        indicators: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
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
                    src={IMAGES.Gallery1}
                    maxHeight='300px'
                    maxWidth='400px'
                />
            </div>
            <div style={style}>
                <Image
                    src={IMAGES.Gallery2}
                    maxHeight='300px'
                    maxWidth='400px'
                />
            </div>
            <div style={style}>
                <Image
                    src={IMAGES.Gallery3}
                    maxHeight='300px'
                    maxWidth='400px'
                />
            </div>
            <div style={style}>
                <Image
                    src={IMAGES.Gallery4}
                    maxHeight='300px'
                    maxWidth='400px'
                />
            </div>
        </Slide>
    );
}

export default SliderGallery;