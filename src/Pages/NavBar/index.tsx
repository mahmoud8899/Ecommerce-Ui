import { UrlImage } from '../../Utils/Url'
import { Row, Col, Image, Container } from 'react-bootstrap'
import { useState } from 'react'
import MinNav from './Nav'
import Log from './Log'


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
            <Row className='justify-content-center '>
                <Col xs={12} sm={3} md={3} lg={3} className='padding' >
                    <div className='flex align-items'>

                        <Log />

                        <div className={css.menubar} onClick={Change} >
                            <div className='menu-btn__burger' />
                        </div>

                    </div>
                </Col>

                <Col xs={12} sm={9} md={9} lg={9} className='padding'>
                    <div className={css.hidden}>
                        <MinNav />
                    </div>


                </Col>



            </Row>
        </Container>
    )
}


export default NavBar