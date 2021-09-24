import Link from 'next/link'
function CTA() {
    return (
        <section className="new-container ">
            <div className="grid grid-cols-12 bg-primary text-white rounded-lg bg-cta_circle bg-left bg-cover md:bg-contain bg-repeat-x py-10 ">
                <div className="col-span-12 md:col-span-7 lg:w-1/2  px-10  ">
                    <h1 className="text-2xl font-semibold">
                        Hire Dedicated Developers
                    </h1>
                    <p className=" text-lg mt-2">
                        Get our top talent working for you right away
                    </p>
                </div>
                <div className="col-span-12 md:col-span-5">
                    <Link href='/contact' >
                        <button className="p-4 whitespace-nowrap ml-10 md:mr-10 mt-6 cursor-pointer shadow rounded-sm bg-white text-primary px-10 hover:bg-gray-100 hover:shadow-lg hover:text-primary transform transition duration-75 ease-out md:float-right">
                            Hire Now !
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CTA
