import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import IMAGES from '../../../../constants/images';
import { Image } from '@chakra-ui/react'
import './SliderBoxService.scss'
import ServiceBox from '../ServiceBox';

SliderBoxService.propTypes = {

};

function SliderBoxService(props) {
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
                    slidesToShow: 3,
                    slidesToScroll: 3
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
        <div>
            <div>
                <Slide {...properties}>
                    <div style={style}>
                        <ServiceBox
                            srcImage={IMAGES.SideBar}
                            title='Veterinarian 1'
                            description='Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.'
                        />
                    </div>
                    <div style={style}>
                        <ServiceBox
                            srcImage={IMAGES.SideBar}
                            title='Veterinarian 2'
                            description='Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.'
                        />
                    </div>
                    <div style={style}>
                        <ServiceBox
                            srcImage={IMAGES.SideBar}
                            title='Veterinarian 3'
                            description='Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.'
                        />
                    </div>
                    <div style={style}>
                        <ServiceBox
                            srcImage={IMAGES.SideBar}
                            title='Veterinarian 4'
                            description='Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.'
                        />
                    </div>
                    <div style={style}>
                        <ServiceBox
                            srcImage={IMAGES.SideBar}
                            title='Veterinarian 5'
                            description='Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.'
                        />
                    </div>
                    <div style={style}>
                        <ServiceBox
                            srcImage={IMAGES.SideBar}
                            title='Veterinarian 6'
                            description='Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.'
                        />
                    </div>
                    <div style={style}>
                        <ServiceBox
                            srcImage={IMAGES.SideBar}
                            title='Veterinarian 7'
                            description='Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.'
                        />
                    </div>
                    <div style={style}>
                        <ServiceBox
                            srcImage={IMAGES.SideBar}
                            title='Veterinarian 8'
                            description='Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.'
                        />
                    </div>
                </Slide>
            </div>
        </div>
    );
}

export default SliderBoxService;