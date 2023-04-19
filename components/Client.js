import Slider from "react-slick";
function Client(props) {
  const SliderData = {
    dots: false,
    infinite: true,
    slidesToShow: props.slides ? 6 : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <>
      <h2 className='text-center text-xl md:text-3xl font-semibold pb-5 md:pb-10'>
        {props.heading
          ? ""
          : "We're trusted by many fast growing companies for their tech needs"}
      </h2>
      <Slider {...SliderData}>
        {props.data.map(({ img, name, alt, webp_img }, index) => (
          <div className='text-center' key={index}>
            <picture>
              <source
                srcSet={webp_img}
                type='image/webp'
                media='(min-width:250px)'
                className='max-h-20 '
              />
              <img
                src={img}
                alt={alt}
                className='max-h-20 '
                height='150px'
                width='280'
                loading='lazy'
              />
            </picture>
            <h6 className='font-medium text-primary float-left text-center'>
              {name && name}
            </h6>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Client;
