import { Col, Image, Row, Container } from "react-bootstrap"
import TheButton from "../../Components/Button"
import TheInput from "../../Components/TheInput"
import { UrlImage } from "../../Utils/Url"
import Log from "../NavBar/Log"
import MinNav from "../NavBar/Nav"
import pizzaSlice from '../../Utils/update/6.png'
import pizzaSliceNine from '../../Utils/update/8.png'

const Footer = () => {



    return (
        <Container fluid>

            <Row className='justify-content-center  padding'>

            <Col xs={6} ms={6} md={6} lg={6}>
                   <div className="position">
                   <Image src={pizzaSliceNine} className='Image imageheight object-fit ' />
                   </div>
                </Col>
              
                <Col xs={6} ms={6} md={6} lg={6}>
                   <div className="position">
                   <Image src={pizzaSlice} className='Image  imageheight object-fit ' />
                   </div>
                </Col>
            </Row>

            <Row className='justify-content-center blackBa padding'>
                <Col xs={6} sm={6} md={4} lg={4} className='Ma' >
                    <div >
                        <MinNav
                            ClassName='flex whitecolor flexcolumn justify-content-center align-items'
                            AddNew='whitecolor Link'

                        />
                    </div>
                </Col>
                <Col xs={6} sm={6} md={4} lg={4} className='Ma' >

                    <div className='flex flexrow  flexcolumn align-items justify-content-center newBack' >
                        <Log ClassName='colorScreen' />
                        <Image
                            src={UrlImage.Paprak}
                            className='object-fit Icons_'
                        />
                    </div>

                </Col>
                <Col xs={12} sm={6} md={4} lg={4} className='Ma' >

                    <h1 className='whitecolor'> Sian up our</h1>
                    <h1 className='whitecolor'>newsletter:</h1>
                    <div >
                        <TheInput
                            type="number"
                            placeholder="phone"
                            className='margin-tophalfHave input button'
                        />
                        <TheButton
                            Extrat='margin-tophalf'
                            Title='continue'
                            className='button borderScreen cursor whitecolor redbackground fontSizeDes'
                        />
                    </div>


                </Col>

            </Row>
        </Container>

    )
}


export default Footer