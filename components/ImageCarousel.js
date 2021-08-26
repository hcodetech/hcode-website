import Image from "next/image";
import { work_with_us_image_carousel } from "../constants/constants";
function ImageCarousel() {
  return (
    <div className="flex gap-4">
      {work_with_us_image_carousel.map(({image}, index) => (
        <div key={index} className="relative h-[322px] w-[558px]">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      ))}
    </div>
  );
}

export default ImageCarousel;
