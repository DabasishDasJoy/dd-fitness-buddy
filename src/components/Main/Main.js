import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import ActivitiDetails from "../ActivityDetails/ActivityDetails";
import Blog from "../Blog/Blog";
import { addBreakTimeToDb, getSavedBreakTime } from "../utilities/utilities";

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
  const [exerciseTime, setExerciseTime] = useState(0);
  console.log(
    "🚀 ~ file: Main.js ~ line 20 ~ Main ~ exerciseTime",
    exerciseTime
  );

  // ---------------->Handle Add To List<----------------
  const handleAddToList = (timeRequired) => {
    setExerciseTime(exerciseTime + timeRequired);
  };

  // ------------Add to break state ------
  const [breakTime, setBreakTime] = useState(0);

  // -------------Handle Add Break -----------
  const handleAddBreak = (e) => {
    let currentBreakTime = e.target.value;
    setBreakTime(currentBreakTime);
    addBreakTimeToDb(currentBreakTime);
  };

  // Show saved break time on load
  useEffect(() => {
    const { breakTime } = getSavedBreakTime();
    setBreakTime(breakTime);
  }, [activites]);

  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 mt-16">
      {/* ----------> Activities<---------- */}
      <div className="lg:col-span-9 col-span-full bg-[#FFFFFF] lg:order-none order-2">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:p-20 md:p-10 p-5">
          {/* ---------->Activity<---------  */}
          {activites.map((activity) => (
            <Activity
              activity={activity}
              key={activity.id}
              handleAddToList={handleAddToList}
            ></Activity>
          ))}
        </div>
        <Blog></Blog>
      </div>

      {/* --------------->Activity Info<---------- */}
      <div className="md:col-span-3 lg:order-none order-1 bg-[#F8F9FA]">
        <ActivitiDetails
          handleAddBreak={handleAddBreak}
          breakTime={breakTime}
          exerciseTime={exerciseTime}
        ></ActivitiDetails>
      </div>
    </div>
  );
};

export default Main;
