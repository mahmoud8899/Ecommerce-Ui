import { UrlImage } from '../../Utils/Url'
import { Row, Col, Image, Container } from 'react-bootstrap'
import { useState } from 'react'


const NavBar = () => {


    const [css, setCss] = useState<{
        menubar: string,
        hidden: string

    }>({
        menubar: 'menu-btn',
        hidden: 'hidden'
    })

    const Change = () => {
        if (css.menubar === 'menu-btn') {
            setCss({
                ...css,
                menubar: 'menu-btn open',
                hidden: 'hidden open'
            })
        } else {
            setCss({
                ...css,
                menubar: 'menu-btn',
                hidden: 'hidden'
            })
        }
    }





    return (
        <Container fluid>
            <Row className='justify-content-center'>
                <Col xs={12} sm={3} md={3} lg={3} className='padding' >
                    <div className='flex align-items'>
                        <h1>Pizza</h1>
                        <Image src={UrlImage.Log} className='Icons' />
                        <div className={css.menubar} onClick={Change} >
                            <div className='menu-btn__burger' />
                        </div>

                    </div>
                </Col>

                <Col xs={12} sm={9} md={9} lg={9} className='padding'>
                    <div className={css.hidden}>
                        <ul className='flex justify-content-space-between flex-wrap cursor'>
                            <li className='fontSizeDes blackColor font-family text-transform fontSizeDes' >
                                about
                            </li>
                            <li className='fontSizeDes blackColor font-family text-transform fontSizeDes'>
                                menu
                            </li>
                            <li className='fontSizeDes blackColor font-family text-transform fontSizeDes'>
                                gallery
                            </li>
                            <li className='fontSizeDes blackColor font-family text-transform fontSizeDes'>
                                promotions
                            </li>
                            <li className='fontSizeDes blackColor font-family text-transform fontSizeDes'>
                                contact
                            </li>

                            <li>
                                <div className='flex align-items'>
                                    <div className='box-shadow Icons height whitecolor redbackground border-radius flex align-items justify-content-center fontSizeDes blackColor font-family text-transform fontSizeDes'>
                                        1
                                    </div>
                                    <span className='margin-left fontSizeDes blackColor font-family text-transform fontSizeDes'>
                                        shopping cart
                                    </span>
                                </div>
                            </li>


                        </ul>
                    </div>


                </Col>



            </Row>
        </Container>
    )
}


export default NavBar