

export function Blogs({data}){
    return (
      <div className="bg-white pt-5 pb-20  ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h4 className="font-poppins text-[26px] font-semibold leading-8 sm:text-4xl">
              Blogs

            </h4>
          </div>
          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:h-[450px] ">
            {data.map((post) => (
              <a href={post.href} key={post.href}>
                <article
                  key={post.id}
                  className="flex flex-col items-start duration-100  hover:scale-105"
                >
                  <div className="relative  w-full">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="aspect-[16/9] w-full  rounded-md bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] lg:h-[300px]"
                    />
                  </div>
                  <div className="max-w-xl">
                    <div className="group relative">
                      <h3 className="mt-4 text-[20px] font-semibold leading-6 text-gray-900 group-hover:text-primary">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-3 line-clamp-3 text-[17px] leading-6 text-gray-600 px-2 -ml-2">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }