import { Fragment } from "react"
import { Image } from "react-bootstrap"
import { UrlImage } from "../../Utils/Url"

interface TypeProps {
    ClassName?: string
}

function Log(props: TypeProps): JSX.Element {
    const { ClassName } = props


    return (
        <Fragment>
           
            <Image src={UrlImage.Log} className='Icons_' />
            <h1 className={ClassName}>Pizza</h1>
        </Fragment>

    )
}

export default Log