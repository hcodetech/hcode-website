import Image from "next/image";
function about() {
  return (
    <div className="container mx-auto">
      <div className="text-center font-poppins">
        <h6 className="font-black">About Us</h6>
        <h1>Offshore custom software development in India</h1>
        <p>
          Hcode works with People teams across the globe to turn employees into
          high performers, managers into leaders, and companies into the best
          places to work.
        </p>
        <div className="relative h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <Image
            src="/assets/img/hcode_about_us_hero.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
}

export default about;
