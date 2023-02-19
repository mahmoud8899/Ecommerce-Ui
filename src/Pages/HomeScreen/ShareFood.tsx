
import { Row, Col, Image, } from 'react-bootstrap'
import TheButton from '../../Components/Button'
import { UrlImage } from '../../Utils/Url'
import TheInput from '../../Components/TheInput';




const ShareFood = () => {



    return (<Row className='justify-content-center padding bx'>

        <h1 className='text-align margin-tophalf colorScreen '>Pizza to share</h1>

        <Col xs={11} sm={12} md={4} lg={4} className='Not- margin-top order' >
            <div className='fjustify-content-center Not- margin-top'>


                <h1>Pizza to share</h1>
                <h1 >Extra large size!</h1>
                <Row>
                    <Col xs={12} sm={12} md={10} lg={10} className='' >

                        <TheInput
                            type="text"
                            placeholder="name"
                            className='margin-tophalfHave input button'
                        />


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

    </Row>)
}


export default ShareFood