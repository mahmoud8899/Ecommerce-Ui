import React from "react"
import { Image } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import { UrlImage } from "../../Utils/Url"
import { AllState, Items } from '../Data/index'
import { useAppDispatch } from '../../Redux/store/index'
import { addToCart } from '../../Redux/features/cart'

interface TypeProps {
    open: AllState,
    setOpen: React.Dispatch<React.SetStateAction<AllState>>,
    OneItems: Items

}



const TheModal = (props: TypeProps) => {
    const { open, setOpen, OneItems } = props



    // deispatch data 
    const dispatch = useAppDispatch()



    const onHide = (): void => {
        let CheckOut = open.openModal === true ? false : true
        setOpen({
            ...open,
            openModal: CheckOut
        })
    }



    let AddNewData = (data: Items) => {

        dispatch(addToCart(data))
        console.log('show me data.', data)
    }

    return (<Modal
        show={open?.openModal}
        onHide={onHide}
        fullscreen='sm-down'
    >


        <div className='poistion cursor'>

            <div className=''>
                <Image
                    src={OneItems?.image}
                    width='100%'
                    height='350px'
                    className='border-bottom-left-radius'
                />
                <Image src={UrlImage.close}
                    width='30px'
                    height='30px'
                    className='IconClose whiteBacground border-radius '
                    onClick={onHide}
                />
            </div>


            <div className='padding margin-tophalf ' >

                <div className='flex flexrow justify-content-space-between align-items'>
                    <h1>{OneItems?.name}</h1>
                    <span className='fontSizeDes font-family colorScreen'>{OneItems?.price} kr</span>



                </div>
                <div className='margin-tophalf '>
                    <p className='fontSizeDes font-family'>
                        A creamy salmon pasta with a little sweetness from honey and acid from lime, a good everyday favourite. Suitable for eating for dinner.                    </p>
                </div>

                <div

                    onClick={() => AddNewData(OneItems)}

                    className='button redbackground borderScreen margin-tophalf'>
                    <p className='fontSizeDes font-family whitecolor text-align line text-transform'>
                        add to cart
                    </p>
                </div>
            </div>

        </div>

    </Modal>
    )
}


export default TheModal