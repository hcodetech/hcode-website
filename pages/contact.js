import { LocationMarkerIcon, PhoneIcon, ChatAltIcon } from "@heroicons/react/solid";
import { contact_us_circle, selected_technologies } from '../constants/constants';

function contact() {
    return (
        <section className="new-container grid grid-cols-12 pt-14" >
            <div className="bg-primary max-w-[450px] max-h-screen text-white p-10 col-span-5 relative ">
                <div>
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
                <div className="absolute left-0 bottom-0">
                    <img src={contact_us_circle} alt="" />
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
                                    className="input-form"
                                />
                            </div>
                            {/* Number of Employees */}
                            <div className="col-span-12 mt-4">
                                <label htmlFor="no-of-employees" className="block text-sm font-medium text-gray-700">
                                    Number of Employees
                                </label>
                                <select
                                    id="no-of-employees"
                                    name="no-of-employees"
                                    className="mt-1 block w-full py-2 px-3 input-form"
                                >
                                    <option>1 - 5</option>
                                    <option>5 - 20</option>
                                    <option>20 - 50</option>
                                    <option>50+</option>
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

                            <fieldset className="mt-6">
                                <div>
                                    <legend className="text-sm font-medium text-gray-700">
                                        Is this requirement related to?
                                    </legend>
                                </div>
                                <div className="mt-4 flex">
                                    <div className="flex items-center">
                                        <input
                                            id="project-lead"
                                            name="project-lead"
                                            type="radio"
                                            className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                                        />
                                        <label htmlFor="project-lead" className="ml-3 block text-sm font-medium text-gray-700">
                                        New Project 
                                        </label>
                                    </div>
                                    <div className="flex items-center ml-5">
                                        <input
                                            id="project-lead"
                                            name="project-lead"
                                            type="radio"
                                            className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                                        />
                                        <label htmlFor="project-lead" className="ml-3 block text-sm font-medium text-gray-700">
                                        Existing Codebase
                                        </label>
                                    </div>

                                </div>
                            </fieldset>
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
                                            id="project-lead"
                                            name="project-lead"
                                            type="radio"
                                            className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                                        />
                                        <label htmlFor="project-lead" className="ml-3 block text-sm font-medium text-gray-700">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center ml-5">
                                        <input
                                            id="project-lead"
                                            name="project-lead"
                                            type="radio"
                                            className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                                        />
                                        <label htmlFor="project-lead" className="ml-3 block text-sm font-medium text-gray-700">
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
                                    <option defaultValue>I don’t know</option>
                                    <option>1 - 2</option>
                                    <option>3 - 5</option>
                                    <option>6 - 10</option>
                                    <option>10+</option>
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
                                <div className=" grid grid-cols-12">
                                    {selected_technologies.map((tech, index) => (
                                        <div key={index} style={{minHeight:48}} className="flex items-center  col-span-6  md:col-span-4 lg:col-span-3 input-select mt-4">
                                            <input

                                                id={tech.tech_name}
                                                name={tech.tech_name}
                                                type="checkbox"
                                                className="input-radio hidden"
                                            />
                                            <label htmlFor={tech.tech_name} className=" block text-sm min-w-[140px] font-medium text-gray-700 border border-1 rounded-lg text-center px-5 py-3">
                                                {tech.tech_name}
                                                <br />
                                                <span className="text-gray-500 text-xs font-normal" > {tech.tech}</span>
                                            </label>
                                        </div>
                                    ))}


                                </div>
                            </fieldset>
                            {/* Number of Developers required */}
                            <div className="col-span-12 mt-4">
                                <label htmlFor="time-commitment" className="block text-sm font-medium text-gray-700">
                                    Expected Time Commitment
                                </label>
                                <select
                                    id="time-commitment"
                                    name="time-commitment"
                                    className="mt-1 block w-full py-2 px-3 input-form"
                                >
                                    <option defaultValue>I don’t know</option>
                                    <option>3 to 6 Months</option>
                                    <option>6 to 12 Months</option>

                                    <option>More than a year</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <button className="bg-primary hover:bg-blue-600 text-white rounded-md px-7 py-3">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default contact
