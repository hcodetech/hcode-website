function CaseStudiesCard(props) {
    return (
        <div className={` rounded mb-10 grid grid-cols-2 ${props.data.color}`}>
            <div className="p-10">
                <img src={props.data.client_logo} alt={props.data.client_name} />
                <p>
                    {props.data.descripition}
                </p>
            </div>
            <div>
                <img src={props.data.mockup_image} alt={props.data.client_name} />
            </div>
        </div>
    )
}

export default CaseStudiesCard
