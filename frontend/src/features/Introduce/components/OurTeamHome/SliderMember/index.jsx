import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import BoxMember from '../BoxMember';

SliderMember.propTypes = {
    members: PropTypes.number,
};

function SliderMember(props) {
    const { members } = props
    console.log(members);
    const style = {
        // textAlign: 'center',
        // padding: '50px 0 0 0',
        // fontSize: '30px',
        marginLeft: '40px'
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
                    slidesToShow: members ? members : 3,
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
                <BoxMember maxW='286px' maxH='500px' name='Phan Thanh Tài' description='Không' />
            </div>
            <div style={style}>
                <BoxMember maxW='286px' maxH='500px' name='Bùi Văn Tính' description='Không' />
            </div>
            <div style={style}>
                <BoxMember maxW='286px' maxH='500px' name='Dương Đức Thắng' description='Không' />
            </div>
            <div style={style}>
                <BoxMember maxW='286px' maxH='500px' name='Hoàng Minh Thắng' description='Không' />
            </div>
            <div style={style}>
                <BoxMember maxW='286px' maxH='500px' name='Nguyễn Hiếu Đan' description='Không' />
            </div>
        </Slide>
    );
}

export default SliderMember;