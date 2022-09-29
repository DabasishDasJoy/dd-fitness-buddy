import React from "react";

const Activity = ({ activity: { img, name, timeRequired, description } }) => {
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
          <button className="w-full bg-primary text-white py-2 rounded-md">
            Add to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
