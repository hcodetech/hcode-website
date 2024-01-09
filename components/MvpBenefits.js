function MvpBenefits(props) {
  return (
    <div className="new-container">
      <div className="text-center font-poppins">
        <h2 className=" text-2xl sm:text-4xl font-semibold sm:leading-tight pt-2 md:w-6/12 mx-auto">
          Why choose us as your
          <span className="bg-primary  text-white inline-block ml-1 px-1 py-[2px]">
            MVP
          </span>
          <br />
          development services provider?
        </h2>
        <div className="px-3 py-[2px] max-w-[120px] my-4 bg-blue-500 mx-auto"></div>

        <p className="text-base font-light sm:font-normal leading-7 md:w-1/2 mx-auto pt-2">
          We are more than just developers; we are your partners in achieving
          your product and business objectives. We share your commitment to
          excellence and are dedicated to finding solutions that exceed your
          expectations.
        </p>
      </div>
      <div className="pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {props?.data?.points.map(({ image, heading, description }) => (
          <div key={heading} className="pt-16 ">
            <div className=" h-16 w-16">
              <img
                src={image}
                alt={heading}
                className=" w-auto object-contain"
                height="70px"
                width="70px"
                loading="lazy"               
              />
            </div>

            <h4 className="text-xl font-semibold mt-4"> {heading}</h4>
            <p
              className="font-light pt-2 leading-6"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MvpBenefits;
