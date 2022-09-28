import React from "react";
import img from "../../images/dabasish.jpg";
const ActivityDetails = () => {
  return (
    <div className="p-5">
      <div>
        {/* Name & Location */}
        <div className="flex">
          <img src={img} alt="" className="rounded-2xl w-1/6" />
          <div className="m-auto">
            <h3 className="text-base font-bold">Dabasish Das Joy</h3>
            <p className="text-sm text-gray-400">Chattogram, Bangladesh</p>
          </div>
        </div>

        {/* height, weight  */}
        <div className="bg-slate-100 rounded-md flex justify-around">
          <div className="text-center">
            <h1 className="font-bold text-2xl">
              75<span className="text-xs text-gray-400">Kg</span>
            </h1>
            <p className="text-gray-500 font-medium">Weight</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-2xl">
              6.4<span className="text-xs text-gray-400">Ft</span>
            </h1>
            <p className="text-gray-500 font-medium">Height</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-2xl">
              25<span className="text-xs text-gray-400">Yrs</span>
            </h1>
            <p className="text-gray-500 font-medium">Age</p>
          </div>
        </div>

        <div></div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ActivityDetails;
