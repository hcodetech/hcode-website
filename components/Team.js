import Image from "next/image";
import Link from "next/link";
import { linkedin_icon } from "../constants/constants";
function Team({ name, image, bio, link }) {
  return (
    <div className="                 ">
      <div className="relative h-[200px] md:h-[300px]  mb-2">
        <Image
          src={image}
          layout="fill"
        />
      </div>
      <h4 className="text-xl font-semibold ">{name}</h4>
      <p className="font-light">{bio}</p>
      <div className="p-4 cursor-pointer">
        <Link href="">
          <img src={linkedin_icon} alt="" />
        </Link>

      </div>
    </div>
  );
}

export default Team;
