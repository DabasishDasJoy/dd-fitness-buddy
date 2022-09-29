import React, { useState } from "react";

const Activity = ({
  activity: { img, name, timeRequired, description },
  handleAddToList,
}) => {
  //Btn color change
  const [btnColor, setBtnColor] = useState("");

  //btn text state
  const [btnAdded, setBtnAdded] = useState("Add to List");

  return (
    <div className="card card-compact bg-[#F8F9FA] shadow-2xl">
      <figure>
        <img src={img} alt="Shoes" className="w-full md:h-[200px] h-[400px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Time required: {timeRequired} mins</p>
        <div className="card-actions justify-center">
          <button
            onClick={(e) => {
              if (btnAdded === "Add to List") {
                setBtnAdded("Added");
                e.target.style.backgroundColor = "#20C997";
                e.target.style.color = "white";
              }

              handleAddToList(timeRequired);
            }}
            className="w-full border-2 border-[#20C997] text-[#20C997] font-semibold text-lg py-1 rounded-lg mt-2 hover:bg-[#20C997] hover:text-white transition delay-75"
          >
            {btnAdded}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
