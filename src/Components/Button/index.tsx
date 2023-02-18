

interface TypeProps {
    Title: string,
    className: string,
    Extrat?: string
}

const TheButton = (props: TypeProps) => {
    const { className, Title ,Extrat} = props



    return (
        <div className={Extrat}>
            <button className={className} >
                {Title}
            </button>
        </div>

    )
}


export default TheButton