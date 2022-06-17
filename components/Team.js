import { linkedin_icon } from "../constants/constants";
function Team({ name, image, bio, link, title }) {
  return (
    <div className="mb-5 w-[267px] mx-auto">
      <div className="relative   mb-2">
        <img
          className="object-cover md:h-[278px] w-[267px]"
          src={image}
          layout="fill"
        />
        <div className="p-2 absolute bottom-4  left-2 cursor-pointer bg-gray-100 rounded-full hover:bg-white">
          <a href={link} target="_blank">
            <img src={linkedin_icon} alt={link} className="w-4 md:w-full" />
          </a>
        </div>
      </div>
      <div className="md:w-[267px]">
        <h4 className="text-lg md:text-xl font-semibold  ">{name}</h4>
        <h6 className="text-md font-medium text-gray-400">{title}</h6>
        <p className="text-sm md:text-base font-light">{bio}</p>
      </div>
    </div>
  );
}

export default Team;
