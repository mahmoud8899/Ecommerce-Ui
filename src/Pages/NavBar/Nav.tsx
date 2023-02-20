import { Fragment, useState } from 'react'
import { useAppSelector } from '../../Redux/store/index'
import ItemsCart from '../ItemsCart'
interface TypeProps {
    ClassName?: string,
    AddNew?: string
}

const MinNav = (props: TypeProps) => {
    const { ClassName, AddNew } = props


    let cart = useAppSelector((state) => state.TheCart.cart)

    let [cartOpen, setcartOpen] = useState<boolean>(false)



    let HandelCart = (): void => {
        setcartOpen(!cartOpen)
    }

    return (
        <Fragment>


            {cartOpen && (
                <ItemsCart
                    open={cartOpen}
                    close={setcartOpen}
                />
            )}

            <ul className={ClassName ? ClassName : 'flex justify-content-space-between flex-wrap cursor'}>

                <li className='fontSizeDes  font-family text-transform fontSizeDes' >
                    <a href='#menu' className={AddNew ? AddNew : 'Link blackColor'}>
                        menu
                    </a>

                </li>
                <li className='fontSizeDes  font-family text-transform fontSizeDes'>
                    <a href='#new' className={AddNew ? AddNew : 'Link blackColor'}>
                        new
                    </a>

                </li>

                <li className='fontSizeDes  font-family text-transform fontSizeDes'>
                    <a href='#delivery' className={AddNew ? AddNew : 'Link blackColor'}>
                        delivery
                    </a>

                </li>

                {!AddNew && (
                    <li>
                        <div className='flex align-items' onClick={HandelCart}>
                            {cart?.length > Number(0) && (
                                <div className='box-shadow Icons height whitecolor redbackground border-radius flex align-items justify-content-center fontSizeDes blackColor font-family text-transform fontSizeDes'>
                                    {cart?.length}
                                </div>
                            )}

                            <span className='margin-left fontSizeDes blackColor font-family text-transform fontSizeDes'>
                                shopping cart
                            </span>
                        </div>
                    </li>
                )}


                <li className='fontSizeDes  font-family text-transform fontSizeDes'>
                    <a href='#contact' className={AddNew ? AddNew : 'Link blackColor'}>
                        contact
                    </a>

                </li>


            </ul>
        </Fragment>

    )
}

export default MinNav