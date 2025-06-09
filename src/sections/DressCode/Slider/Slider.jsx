import { baseUrl } from "../../../heplers/utils"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ data }) => {
  return (
    <Swiper
      navigation
      modules={[Navigation]}
      slidesPerView={1}
    >
      {data.map((item, index) => (
        <SwiperSlide 
          key={index}
        >
          <img src={`${baseUrl}img/${item.img}.jpg`} />
          <p>{item.text}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
