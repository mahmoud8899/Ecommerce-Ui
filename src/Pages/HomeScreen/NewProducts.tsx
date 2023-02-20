import { useContext } from 'react'
import { Row, Col, Image, } from 'react-bootstrap'
import { UtilsOneProduct } from '../../Components/Context'
import { ItmeCart } from '../../Components/Data/index'




const NewProducts = () => {


    let StateChange = useContext(UtilsOneProduct)

    return (
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

            <Col xs={11} sm={12} md={10} lg={10} >
                <Row className='justify-content-center '>
                    {ItmeCart?.map((item, index) => (
                        <Col xs={6} sm={4} md={4} lg={4} className='Not- margin-top' key={index} onClick={()=>StateChange(item)}>
                            <div className='flex flexcolumn align-items justify-content-center margin-tophalfHave '>
                                <Image
                                    src={item.image}
                                    className='Imageonther object-fitonther border-radius'

                                />
                                <div className='flex flexcolumn margin-tophalfHave'>
                                    <h5 className='text-align '>{item.name}</h5>
                                    <span className='fontSizeDes font-family text-align'>{item.price} kr</span>
                                </div>
                            </div>

                        </Col>
                    ))}


                </Row>
            </Col>





        </Row>
    )
}


export default NewProducts