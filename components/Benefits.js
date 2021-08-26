import { work_with_us_benefits } from "../constants/constants";

function Benefits(props) {
  return (
    <div className={props.background ? "bg-gray-100" :""}>
      <h1 className="text-4xl font-semibold text-center my-12">
        Perks and benefits <br /> we love most
      </h1>

      <div className="grid grid-cols-3 gap-8 p-8">
        {work_with_us_benefits.map(
          ({ image, heading, descripition }, index) => (
            <div key={index}>
              <div className="w-16 h-16 bg-blue-200 rounded-full" />
              <h3 className="text-xl font-semibold py-2"> {heading}</h3>
              <p className="font-light">{descripition}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Benefits;
