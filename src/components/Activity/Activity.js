import React, { useState } from "react";

const Activity = ({
  activity: { img, name, timeRequired, description },
  handleAddToList,
}) => {
  //Btn color change
  const [btnColor, setBtnColor] = useState("blue");
  //btn text state
  const [btnAdded, setBtnAdded] = useState("Add to List");

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" className="w-full h-[200px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Time required: {timeRequired} mins</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => {
              btnColor === "blue" ? setBtnColor("green") : setBtnColor("blue");
              btnAdded === "Add to List"
                ? setBtnAdded("Added")
                : setBtnAdded("Add to List");
              handleAddToList(timeRequired);
            }}
            style={{ backgroundColor: btnColor }}
            className="w-full bg-primary text-white py-2 rounded-md"
          >
            {btnAdded}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
