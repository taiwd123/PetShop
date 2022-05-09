import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../../../components/header';
import Banner from '../../../../components/Banner';
import { Outlet } from 'react-router';
import BannerHome from '../../components/Banner';
import IntroHome from '../../components/IntroHome';
import CallWidget from '../../components/CallWidget';
import HomeService from '../../components/HomeService';
import ServiceBox from '../../components/ServiceBox';
import IMAGES from '../../../../constants/images';
import { Flex } from '@chakra-ui/layout';
import SliderBoxService from '../../components/SliderBoxService';
import AboutHome from '../../components/AboutHome';
import AdoptionHome from '../../components/AdoptionHome';
import AdoptCart from '../../../../components/AdoptCart';
import GalleryHome from '../../components/GalleryHome';
import OurTeamHome from '../../components/OurTeamHome';
import ContactHome from '../../components/ContactHome';

HomePage.propTypes = {

};

function HomePage(props) {
    window.scrollTo(0, 0)
    return (
        <>
            <BannerHome />
            <IntroHome />
            <CallWidget />
            <HomeService />
            <AboutHome />
            <AdoptionHome />
            <GalleryHome />
            <OurTeamHome />
            <ContactHome />
        </>
    );
}

export default HomePage;