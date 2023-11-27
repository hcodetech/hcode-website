function Mvpbenifits(props) {
  return (
    <div className={props.background ? "" : ""}>
      <div className="text-center">
        <h2 className=" text-[28px] sm:text-4xl font-poppins  font-semibold sm:leading-[52px] pt-16 text-center w-[98%] md:w-[70%] lg:w-6/12 mx-auto">
          {/* {props.data.heading} */}
          Why choose us as your
          <span className="bg-primary  text-white inline-block ml-1 px-[5px] py-[2px]"> MVP</span> <br></br>
          development services provides?
        </h2>
        <p className="text-base font-poppins font-normal  leading-7 text-center w-[90%] md:w-[60%] lg:w-2/6 mx-auto pt-2">
          We are more than just developers; we are your partners in achieving
          your product and business objectives. We share your commitment to
          excellence and are dedicated to finding solutions that exceed your
          expectations.
        </p>
      </div>
      <div className="new-container pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {props.data.points.map(({ image, heading, descripition }, index) => (
          <div key={index} className="pt-16 ">
            <div className=" h-16 w-16">
              <img
                src={image}
                layout="fill"
                className=" w-auto "
                mvp_ben
                height="70px"
                width="70px"
                loading="lazy"
                alt="hcode services"
              />
            </div>

            <h4 className="text-xl font-semibold mt-4"> {heading}</h4>
            <p
              className="font-light pt-2 leading-6"
              dangerouslySetInnerHTML={{ __html: descripition }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mvpbenifits;
