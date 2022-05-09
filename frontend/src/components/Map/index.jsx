import React from 'react';
import PropTypes from 'prop-types';
import { AspectRatio } from '@chakra-ui/react';

Map.propTypes = {
   maxW: PropTypes.string,
   maxH: PropTypes.string,
};

Map.DefaultProp = {
   maxW: '500px',
   maxH: '470px',
};

function Map(props) {
   const { maxW, maxH } = props;

   return (
      <AspectRatio
         maxW={maxW}
         maxH={maxH}
         border='1px'
         ratio={16 / 9}
      >
         <iframe
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4797039824516!2d106.77141781411703!3d10.851072060780224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752774d7e357c3%3A0x7cc744cb226ad64!2zc-G7kSAxIMSQLiBWw7UgVsSDbiBOZ8OibiwgTGluaCBDaGnhu4N1LCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1634398581742!5m2!1svi!2s'
            alt='demo'
         />
      </AspectRatio>
   );
}

export default Map;