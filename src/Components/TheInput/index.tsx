import { Form } from "react-bootstrap"

interface TypeProps {
    type?: string,
    placeholder?: string,
    className?: string
}


const TheInput = (props: TypeProps) => {
    const { placeholder, type,className } = props



    return (
        <Form.Control
            type={type}
            placeholder={placeholder}
            className={className}
        />
    )
}


export default TheInput