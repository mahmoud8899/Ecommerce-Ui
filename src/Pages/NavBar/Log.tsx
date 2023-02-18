import { Image } from "react-bootstrap"
import { UrlImage } from "../../Utils/Url"

interface TypeProps {
    ClassName?: string
}

function Log(props: TypeProps): JSX.Element {
    const { ClassName } = props


    return (
        <>
            <h1 className={ClassName}>Pizza</h1>
            <Image src={UrlImage.Log} className='Icons' />
        </>

    )
}

export default Log