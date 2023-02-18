
interface TypeProps {
    ClassName?: string
}

const MinNav = (props: TypeProps) => {
    const { ClassName } = props



    return (
        <ul className={ClassName ? ClassName : 'flex justify-content-space-between flex-wrap cursor'}>
            <li className='fontSizeDes  font-family text-transform fontSizeDes' >
                about
            </li>
            <li className='fontSizeDes  font-family text-transform fontSizeDes'>
                menu
            </li>
            <li className='fontSizeDes  font-family text-transform fontSizeDes'>
                gallery
            </li>
            <li className='fontSizeDes  font-family text-transform fontSizeDes'>
                promotions
            </li>
            <li className='fontSizeDes  font-family text-transform fontSizeDes'>
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
    )
}

export default MinNav