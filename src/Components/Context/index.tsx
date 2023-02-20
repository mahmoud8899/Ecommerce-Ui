import { useState, createContext, ReactNode } from 'react'
import TheModal from '../OneProduct/index'
import { Items } from '../Data/index'




interface TheObject {
    openModal: boolean,
    NewAction: Items
}


interface TypeProps {
    children: ReactNode
}




export const UtilsOneProduct = createContext<any>(null)

export default function ShowOneProduct(props: TypeProps) {
    const { children } = props

    const InitionState = {
        openModal: false,
        NewAction: {}
    }
    const [objectValue, setObjectValue] = useState<TheObject>(InitionState)


    const StateChange = (item: Items) => SHowOneProduct(objectValue, setObjectValue, item)


    // get data and open modal
    const SHowOneProduct = (objectValue: TheObject, setObjectValue: React.Dispatch<React.SetStateAction<TheObject>>, item: Items) => {
        let checkOut = objectValue.openModal === true ? false : true
        setObjectValue({
            ...objectValue,
            openModal: checkOut,
            NewAction: item
        })
    }


    return (
        <UtilsOneProduct.Provider value={StateChange}>
            <TheModal
                open={objectValue}
                setOpen={setObjectValue}
                OneItems={objectValue.NewAction}

            />
            {children}
        </UtilsOneProduct.Provider>
    )



}