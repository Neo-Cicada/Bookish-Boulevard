import React, { useState, useEffect } from "react";
import RouterPages from "./components/RouterPages"
import Sidebar from "./components/Sidebar"
function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full border border-red-500 h-100vh">
          <div className="h-[10%] flex justify-between items-center">
            <div>Name</div>
            <div>{currentTime.toLocaleString()}</div>
          </div>
          <RouterPages />
        </div>

      </div>

    </>
  )
}

export default App
