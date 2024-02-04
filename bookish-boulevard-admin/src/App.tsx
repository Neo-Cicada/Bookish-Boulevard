import React, { useState, useEffect, createContext } from "react";
import RouterPages from "./components/RouterPages";
import Sidebar from "./components/Sidebar";
import { useLocation } from "react-router";

interface MyContextValue {
  currentDirectory: string;
  setCurrentDirectory: React.Dispatch<React.SetStateAction<string>>;

}

export const MyContext = createContext<MyContextValue | undefined>(undefined);

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDirectory, setCurrentDirectory] = useState<string>("Dashboard");
  const location = useLocation()
  // console.log(location)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const contextValue: MyContextValue = {
    currentDirectory,
    setCurrentDirectory,
  };

  return (
    <MyContext.Provider value={contextValue}>

      {location.pathname === "/login" ? <RouterPages /> :
        <div className="flex">
          <Sidebar />
          <div className="w-full border border-red-500 max-h-[100vh]">
            <div className="h-[10%] flex justify-between items-center">
              <div>{currentDirectory}</div>
              <div>{currentTime.toLocaleString()}</div>
            </div>
            <RouterPages />
          </div>
        </div>

      }
    </MyContext.Provider>
  );
}

export default App;
