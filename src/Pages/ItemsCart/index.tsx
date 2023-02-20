import { Image } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import { useAppSelector } from "../../Redux/store"
import { UrlImage } from '../../Utils/Url'
import TheButton from '../../Components/Button/index'
import { TheSlice } from '../../Utils/Function'
import { useAppDispatch } from '../../Redux/store/index'
import { RemoveCart } from '../../Redux/features/cart'
import { Fragment } from "react"

interface TypeProps {
    open: boolean
    close: React.Dispatch<React.SetStateAction<boolean>>
}

const ItemsCart = (props: TypeProps) => {
    const { open, close } = props


    //  close 
    let onHide = (): void => close(!open)


    // remove one item of carts 
    const dispatch = useAppDispatch()
    let Remove = (id: number) => dispatch(RemoveCart({ _id: id }))


    // get itemscart ...
    let cart = useAppSelector((state) => state.TheCart.cart)




    function TheCloseFunctopn() {


        return <Image src={UrlImage.close}
            width='30px'
            height='30px'
            className='IconClose redbackground border-radius '
            onClick={onHide}
        />
    }



    return (
        <Modal
            show={open}
            onHide={onHide}
            fullscreen='sm-down'
        >
            <div className="padding">

                {cart?.length > Number(0) ? (
                    <Fragment>
                        {TheCloseFunctopn()}

                        <h1 className="margin-toptwo  colorScreen">Your order</h1>
                        <div className="Scroll">


                            {cart?.map((item, index) => (
                                <div className="flex align-items redbackground paddingHalf borderScreen margin-tophalfHave ScreenHover" key={index}>


                                    <Image src={UrlImage.close}
                                        width='30px'
                                        height='30px'
                                        className='whiteBacground border-radius'
                                        onClick={() => Remove(Number(item?._id))}
                                    />

                                    <span className="whitecolor fontSizeDes font-family margin-leftone">{item.name}</span>
                                    <Image src={item.image}
                                        width='60px'
                                        height='60px'
                                        className='border-radius menu-btn'
                                        onClick={onHide}
                                    />


                                </div>

                            ))}


                        </div>
                        <div className="margin-toptwo" />
                        <div className="border-top-line" />
                        <div className="flex justify-content-space-between align-items margin-tophalf">

                            <div className="margin-leftone " >
                                <Image src={UrlImage.comment} width='30px' height='30px' />
                            </div>


                            <div className="flex flexcolumn">

                                <h5 className="font-sizeCart">Lägg till kommentar</h5>
                                <span className="fontSizeDes font-family font-sizeCart">{TheSlice('Särskilda önskemål, allergier, kostpreferenser, etc.', 40)}</span>
                            </div>


                            <div >
                                <span className="fontSizeDes font-family redbackground paddingHalf whitecolor cursor borderScreen font-sizeCart">change</span>
                            </div>

                        </div>
                        <TheButton
                            Extrat='postionButton'
                            Title='continue'
                            className='button borderScreen cursor whitecolor redbackground fontSizeDes'
                        />

                    </Fragment>
                ) : (
                    <Fragment>
                         {TheCloseFunctopn()}
                        <div className="flex justify-content-center align-items flexcolumn margin-top ">
                            <h1 >No items in your order</h1>
                            <h5>Your order is alone without items. Let's add some!</h5>
                        </div>

                    </Fragment>
                )}








            </div>

        </Modal>


    )

}


export default ItemsCart