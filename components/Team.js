import Link from "next/link";
import { linkedin_icon } from "../constants/constants";
function Team({ name, image, bio, link }) {
  return (
    <div className="                 ">
      <div className="relative h-[200px] md:h-[300px]  mb-2">
        <img
          src={image}
          layout="fill"
        />
        <div className="p-4 absolute bottom-8 left-2 cursor-pointer bg-gray-100 rounded-full hover:bg-white" >
        <a  href={link} target="_blank" >
          <img src={linkedin_icon} alt="" />
        </a>

      </div>
      </div>
      <h4 className="text-xl font-semibold ">{name}</h4>
      <p className="font-light">{bio}</p>
      
    </div>
  );
}

export default Team;
