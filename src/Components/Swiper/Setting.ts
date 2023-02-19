type Size = {
    slidesPerView: number,
    spaceBetween: number
}

export interface TheObject {
    "@0.00": Size,
    "@0.75": Size,
    "@1.00": Size,
    "@1.50": Size,

} 

export let ResponseSize:TheObject = {
    "@0.00": {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    "@1.00": {
        slidesPerView: 4,
        spaceBetween: 40,
    },
    "@1.50": {
        slidesPerView: 5,
        spaceBetween: 50,
    },
}
