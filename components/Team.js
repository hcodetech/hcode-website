import Image from 'next/image'
function Team({ name, image, bio }) {
  return (
    <div>
      <div>
        <div className="relative h-[100px]">
           
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <h1>{name}</h1>
        <p>{bio}</p>
      </div>
      
    </div>
  );
}

export default Team;
