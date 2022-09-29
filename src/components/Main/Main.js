import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import ActivitiDetails from "../ActivityDetails/ActivityDetails";

const Main = () => {
  // ---------------------> Activity state <--------------------------
  const [activites, setActivites] = useState([]);
  // ---------------------> Activity side effects <-------------------
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivites(data));
  }, []);
  return (
    <div className="grid grid-cols-12 mt-16">
      {/* ----------> Activities<---------- */}
      <div className="bg-slate-100 col-span-9 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-20">
        {/* ---------->Activity<---------  */}
        {activites.map((activity) => (
          <Activity activity={activity}></Activity>
        ))}
      </div>
      {/* --------------->Activity Info<---------- */}
      <div className="col-span-3">
        <ActivitiDetails></ActivitiDetails>
      </div>
    </div>
  );
};

export default Main;
