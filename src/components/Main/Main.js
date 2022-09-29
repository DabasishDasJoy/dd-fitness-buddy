import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import ActivitiDetails from "../ActivityDetails/ActivityDetails";
import Blog from "../Blog/Blog";

const Main = () => {
  // ---------------------> Activity state <--------------------------
  const [activites, setActivites] = useState([]);

  // ---------------------> Activity side effects <-------------------
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivites(data));
  }, []);

  // ------------->Exercercise time state handle <-----------
  const [excerciseTime, setExerciseTime] = useState(0);

  // ---------------->Handle Add To List<----------------
  const handleAddToList = (timeRequired) => {
    setExerciseTime(excerciseTime + timeRequired);
  };

  return (
    <div className="grid grid-cols-12 mt-16">
      {/* ----------> Activities<---------- */}
      <div className="bg-slate-100 col-span-9 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-20">
        {/* ---------->Activity<---------  */}
        {activites.map((activity) => (
          <Activity
            activity={activity}
            key={activity.id}
            handleAddToList={handleAddToList}
          ></Activity>
        ))}
        <Blog></Blog>
      </div>
      {/* --------------->Activity Info<---------- */}
      <div className="col-span-3">
        <ActivitiDetails exerciseTime={excerciseTime}></ActivitiDetails>
      </div>
    </div>
  );
};

export default Main;
