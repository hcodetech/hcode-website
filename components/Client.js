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
      <h2 className="text-center text-3xl font-semibold pb-10">
        {props.heading
          ? ""
          : "We're trusted by many fast growing companies for their tech needs"}
      </h2>
      <Slider {...SliderData}>
        {props.data.map(({ img, name, alt }, index) => (
          <div className="text-center" key={index}>
            <img src={img} alt={alt} className="max-h-20 " />
            <h6 className="font-medium text-primary float-left text-center">
              {name && name}
            </h6>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Client;
