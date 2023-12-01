function Benefits(props) {
  return (
    <div className={props.background ? '' : ''}>
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-semibold  pt-16">
          {props.data.heading}
        </h2>
        <p
          className={`font-light pt-2 px-2  md:px-14  mx-auto ${props.additionalClass}`}
        >
          {props.data.paragraph}
        </p>
      </div>
      <div className="new-container pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {props.data.points.map(({ image, heading, description }, index) => (
          <div key={index} className="pt-16 ">
            <div className=" h-16 w-16">
              <img
                src={image}
                layout="fill"
                className=" w-auto "
                height="70px"
                width="70px"
                loading="lazy"
                alt="hcode services"
              />
            </div>

            <h4 className="text-xl font-semibold mt-4"> {heading}</h4>
            <p
              className="font-light pt-2"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
