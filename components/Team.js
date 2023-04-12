import { linkedin_icon } from "../constants/constants";
function Team({ name, image, image_webp, bio, link, title }) {
  return (
    <div className="mb-5 w-[227px] mx-auto">
      <div className="relative   mb-2">
        <picture>
          <source className="object-cover md:h-[248px] w-[227px]" 
          type="image/webp"
          srcSet={image_webp} 
          />
        <img
          className="object-cover md:h-[248px] w-[227px]"
          src={image}
          layout="fill"
          loading="lazy"
          height='280px'
          width='220'
          alt='Leadership team and mentors in hcode technologies'
        />

        </picture>
    
        <div className="p-2 absolute bottom-4  left-2 cursor-pointer bg-gray-100 rounded-full hover:bg-white">
          <a href={link} target="_blank">
            <img src={linkedin_icon} alt={link} className="w-4 md:w-full" width='15px' height='15px' loading='lazy' />
          </a>
        </div>
      </div>
      <div className="md:w-[227px]">
        <h4 className="text-lg md:text-xl font-semibold  ">{name}</h4>
        <h6 className="text-md font-medium text-gray-400">{title}</h6>
        <p className="text-sm md:text-base font-light">{bio}</p>
      </div>
    </div>
  );
}

export default Team;
