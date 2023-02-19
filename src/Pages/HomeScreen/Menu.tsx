

import { Row, Col, Image, } from 'react-bootstrap'
import TheButton from '../../Components/Button'
import { TheSwiper } from '../../Components/Swiper/index'
import { ResponseSize } from '../../Components/Swiper/Setting';
import { SwiperSlide } from 'swiper/react';
import { ItmeCart, TheSecandData } from '../../Components/Data/index'






const TheMenu = () => {






    return (
        <Row className='justify-content-center padding bx'>


            <h1 className='text-align margin-tophalf colorScreen'>pizza</h1>
            <h6 className='text-align'>15% on your first purchase:</h6>
            <div>

                <TheSwiper
                    ResponseSize={ResponseSize}
                    slidesPerView={3}
                >

                    {TheSecandData?.map((item, index) => (

                        <SwiperSlide key={index}>
                            <div className='margin-top'>
                                <div className='flex justify-content-center align-items'>
                                    <Image
                                        src={item.image}
                                        className='Imageonther object-fitonther border-radius'
                                    />

                                </div>
                                <div className='flex flexcolumn margin-tophalfHave'>
                                    <h5 className='text-align'>{item.name}</h5>
                                    <span className='fontSizeDes font-family text-align'>{item.price} kr</span>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}

                </TheSwiper>

                <TheSwiper
                    ResponseSize={ResponseSize}
                    slidesPerView={3}
                >

                    {ItmeCart?.map((item, index) => (

                        <SwiperSlide key={index}>
                            <div className='margin-top' >
                                <div className='flex justify-content-center align-items'>
                                    <Image
                                        src={item.image}
                                        className='Imageonther object-fitonther border-radius'
                                    />

                                </div>
                                <div className='flex flexcolumn margin-tophalfHave'>
                                    <h5 className='text-align'>{item.name}</h5>
                                    <span className='fontSizeDes font-family text-align'>{item.price} kr</span>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}

                </TheSwiper>
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
    )
}



export default TheMenu




