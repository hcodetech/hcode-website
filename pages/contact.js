import { LocationMarkerIcon, PhoneIcon, ChatAltIcon } from "@heroicons/react/solid";


function contact() {
    return (
        <section className="new-container grid grid-cols-12 pt-14" >
            <div className="bg-primary max-w-[450px] max-h-screen text-white p-10 col-span-5">
                <h1 className="text-4xl font-semibold">
                    Let’s scale your team together
                </h1>
                <p className="text-normal opacity-80 mt-3">
                    Fill out the form, including details about your next project (or business goals), and we'll be in touch shortly.
                </p>
                <div className="flex mt-4 border-t pt-4">
                    <LocationMarkerIcon className="w-6 h-6 mr-2" />
                    120/7th Milestone, NH-1, Karnal, Haryana 132001
                </div>
                <div className="flex mt-4 ">
                    <PhoneIcon className="w-6 h-6 mr-2" />
                    +91-9416033324
                </div>
                <div className="flex mt-4 ">
                    <ChatAltIcon className="w-6 h-6 mr-2" />
                    hello@hcode.tech
                </div>
            </div>
            {/* Form Start Here */}
            <div className="p-10 col-span-7">
                <h1 className="text-4xl font-semibold pb-3">Please enter the details</h1>
                <form action="#" method="POST">
                    <div className="grid grid-cols-6 gap-6">
                        {/* Full Name */}
                        <div className="col-span-12">
                            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="full-name"
                                id="full-name"
                                autoComplete="given-name"
                                className="input-form"
                            />
                        </div>
                        {/* Your Company Details */}
                        <div className="col-span-12">
                            <h2 className="font-semibold text-xl pb-2 border-b-2">Your Company Details</h2>
                            {/* Company Name */}
                            <div className="col-span-12 mt-4">
                                <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    name="company-name"
                                    id="company-name"
                                    autoComplete="given-name"
                                    className="input-form"
                                />
                            </div>
                            {/* Company Email */}
                            <div className="col-span-12 mt-4">
                                <label htmlFor="company-email" className="block text-sm font-medium text-gray-700">
                                    Company Email
                                </label>
                                <input
                                    type="text"
                                    name="company-email"
                                    id="company-email"
                                    autoComplete="given-name"
                                    className="input-form"
                                />
                            </div>
                            {/* Number of Employees */}
                            <div className="col-span-12 mt-4">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Number of Employees
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country"
                                    className="mt-1 block w-full py-2 px-3 input-form"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>

                        {/* Your Project Details */}
                        <div className="col-span-12 mt-4">
                            <h2 className="font-semibold text-xl pb-2 border-b-2">Project Details</h2>
                            {/*  Describe your project briefy */}
                            <div className="col-span-12 mt-4">
                                <label htmlFor="project-briefy" className="block text-sm font-medium text-gray-700">
                                    Describe your project briefy
                                </label>
                                <textarea
                                    id="project-briefy"
                                    name="project-briefy"
                                    rows={3}
                                    className="input-form"
                                    defaultValue={''}
                                />
                            </div>
                            {/* Project manager/Engineering Manger/CTO */}
                            <fieldset className="mt-6">
                                <div>
                                    <legend className="text-sm font-medium text-gray-700">
                                        Will the project be run by a technical person like a Project manager/Engineering Manger/CTO etc?
                                    </legend>
                                </div>
                                <div className="mt-4 flex">
                                    <div className="flex items-center">
                                        <input
                                            id="push-everything"
                                            name="push-notifications"
                                            type="radio"
                                            className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                                        />
                                        <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center ml-5">
                                        <input
                                            id="push-email"
                                            name="push-notifications"
                                            type="radio"
                                            className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                                        />
                                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                            No
                                        </label>
                                    </div>

                                </div>
                            </fieldset>
                            {/* Number of Developers required */}
                            <div className="col-span-12 mt-4">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Number of Developers required
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country"
                                    className="mt-1 block w-full py-2 px-3 input-form"
                                >
                                    <option selected>I don’t know</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>
                        {/* Technical Details */}
                        <div className="col-span-12 mt-4">
                            <h2 className="font-semibold text-xl pb-2 border-b-2">Technical Details</h2>

                            {/* Tech Stack */}
                            <fieldset className="mt-6">
                                <div>
                                    <legend className="text-sm font-medium text-gray-700">
                                        Choose your preferred tech stack
                                    </legend>
                                </div>
                                <div className="mt-4 grid grid-cols-12">
                                    <div className="flex items-center min-w-[100px] col-span-6  md:col-span-4 lg:col-span-3">
                                        <input
                                            id="python"
                                            name="python"
                                            type="checkbox"
                                            className="input-radio"
                                        />
                                        <label htmlFor="python" className=" block text-sm font-medium text-gray-700 border border-1 rounded-lg text-center px-5 py-3">
                                            Python
                                            <br />
                                            <span className="text-gray-500 text-xs font-normal" > Backend</span>
                                        </label>
                                    </div>

                                </div>
                            </fieldset>
                            {/* Number of Developers required */}
                            <div className="col-span-12 mt-4">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Expected Time Commitment
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country"
                                    className="mt-1 block w-full py-2 px-3 input-form"
                                >
                                    <option selected>I don’t know</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default contact
