
import { UrlImage } from '../../Utils/Url'


export interface AllState {
    openModal: boolean,
    NewAction: Items ,

}
export interface Items {
    _id?: number,
    name?: string,
    image?: string,
    price?: number
}


// the first data...
export let ItmeCart: Items[] = [
    {
        _id: 1,
        name: 'Bussola',
        image: UrlImage.Pizza1,
        price: 100
    },
    {
        _id: 2,
        name: 'Bussola',
        image: UrlImage.Pizza2,
        price: 100
    },
    {
        _id: 3,
        name: 'Bussola',
        image: UrlImage.Pizza3,
        price: 100
    },
    {
        _id: 4,
        name: 'Bussola',
        image: UrlImage.Pizza4,
        price: 100
    },
    {
        _id: 5,
        name: 'Bussola',
        image: UrlImage.Pizza5,
        price: 100
    },
    {
        _id: 6,
        name: 'Bussola',
        image: UrlImage.Pizza6,
        price: 100
    },
    {
        _id: 7,
        name: 'Bussola',
        image: UrlImage.Pizza7,
        price: 100
    },
    {
        _id: 8,
        name: 'Bussola',
        image: UrlImage.Pizza8,
        price: 100
    },
    {
        _id: 9,
        name: 'Bussola',
        image: UrlImage.Pizza9,
        price: 100
    },
]

// the Secand data,,...
export let TheSecandData: Items[] = [
   
    {
        _id: 1,
        name: 'Bussola',
        image: UrlImage.Pizza10,
        price: 100
    },
    {
        _id: 2,
        name: 'Bussola',
        image: UrlImage.Pizza13,
        price: 100
    },
    {
        _id: 3,
        name: 'Bussola',
        image: UrlImage.Pizza14,
        price: 100
    },
    {
        _id: 4,
        name: 'Bussola',
        image: UrlImage.Pizza15,
        price: 100
    },
    {
        _id: 5,
        name: 'Bussola',
        image: UrlImage.Pizza,
        price: 100
    },
    {
        _id: 6,
        name: 'Bussola',
        image: UrlImage.OnePizza,
        price: 100
    },
  
]