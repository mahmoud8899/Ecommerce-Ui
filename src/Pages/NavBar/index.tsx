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
                <Col xs={12} sm={7} md={7} lg={7} className='padding' >
                    <div className='flex align-items' onClick={Change}>

                        <Log />

                        <div className={css.menubar}  >
                            <div className='menu-btn__burger' />
                        </div>

                    </div>
                </Col>

                <Col xs={12} sm={5} md={5} lg={5} className='padding'>
                    <div className={css.hidden}>
                        <MinNav />
                    </div>


                </Col>



            </Row>
        </Container>
    )
}


export default NavBar