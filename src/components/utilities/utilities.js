const addBreakTimeToDb = (breakTime) => {
  const totalBreakTime = getSavedBreakTime();

  totalBreakTime["breakTime"] = breakTime;
  localStorage.setItem("break-time", JSON.stringify(totalBreakTime));
};

const getSavedBreakTime = () => {
  const savedBreakTime = localStorage.getItem("break-time");
  let breakTime = {};
  if (savedBreakTime) {
    breakTime = JSON.parse(savedBreakTime);
  }

  return breakTime;
};

export { addBreakTimeToDb, getSavedBreakTime };
