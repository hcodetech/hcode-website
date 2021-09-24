import { privacy_policy_data } from "../constants/constants"

function privacy_policy() {
    return (
        <section >
          <div className="bg-blue-300">
          <div className="  pt-40 pb-32 new-container">
                <div className="text-center">
                    <h1 className="font-semibold text-4xl">
                        {privacy_policy_data.main_heading}
                    </h1>
                    <h5 className="text-lg font-medium pt-3 w-5/12 mx-auto">
                        {privacy_policy_data.main_paragraph}
                    </h5>
                    <h6 className="text-sm mt-3">
                        {privacy_policy_data.updated_date}
                    </h6>
                </div>
            </div>
              </div>

            <div className="py-10 w-1/2 new-container">
                <div>
                    <p>
                        {privacy_policy_data.updated_paragraph}
                    </p>
                    <h1 className="text-3xl font-bold mt-10">
                        {privacy_policy_data.personal}
                    </h1>
                    <p className="mt-2 text-sm">
                        {
                            privacy_policy_data.personal_paragraph
                        }
                    </p>
                </div>
                {/*  */}
                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {privacy_policy_data.non_personal}
                    </h1>

                    <p className="mt-2 text-sm" >
                        {privacy_policy_data.non_personal_paragraph}
                    </p>


                </div>
                {/*  */}
                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {privacy_policy_data.web_browser}
                    </h1>
                    <p className="mt-2 text-sm" >
                        {privacy_policy_data.web_browser_paragraph}
                    </p>



                </div>

                {/*  */}
                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {privacy_policy_data.collected_information}
                    </h1>
                    <p className="mt-2 text-sm">
                        {
                            privacy_policy_data.collected_information_paragraph
                        }
                        <ul className="list-disc list-inside">
                            {privacy_policy_data.collected_information_points.map((point, index) => (
                                <li key={index}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </p>
                </div>

                {/*  */}
                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {privacy_policy_data.protect_information}
                    </h1>
                    <p className="mt-2 text-sm">
                        {
                            privacy_policy_data.protect_information_paragraph
                        }

                    </p>
                </div>
                {/*  */}
                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {privacy_policy_data.personal_information}
                    </h1>
                    <p className="mt-2 text-sm">
                        {
                            privacy_policy_data.personal_information_paragraph
                        }

                    </p>
                </div>
                {/*  */}
                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {privacy_policy_data.third_websites}
                    </h1>
                    <p className="mt-2 text-sm">
                        {
                            privacy_policy_data.third_websites_paragarph
                        }

                    </p>
                </div>
                {/*  */}
                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {privacy_policy_data.change_privacy_policy}
                    </h1>
                    <p className="mt-2 text-sm">
                        {
                            privacy_policy_data.change_privacy_policy_paragraph
                        }

                    </p>
                </div>
                {/*  */}
                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {privacy_policy_data.acceptance_terms}
                    </h1>
                    <p className="mt-2 text-sm">
                        {
                            privacy_policy_data.acceptance_terms_paragarph
                        }

                    </p>
                </div>
                {/*  */}
                <div>
                    <h1 className="text-3xl font-bold mt-10">
                        {privacy_policy_data.contacting_us}
                    </h1>
                    <p className="mt-2 text-sm">
                        {
                            privacy_policy_data.contacting_us_paragraph
                        }

                    </p>
                </div>


            </div>
        </section>
    )
}

export default privacy_policy
