import Link from "next/link";
import { linkedin_icon } from "../constants/constants";
function Team({ name, image, bio, link }) {
  return (
    <div >
      <div className='relative  lg:h-[280px]  mb-2'>
        <img className='object-cover' src={image} layout='fill' />
        <div className='p-2 absolute bottom-4 left-2 cursor-pointer bg-gray-100 rounded-full hover:bg-white'>
          <a href={link} target='_blank'>
            <img src={linkedin_icon} alt={link} className='w-4 md:w-full' />
          </a>
        </div>
      </div>
      <h4 className='text-lg md:text-xl font-semibold  '>
        {name}
      </h4>
      <p className='text-sm md:text-base font-light'>{bio}</p>
    </div>
  );
}

export default Team;
