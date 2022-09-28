import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";

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
        {activites.map((activity) => (
          <Activity activity={activity}></Activity>
        ))}
      </div>
      <div className="border border-red-400 col-span-3">Calcultion</div>
    </div>
  );
};

export default Main;
