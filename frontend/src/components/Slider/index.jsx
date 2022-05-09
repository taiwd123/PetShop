import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import IMAGES from '../../constants/images';
import { Image, } from '@chakra-ui/react';
import './Slider.scss'

Slider.propTypes = {
    h: PropTypes.string,
    w: PropTypes.string,
};

function Slider(props) {
    const { h, w } = props
    return (
        <Slide>
            <div className="each-slide"
            >
                <div style={{
                    backgroundColor: '#f4f4f4',
                    height: { h },
                    width: { w },
                    borderRadius: '20px',
                    padding: '20px'
                }}>
                    <div className='slide__content'>
                        <p className='slide__description'>
                            Aliquam erat volutpat In id fermentum augue, ut pellentesque leo.
                            Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hendrerit id.
                            In aliquet magna nec lobortis maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
                        </p>
                    </div>
                    <div className='slide__avatar'>
                        <Image
                            src={IMAGES.Logo}
                            borderRadius='full'
                            boxSize='150px'
                            border='6px solid #018AE0'
                        />
                    </div>
                    <div className='slide__review'>
                        <h5 className='slide__title'>Lucianna Smith</h5>
                        <span>Teacher</span>
                    </div>
                </div>
            </div>
        </Slide>
    );
}

export default Slider;