import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import IMAGES from '../../../../constants/images';
import './SliderAboutHome.scss'
import ServiceBox from '../ServiceBox';
import BoxEvent from './BoxEvent';

SliderAboutHome.propTypes = {
    h: PropTypes.string,
    w: PropTypes.string,

};

function SliderAboutHome(props) {
    const style = {
        textAlign: 'center',
        padding: '50px 0 0 0',
        fontSize: '30px'
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Slide {...properties}>
                <div style={style}>
                    <BoxEvent header='Bronx Adoption Fair 1' date='12th March at 3pm' address='Bronx Park' />

                </div>
                <div style={style}>
                    <BoxEvent header='Bronx Adoption Fair 2' date='12th March at 3pm' address='Bronx Park' />

                </div>
            </Slide>
        </div>
    );
}

export default SliderAboutHome;