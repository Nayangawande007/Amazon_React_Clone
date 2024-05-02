import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

function CarouselProduct() {
  return (
    <div>
    <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
    >   
        {
            Array.from( {length:9}, (_, i) => 
            <SwiperSlide kay={i}>
              <Link to={`/product/${i}`}>
                <img src={`../images/product_${i}_small.jpg`} />
              </Link>
            </SwiperSlide> )
        }

    </Swiper>
      CarouselProduct
    </div>
  )
}

export default CarouselProduct
