

import { Row, Col, Image, } from 'react-bootstrap'
import { UrlImage } from '../../Utils/Url'

const Delivery = () =>{



    return(
        <Row className='justify-content-center  padding'>


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
    )
}


export default Delivery