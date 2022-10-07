import { work_with_us_image_carousel } from "../constants/constants";
import Slider from "react-slick";
import { useEffect, useState } from "react";

function ImageCarousel() {
  const [isDesktop, setIsDesktop] = useState("");

  useEffect(() => {
    window.innerWidth <= 750 ? setIsDesktop(false) : setIsDesktop(true);
  }, []);

  const SliderData = {

    dots: false,
    infinite: true,
    slidesToShow: isDesktop ? 6 : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="new-container py-20">
      <div className="image_slider">
        {/* <div className="image_slide-track"> */}
        <Slider {...SliderData}>
          {work_with_us_image_carousel.map(({ image }, index) => (
            <div className=" mx-4" key={index}>
              <img
                className="min-h-[200px] max-h-[280px] max-w-[100%] mr-4 border-white min-w-[100%] border-4 object-contain object-top"
                src={image}
              />
            </div>
          ))}
        </Slider>
        {/* {work_with_us_image_carousel.map(({ image }, index) => (
                        <div className="image_slide" key={index}>
                            <img className='imgs' src={image} />
                        </div>
                    ))} */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default ImageCarousel;
