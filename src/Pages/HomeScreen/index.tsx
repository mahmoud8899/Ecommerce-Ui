
import { Container, Row, Col, Image, InputGroup, Form, } from 'react-bootstrap'
import TheButton from '../../Components/Button'
import { UrlImage } from '../../Utils/Url'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import MinNav from '../NavBar/Nav';
import Log from '../NavBar/Log';

interface ItemType {
    image: string;
}

const HomeScreen = () => {



    let ShowImage: ItemType[] = [
        { image: UrlImage.Pizza },
        { image: UrlImage.OnePizza },
    ]


    let sdfd = {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    }



    return (
        <Container fluid >
            <div className='margin-top' />

          



            <div className='margin-top' />

            <Row className='justify-content-center padding '>

                <h1 className='text-align margin-tophalf  colorScreen '>Have you tried the pizza?</h1>

                <Col xs={11} sm={12} md={2} lg={2} className='Not- margin-top ' >
                    <div className='Not- margin-top'>

                        <div className='blackBa padding new box-shadow '>
                            <h1 className='whitecolor transform'>
                                new
                            </h1>
                        </div>



                    </div>
                </Col>

                <Col  xs={11} sm={12} md={10} lg={10} >
                    <Row className='justify-content-center '>
                    <Col xs={6} sm={6} md={6} lg={6} className='Not- margin-top '>
                    <Image
                        src={UrlImage.newPizza}
                        className='Image object-fit'

                    />
                    <div className='flex flexcolumn '>
                        <h1 className='text-align margin-tophalfHave'>Bussola</h1>
                        <span className='fontSizeDes font-family text-align'>105,00 kr</span>
                    </div>

                </Col>
                <Col xs={6} sm={6} md={6} lg={6} className='Not- margin-top '>
                    <Image
                        src={UrlImage.newPizza}
                        className='Image object-fit'

                    />
                    <div className='flex flexcolumn '>
                        <h1 className='text-align margin-tophalfHave'>Bussola</h1>
                        <span className='fontSizeDes font-family text-align'>105,00 kr</span>
                    </div>

                </Col>
                <Col xs={6} sm={6} md={6} lg={6} className='Not- margin-top '>
                    <Image
                        src={UrlImage.newPizza}
                        className='Image object-fit'

                    />
                    <div className='flex flexcolumn '>
                        <h1 className='text-align margin-tophalfHave'>Bussola</h1>
                        <span className='fontSizeDes font-family text-align'>105,00 kr</span>
                    </div>

                </Col>
                <Col xs={6} sm={6} md={6} lg={6} className='Not- margin-top '>
                    <Image
                        src={UrlImage.newPizza}
                        className='Image object-fit'

                    />
                    <div className='flex flexcolumn '>
                        <h1 className='text-align margin-tophalfHave'>Bussola</h1>
                        <span className='fontSizeDes font-family text-align'>105,00 kr</span>
                    </div>

                </Col>
                    </Row>
                </Col>

             
                


            </Row>

            <div className='margin-top' />

            <Row className='justify-content-center bx padding'>
                <Col xs={11} sm={12} md={6} lg={6} className='Not- margin-top order' >
                    <div className='fjustify-content-center Not- margin-top'>
                        <h1>Place your order here and get</h1>
                        <h6 >15% on your first purchase:</h6>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} className='' >
                                <TheButton
                                    Title='Add to cart'
                                    className='button borderScreen cursor whitecolor redbackground fontSizeDes'
                                />
                            </Col>

                        </Row>
                    </div>
                </Col>
                <Col xs={11} sm={12} md={6} lg={6} className='margin-top'>
                    <div className='flex justify-content-center align-items'>
                        <Image
                            src={UrlImage.Pizza}
                            className='Image object-fit'
                        />
                    </div>
                </Col>

            </Row>
            <div className='margin-top' />
            <Row className='justify-content-center padding '>


                <h1 className='text-align margin-tophalf colorScreen'>pizza</h1>
                <h6 className='text-align'>15% on your first purchase:</h6>
                <div>

                    <Swiper
                        breakpoints={sdfd}
                        slidesPerView={2}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        {ShowImage?.map((item, index) => (

                            <SwiperSlide key={index}>
                                <div className='margin-top'>
                                    <div className='flex justify-content-center align-items'>
                                        <Image
                                            src={item.image}
                                            className='Image object-fit'
                                        />

                                    </div>
                                    <div className='flex flexcolumn '>
                                        <h1 className='text-align margin-tophalfHave'>Bussola</h1>
                                        <span className='fontSizeDes font-family text-align'>105,00 kr</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>

                <Col xs={11} sm={12} md={12} lg={12} >



                    <div className='flex flexrow FlexSize margin-tophalf'>
                        <TheButton
                            Extrat='classButton margin-tophalf'
                            Title='order here'
                            className='button borderScreen cursor whitecolor redbackground fontSizeDes'
                        />
                        <div>
                            <p className='fontSizeDes font-family text-align'>
                                Pizzeria La Stella offers delicious dishes in a cozy and fresh environment. We always serve good food quickly and conveniently. With us you will find pizza, kebabs, gyros, pasta, falafel, salads and
                            </p>
                        </div>
                    </div>

                </Col>
            </Row>

            <div className='margin-top' />
            <Row className='justify-content-center bx padding'>


                <h1 className='text-align margin-tophalf colorScreen '>Home delivery</h1>


                <Col xs={11} sm={12} md={6} lg={6} >
                    <Image
                        src={UrlImage.Cover}
                        className='Image object-fit'
                    />
                </Col>
                <Col xs={11} sm={12} md={6} lg={6} >

                    <div className='margin-top' >

                        <div className='flex align-items justify-content-space-between'>
                            <span className='fontSizeDes font-family text-align padding  redbackground widthhun whitecolor'>
                                home delivery
                            </span>
                            <span className='fontSizeDes font-family text-align widthhun'>
                                pick up in store
                            </span>
                        </div>


                        <div className='flex flexcolumn test'>
                            <h6>delivery</h6>
                            <span className='fontSizeDes font-family text-align'>Wolt makes it incredibly easy for you to discover and get what you want. Delivered to you – quickly, reliably and affordably.</span>
                        </div>

                    </div>

                </Col>



            </Row>

            <div className='margin-top' />

            <Row className='justify-content-center padding '>

                <h1 className='text-align margin-tophalf colorScreen '>Pizza to share</h1>

                <Col xs={11} sm={12} md={4} lg={4} className='Not- margin-top order' >
                    <div className='fjustify-content-center Not- margin-top'>


                        <h1>Pizza to share</h1>
                        <h1 >Extra large size!</h1>
                        <Row>
                            <Col xs={12} sm={12} md={10} lg={10} className='' >

                                <Form.Control
                                    type="text"
                                    placeholder="name"
                                    className='margin-tophalfHave input button'
                                />

                                <Form.Control
                                    type="number"
                                    placeholder="phone"
                                    className='margin-tophalfHave input button'
                                />
                                <TheButton
                                    Extrat='margin-tophalf'
                                    Title='continue'
                                    className='button borderScreen cursor whitecolor redbackground fontSizeDes'
                                />

                            </Col>

                        </Row>
                    </div>
                </Col>
                <Col xs={11} sm={12} md={8} lg={8} className='margin-top'>
                    <div className='flex justify-content-center align-items'>
                        <Image
                            src={UrlImage.Footer}
                            className='Image object-fit'
                        />
                    </div>
                </Col>

            </Row>

        </Container>
    )
}

export default HomeScreen