
import { Row, Col, Image, } from 'react-bootstrap'
import TheButton from '../../Components/Button'
import { UrlImage } from '../../Utils/Url'



const Discount = () => {



    return (<Row className='justify-content-center bx padding'>
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

    </Row>)
}


export default Discount