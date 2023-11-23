function Mvpbenifits(props) {
  return (
    <div className={props.background ? "" : ""}>
      <div className="text-center">
        <h2 className=" text-[28px] sm:text-4xl font-poppins  font-semibold  pt-16 text-center w-[98%] sm:w-6/12 mx-auto">
          {props.data.heading}
        </h2>
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
