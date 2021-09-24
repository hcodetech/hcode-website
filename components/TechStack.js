import Link from 'next/link'
function TechStack() {
    return (
        <div className="new-container text-black md:text-white px-6  md:px-32 py-6 md:py-12  md:bg-tech_stack md:min-h-[700px] bg-no-repeat">
            <div className="text-center">
                <h1 className="text-2xl lg:text-5xl font-semibold mt-10">Tech Stack</h1>
                <p className="mt-4  font-light md:w-10/12 mx-auto leading-normal">
                    Our deveopers have successfully executed many projects and have deep expertise in 
                    <strong> Python (Django), Java & Node JS</strong> for backend; <strong>HTML5, JS Frameworks (React JS, Angular) </strong> 
                     for frontend. We primarily code in <strong>React Native</strong> for mobile development. We work with most relational databses - 
                    <strong> PostgreSQL,  MSSQL etc</strong> and non relational - <strong>Firebase,  DyanmoDB etc.</strong> The team is well wersed with Devops on 
                    <strong> AWS, GoogleCloud</strong> using <strong>Docker, Nginx etc.</strong>
                </p>
                {/* <Link href="/technologies" >
                    <div className="border border-white p-2 mt-12 max-w-[150px] mx-auto cursor-pointer rounded-sm hover:bg-white hover:text-primary transform transition duration-75 ease-out">
                        Know More
                    </div>
                </Link> */}
            </div>
        </div>
    );
}

export default TechStack;
