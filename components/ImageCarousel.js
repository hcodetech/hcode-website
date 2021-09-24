import { work_with_us_image_carousel } from "../constants/constants";
function ImageCarousel() {
    return (
        <div className="new-container py-20">
            <div className="image_slider">
                <div className="image_slide-track">
                    {work_with_us_image_carousel.map(({ image }, index) => (
                        <div className="image_slide" key={index}>
                            <img className='imgs' src={image} />
                        </div>
                    ))}
                    {work_with_us_image_carousel.map(({ image }, index) => (
                        <div className="image_slide" key={index}>
                            <img className='imgs' src={image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImageCarousel;
