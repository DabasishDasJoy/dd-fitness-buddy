import React from "react";
import img from "../../images/dabasish.jpg";
const ActivityDetails = ({ exerciseTime }) => {
  console.log(
    "🚀 ~ file: ActivityDetails.js ~ line 4 ~ ActivityDetails ~ exerciseTime",
    exerciseTime
  );

  return (
    <div className="p-5 flex flex-col gap-5 fixed">
      {/* First component container */}
      <div className="flex flex-col gap-3">
        {/* Name & Location */}
        <div className="flex">
          <img src={img} alt="" className="rounded-2xl w-1/6" />
          <div className="m-auto">
            <h3 className="text-base font-bold">Dabasish Das Joy</h3>
            <p className="text-sm text-gray-400">Chattogram, Bangladesh</p>
          </div>
        </div>

        {/* height, weight  */}
        <div className="bg-slate-100 rounded-md flex justify-around py-2">
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

        <div>
          <h1 className="text-base font-bold mb-2">Add A Break</h1>
          <div className="bg-slate-100 py-4 px-2 rounded-xl flex justify-around">
            <button className="rounded-full bg-white p-2 font-medium">
              20s
            </button>
            <button className="rounded-full bg-white p-2 font-medium">
              10s
            </button>
            <button className="rounded-full bg-white p-2 font-medium">
              30s
            </button>
            <button className="rounded-full bg-white p-2 font-medium">
              40s
            </button>
            <button className="rounded-full bg-white p-2 font-medium">
              50s
            </button>
          </div>
        </div>
      </div>
      {/* first component end */}

      {/* exercise details  */}
      <div className="flex flex-col gap-3">
        <h1 className="text-base font-bold">Exercise Details</h1>
        <div className="bg-slate-100 p-4 rounded-xl flex justify-between items-center">
          <h4 className="text-base font-bold">Exercise time</h4>
          <p className="text-gray-400">{exerciseTime}</p>
        </div>
        <div className="bg-slate-100 p-4 rounded-xl flex justify-between items-center">
          <h4 className="text-base font-bold">Break time</h4>
          <p className="text-gray-400">200 seconds</p>
        </div>
      </div>
      <div>
        <button className="w-full bg-primary text-white py-2 rounded-md">
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default ActivityDetails;
