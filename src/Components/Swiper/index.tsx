// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { ReactNode } from "react";




interface TypeProps {
    ResponseSize: any,
    slidesPerView?: number | "auto" | undefined,
    children?: ReactNode
}

export const TheSwiper = (props:TypeProps) => {
    const { ResponseSize, slidesPerView, children } = props as TypeProps




    return (
        <Swiper
            breakpoints={ResponseSize}
            slidesPerView={slidesPerView}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {children}

        </Swiper>

    )
}



