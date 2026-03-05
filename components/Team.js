import { linkedin_icon } from "../constants/constants";
import Link from "next/link";

function Team({ name, image, image_webp, bio, link, designation, bioLink }) {
  return (
    <div className="mb-5 w-full  px-4 sm:px-0 mx-auto">
      <div className="relative text-center mx-auto  mb-2">
        <picture>
          <source
            type="image/webp"
            srcSet={image_webp}
            media="(min-width:250px)"
          />
          <img
            className="object-cover h-[360px] md:h-[270px] w-full min-w-full  lg:px-0 "
            src={image}
            layout="fill"
            loading="lazy"
            height="280px"
            width="220"
            alt={`${name} - Hcode Technologies`}
          />
        </picture>

        <div className="p-2 absolute bottom-4 left-7 lg:left-2 cursor-pointer bg-gray-100 rounded-full hover:bg-white">
          <a href={link} target="_blank">
            <img
              src={linkedin_icon}
              alt={link}
              className="w-4 md:w-full"
              width="15px"
              height="15px"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div className="w-full px-2 text-center mx-auto">
        {bioLink ? (
          <Link href={bioLink}>
            <a className="text-lg md:text-xl font-semibold hover:text-primary transition-colors cursor-pointer">
              <h4>{name}</h4>
            </a>
          </Link>
        ) : (
          <h4 className="text-lg md:text-xl font-semibold  ">{name}</h4>
        )}
        <h6 className="text-md font-medium text-gray-400">{designation}</h6>
        <p
          dangerouslySetInnerHTML={{ __html: bio }}
          className="text-sm md:text-base pt-1 font-light"
        ></p>
      </div>
    </div>
  );
}

export default Team;
