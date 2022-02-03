import Link from 'next/link'
function TechStack() {
    return (
        <div className="new-container   px-6  md:px-32 py-6 md:py-12 bg-primary md:bg-white text-white  md:bg-tech_stack md:min-h-[700px] bg-no-repeat">
            <div className="text-center">
                <h1 className="text-2xl lg:text-5xl font-semibold mt-10">Tech Stack</h1>
                <p className="mt-4  font-light md:w-10/12 mx-auto leading-normal">
                    Our developers have successfully executed many projects and have deep expertise in 
                    <strong> Python (Django), Java & Node JS</strong> for backend; <strong>HTML5, JS Frameworks (React JS, Angular) </strong> 
                     for frontend. We primarily code in <strong>React Native</strong> for cross platform mobile-app development. We work with most relational databases - 
                    <strong> PostgreSQL,  MSSQL etc</strong> as well as non-relational ones - <strong>Firebase, DynamoDB etc.</strong> Our team is well versed with Devops on 
                    <strong> AWS, GoogleCloud</strong> using <strong>Docker, Nginx etc.</strong>
                </p>
                <Link href="/technologies" >
                    <div className="border border-white p-2 mt-12 max-w-[150px] mx-auto cursor-pointer rounded-sm hover:bg-white hover:text-primary transform transition duration-75 ease-out">
                        Know More
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default TechStack;
