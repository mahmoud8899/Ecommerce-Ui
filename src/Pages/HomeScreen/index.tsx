
import { Container, Row, Col, Image, } from 'react-bootstrap'
import TheButton from '../../Components/Button'
import { UrlImage } from '../../Utils/Url'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import TheInput from '../../Components/TheInput';
import NewProducts from './NewProducts';
import Discount from './Discount';
import TheMenu from './Menu';
import Delivery from './Delivery';
import ShareFood from './ShareFood';



const HomeScreen = () => {






    // options
    // [1] new products...

    return (
        <Container fluid >
            <div className='margin-top' />
            <Discount />
    
            <div className='margin-top' />

            <NewProducts />
            <div className='margin-top' />


            <TheMenu />
   

            <div className='margin-top' />

            <Delivery />
            <div className='margin-top' />

            <ShareFood />

        </Container>
    )
}

export default HomeScreen