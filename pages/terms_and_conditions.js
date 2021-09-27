import { terms_and_conditions_data } from "../constants/constants"

function term_and_conditions() {
    return (
        <section >
            <div className="bg-blue-300">
                <div className="  pt-40 pb-32 new-container">
                    <div className="text-center">
                        <h1 className="font-semibold text-4xl">
                            {terms_and_conditions_data.main_heading}
                        </h1>
                        <h5 className="text-lg font-medium pt-3 md:w-5/12 mx-auto">
                            {terms_and_conditions_data.main_paragraph}
                        </h5>
                        <h6 className="text-sm mt-3">
                            {terms_and_conditions_data.updated_date}
                        </h6>
                    </div>
                </div>
            </div>

            <div className="py-10 md:w-1/2   new-container">
                <div>
                    <p>
                        {terms_and_conditions_data.updated_paragraph}
                    </p>
                    <h1 className="text-3xl font-bold mt-10">
                        {terms_and_conditions_data.terms}
                    </h1>
                    <p className="mt-2 text-sm">
                        {
                            terms_and_conditions_data.terms_paragraph
                        }
                    </p>
                </div>
                {/*  */}
                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {terms_and_conditions_data.general_use}
                    </h1>
                    {terms_and_conditions_data.general_paragraph.map((point, index) => (
                        <p className="mt-2 text-sm" key={index}>
                            {point.paragraph}
                        </p>
                    ))}

                </div>
                {/*  */}
                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {terms_and_conditions_data.disclaimer}
                    </h1>
                    {terms_and_conditions_data.disclaimer_paragraph.map((point, index) => (
                        <p className="mt-2 text-sm" key={index}>
                            {point.paragraph}
                        </p>
                    ))}

                </div>

                {/*  */}
                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {terms_and_conditions_data.limitations}
                    </h1>
                    <p className="mt-2 text-sm">
                        {
                            terms_and_conditions_data.limitations_paragraph
                        }
                    </p>
                </div>
                {/*  */}
                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {terms_and_conditions_data.accuracy_of_materials}
                    </h1>
                    <p className="mt-2 text-sm">
                        {
                            terms_and_conditions_data.accuracy_of_materials_paragraph
                        }
                    </p>
                </div>
                {/*  */}
                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {terms_and_conditions_data.third_part}
                    </h1>
                    <p className="mt-2 text-sm">
                        {
                            terms_and_conditions_data.third_part_first
                        }
                    </p>
                    <p className="mt-2 text-sm">
                        {
                            terms_and_conditions_data.third_part_second
                        }
                    </p>
                </div>
                {/*  */}
                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {terms_and_conditions_data.links}
                    </h1>
                    <p className="mt-2 text-sm">
                        {
                            terms_and_conditions_data.links_paragraph
                        }
                    </p>

                </div>
                {/*  */}
                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {terms_and_conditions_data.limitations_of_liability}
                    </h1>
                    <p className="mt-2 text-sm">
                        {
                            terms_and_conditions_data.limitations_of_liability_first
                        }
                    </p>
                    <ul className="list-inside list-disc">
                        {terms_and_conditions_data.limitations_of_liability_first_points.map((point, index) => (
                            <li className="mt-2 text-sm " key={index}>
                                {point.point}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-2 text-sm">
                        {
                            terms_and_conditions_data.limitations_of_liability_second
                        }
                    </p>

                </div>

                {/*  */}

                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {terms_and_conditions_data.modifications}
                    </h1>
                    <p className="mt-2 text-sm">
                        {
                            terms_and_conditions_data.modifications_paragraph
                        }
                    </p>
                </div>
                {/*  */}

                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {terms_and_conditions_data.govering_law}
                    </h1>
                    <p className="mt-2 text-sm">
                        {
                            terms_and_conditions_data.govering_law_paragraph
                        }
                    </p>
                </div>

            </div>
        </section>
    )
}

export default term_and_conditions
