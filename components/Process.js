import { how_to_get_started } from "../constants/constants"

function Process() {
    return (
        <section className="new-container">
            <div className="text-center">
                <h1 className="text-center text-2xl lg:text-5xl font-semibold ">{how_to_get_started.heading}</h1>
                <p className="py-3 lg:w-7/12 mx-auto">{how_to_get_started.descripition}</p>
            </div>
            {/* {data.steps.map(({ color, width, heading, descripition }, index) => (
                <div key={index} className=" m-4 bg-gray-50 grid grid-cols-12">
                    <div className={` ${color} bg-green-100 lg:max-w-[250px] min-w-[250px]   col-span-12 lg:col-span-3`} >
                        <h2 className="text-2xl font-semibold p-5 "> {heading}</h2>
                        <div className={`max-w-[40px] ${width} min-h-[5px] m-5 bg-black`}></div>
                    </div>w
                    <p className="px-4 py-4 lg:px-10 font-regular lg:text-lg my-auto col-span-12 lg:col-span-9 ">
                        {descripition}
                    </p>
                </div>
            ))} */}
            <div className=" m-4 bg-gray-50 grid grid-cols-12">
                <div className={` bg-green-100 lg:max-w-[250px] min-w-[250px]   col-span-12 lg:col-span-3`} >
                    <h2 className="text-2xl font-semibold p-5 "> {how_to_get_started.steps[0].heading}</h2>
                    <div className={`max-w-[50px]  min-h-[5px] max-h-[5px] m-5 bg-black`}></div>
                </div>
                <p className="px-4 py-4 lg:px-10 font-regular lg:text-lg my-auto col-span-12 lg:col-span-9 ">
                    {how_to_get_started.steps[0].descripition}
                </p>
            </div>
            <div className=" m-4 bg-gray-50 grid grid-cols-12">
                <div className={` bg-yellow-100 lg:max-w-[250px] min-w-[250px]   col-span-12 lg:col-span-3`} >
                    <h2 className="text-2xl font-semibold p-5 "> {how_to_get_started.steps[1].heading}</h2>
                    <div className={`max-w-[100px]  min-h-[5px] max-h-[5px] m-5 bg-black`}></div>
                </div>
                <p className="px-4 py-4 lg:px-10 font-regular lg:text-lg my-auto col-span-12 lg:col-span-9 ">
                    {how_to_get_started.steps[1].descripition}
                </p>
            </div>
            <div className=" m-4 bg-gray-50 grid grid-cols-12">
                <div className={` bg-blue-100 lg:max-w-[250px] min-w-[250px]   col-span-12 lg:col-span-3`} >
                    <h2 className="text-2xl font-semibold p-5 "> {how_to_get_started.steps[2].heading}</h2>
                    <div className={`max-w-[150px]  min-h-[5px] max-h-[5px] m-5 bg-black`}></div>
                </div>
                <p className="px-4 py-4 lg:px-10 font-regular lg:text-lg my-auto col-span-12 lg:col-span-9 ">
                    {how_to_get_started.steps[2].descripition}
                </p>
            </div>
        </section>
    )
}

export default Process
