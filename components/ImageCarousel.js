import Image from "next/image";
import { work_with_us_image_carousel } from "../constants/constants";
function ImageCarousel() {
  return (

    <div className="new-container py-20">
    <div className="slider">
        <div className="slide-track">
            {work_with_us_image_carousel.map(({ image }, index) => (
                <div className="slide" key={index}>
                    <img src={image} height="300" width="550"  />
                </div>
            ))}
        </div>
    </div>
</div>



  );
}

export default ImageCarousel;
