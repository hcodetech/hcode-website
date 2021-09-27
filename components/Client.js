function Client(props) {
    return (
        <>
            <h2 className="text-center text-3xl font-semibold pb-10">{props.heading ? "" : "A few of our client partners"}</h2>
            <div className="slider">
                <div className="slide-track ">
                    {props.data.map(({ img, name, alt }, index) => (
                        <div className="slide" key={index}>
                            <img src={img} height='110' alt={alt} className="" />
                            <h6 className="font-medium text-primary float-left">
                                {name && name}
                            </h6>
                        </div>
                    ))}
                    {props.data.map(({ img, name, alt }, index) => (
                        <div className="slide" key={index}>
                            <img src={img} height='113' alt={alt} className="" />
                            <h6 className="font-medium text-primary float-left">
                                {name && name}
                            </h6>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Client
