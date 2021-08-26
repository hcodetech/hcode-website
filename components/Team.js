import Image from "next/image";
function Team({ name, image, bio }) {
  return (
    <div className="                 ">
      <div className="relative h-[200px] md:h-[300px]  mb-2">
        <Image
          src={image}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <h4 className="text-xl font-semibold ">{name}</h4>
      <p className="font-light">{bio}</p>
    </div>
  );
}

export default Team;
