import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../../images/dabasish.jpg";

const ActivityDetails = ({ handleAddBreak, breakTime, exerciseTime }) => {
  const notify = () => toast("Congrats! You have completed!");
  return (
    <div className="lg:p-5 md:p-16 sm:p-5 flex flex-col gap-5 lg:fixed">
      {/* First component container */}
      <div className="flex flex-col gap-3">
        {/* Name & Location */}
        <div className="flex sm:gap-10 md:gap-2">
          <img src={img} alt="" className="rounded-2xl w-1/6" />
          <div className="md:m-auto sm:flex sm:flex-col sm:justify-center">
            <h3 className="text-base font-bold">Dabasish Das Joy</h3>
            <p className="text-sm text-gray-400">Chattogram, Bangladesh</p>
          </div>
        </div>

        {/* height, weight  */}
        <div className="bg-slate-200 rounded-md flex justify-around py-2">
          <div className="text-center">
            <h1 className="font-bold text-2xl">
              75<span className="text-xs text-gray-400">Kg</span>
            </h1>
            <p className="text-gray-501 font-medium">Weight</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-2xl">
              6.4<span className="text-xs text-gray-400">Ft</span>
            </h1>
            <p className="text-gray-501 font-medium">Height</p>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-2xl">
              25<span className="text-xs text-gray-400">Yrs</span>
            </h1>
            <p className="text-gray-501 font-medium">Age</p>
          </div>
        </div>

        <div>
          <h1 className="text-base font-bold mb-2">Add A Break</h1>
          <div className="bg-slate-200 py-4 px-2 rounded-xl flex justify-around gap-2">
            <button
              onClick={(e) => handleAddBreak(e)}
              value={10}
              className="rounded-full bg-white hover:bg-[#1BAB81] hover:text-white p-1 font-medium"
            >
              10m
            </button>

            <button
              onClick={(e) => handleAddBreak(e)}
              value={20}
              className="rounded-full bg-white hover:bg-[#1BAB81] hover:text-white p-1 font-medium"
            >
              20m
            </button>
            <button
              onClick={(e) => handleAddBreak(e)}
              value={30}
              className="rounded-full bg-white hover:bg-[#1BAB81] hover:text-white  p-1 font-medium"
            >
              30m
            </button>
            <button
              onClick={(e) => handleAddBreak(e)}
              value={40}
              className="rounded-full bg-white hover:bg-[#1BAB81] hover:text-white p-1 font-medium"
            >
              40m
            </button>
            <button
              onClick={(e) => handleAddBreak(e)}
              value={50}
              className="rounded-full bg-white hover:bg-[#1BAB81] hover:text-white p-1 font-medium"
            >
              50m
            </button>
          </div>
        </div>
      </div>
      {/* first component end */}

      {/* exercise details  */}
      <div className="flex flex-col gap-3">
        <h1 className="text-base font-bold">Exercise Details</h1>
        <div className="bg-slate-200 p-4 rounded-xl flex justify-between items-center">
          <h4 className="text-base font-bold">Exercise time</h4>
          <p className="text-gray-400 font-semibold">{exerciseTime} Minutes</p>
        </div>
        <div className="bg-slate-200 p-4 rounded-xl flex justify-between items-center">
          <h4 className="text-base font-bold">Break time</h4>
          <p className="text-gray-400 font-semibold">{breakTime} Minutes</p>
        </div>
      </div>
      <div>
        <button
          onClick={notify}
          className="w-full bg-[#20C997] text-white py-2 rounded-md hover:bg-bg-[#1BAB hover:text-white81]"
        >
          Activity Completed
        </button>
        <ToastContainer position="bottom-left" />
      </div>
    </div>
  );
};

export default ActivityDetails;
