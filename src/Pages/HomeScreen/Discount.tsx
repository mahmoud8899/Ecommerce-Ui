
import { Row, Col, Image, Form, } from 'react-bootstrap'
import TheButton from '../../Components/Button'
import { UrlImage } from '../../Utils/Url'
import RigthImage from '../../Utils/update/111.png'
import TheInput from '../../Components/TheInput'
import RigthImage5 from '../../Utils/update/6.png'

const Discount = () => {



    return (<Row className='justify-content-center  padding'>
        <Col xs={11} sm={12} md={6} lg={6} className='Not- margin-top order' >
            <div className='fjustify-content-center Not- margin-top'>
                <h1>Place your order here and get</h1>
                <h6 >15% on your first purchase:</h6>
                <div className='margin-tophalfHave' />
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} className='' >

                        <TheInput
                            placeholder='type of dough'
                            className='margin-tophalfHave input button'
                        />

                        <div className='margin-tophalfHave' />

                        <Form.Select
                            aria-label="Default select example"
                            className='margin-tophalfHave input button'
                        >
                            <option>size</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>


                        <div className='margin-tophalfHave' />
                        <TheButton
                            Title='Add to cart'
                            className='button borderScreen cursor whitecolor redbackground fontSizeDes'
                        />
                    </Col>

                </Row>
            </div>
        </Col>
        <Col xs={11} sm={12} md={6} lg={6} className='margin-top'>
            <div className='flex justify-content-space-between  align-items'>
                <Image
                    src={RigthImage}
                    className='Image '
                />
            </div>
        </Col>

    </Row>)
}


export default Discount


