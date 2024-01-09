const Portfolio_skelton = () => {
    return(
              <div className="new-container">
          <div className="w-full h-[400px] border  rounded-md mx-auto mt-10">
            <div className="flex animate-pulse flex-row h-full justify-between">
              <div className="flex flex-col w-full space-y-3 m-10">
                <div className="w-full bg-gray-300 h-10 rounded-md "></div>
                <div className="w-full bg-gray-300 h-20 rounded-md "></div>
                <div className="w-24 bg-gray-300 h-4 rounded-md "></div>
              </div>
              <div className="w-full bg-gray-300 hidden sm:block h-full"></div>
            </div>
          </div>
          <div className="w-full h-[400px] border   rounded-md mx-auto my-10">
            <div className="flex animate-pulse flex-row h-full justify-between">
              <div className="flex flex-col w-full space-y-3 m-10">
                <div className="w-full bg-gray-300 h-10 rounded-md"></div>
                <div className="w-full bg-gray-300 h-20 rounded-md"></div>
                <div className="w-24 bg-gray-300 h-4 rounded-md"></div>
              </div>
              <div className="w-full hidden sm:block bg-gray-300 h-full"></div>
            </div>
          </div>
        </div>
    )
}
export default Portfolio_skelton;