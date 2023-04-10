import { how_to_get_started } from "../constants/constants"

function Process() {
    return (
        <div className="md:new-container">
            <div className="px-5 text-center">
                <h2 className="text-center text-3xl lg:text-4xl font-semibold ">{how_to_get_started.heading}</h2>
                <p className="py-3 lg:w-7/12 mx-auto ">{how_to_get_started.descripition}</p>
            </div>
            <div className=" md:m-4 bg-gray-50 grid grid-cols-12">
                <div className="bg-green-100 lg:max-w-[250px] min-w-[250px]   col-span-12 md:col-span-4 lg:col-span-3" >
                    <h3 className="text-2xl font-semibold p-5 "> {how_to_get_started.steps[0].heading}</h3>
                    <div className={`max-w-[50px]  min-h-[5px] max-h-[5px] m-5 bg-black`}></div>
                </div>
                <p className="px-4 py-4 lg:px-10 font-regular lg:text-lg my-auto col-span-12 md:col-span-8 lg:col-span-9 ">
                    {how_to_get_started.steps[0].descripition}
                </p>
            </div>
            <div className=" md:m-4 bg-gray-50 grid grid-cols-12">
                <div className={` bg-yellow-100 lg:max-w-[250px] min-w-[250px]   col-span-12 md:col-span-4 lg:col-span-3`} >
                    <h3 className="text-2xl font-semibold p-5 "> {how_to_get_started.steps[1].heading}</h3>
                    <div className={`max-w-[100px]  min-h-[5px] max-h-[5px] m-5 bg-black`}></div>
                </div>
                <p className="px-4 py-4 lg:px-10 font-regular lg:text-lg my-auto col-span-12 md:col-span-8 lg:col-span-9 ">
                    {how_to_get_started.steps[1].descripition}
                </p>
            </div>
            <div className=" md:m-4 bg-gray-50 grid grid-cols-12">
                <div className={` bg-blue-100 lg:max-w-[250px] min-w-[250px]   col-span-12 md:col-span-4 lg:col-span-3`} >
                    <h3 className="text-2xl font-semibold p-5 "> {how_to_get_started.steps[2].heading}</h3>
                    <div className={`max-w-[150px]  min-h-[5px] max-h-[5px] m-5 bg-black`}></div>
                </div>
                <p className="px-4 py-4 lg:px-10 font-regular lg:text-lg my-auto col-span-12 md:col-span-8 lg:col-span-9 ">
                    {how_to_get_started.steps[2].descripition}
                </p>
            </div>
        </div>
    )
}

export default Process
