function Benefits(props) {
  return (
    <div className={props.background ? "" : ""}>
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold  pt-16">{props.data.heading}</h1>
        <p className="font-light pt-2 px-2 md:px-0 lg:w-1/2 mx-auto">{props.data.paragraph}</p>
      </div>
      <div className="new-container pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {props.data.points.map(
          ({ image, heading, descripition }, index) => (
            <div key={index} className="pt-16 ">
              <img
                src={image}
                layout="fill"
                className="max-h-[65px]"
              />
              <h3 className="text-xl font-semibold py-2"> {heading}</h3>
              <p className="font-light">{descripition}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Benefits;
