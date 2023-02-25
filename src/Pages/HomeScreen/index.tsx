
import { Container, Image } from 'react-bootstrap'
import NewProducts from './NewProducts';
import Discount from './Discount';
import TheMenu from './Menu';
import Delivery from './Delivery';
import ShareFood from './ShareFood';
import { UrlImage } from '../../Utils/Url';



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