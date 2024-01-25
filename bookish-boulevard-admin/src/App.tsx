import React, { useState, useEffect, createContext } from "react";
import RouterPages from "./components/RouterPages";
import Sidebar from "./components/Sidebar";

interface MyContextValue {
  currentDirectory: string;
  setCurrentDirectory: React.Dispatch<React.SetStateAction<string>>;

}

export const MyContext = createContext<MyContextValue | undefined>(undefined);

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDirectory, setCurrentDirectory] = useState<string>("Dashboard");

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
      <div className="flex">
        <Sidebar />
        <div className="w-full border border-red-500 h-100vh">
          <div className="h-[10%] flex justify-between items-center">
            <div>{currentDirectory}</div>
            <div>{currentTime.toLocaleString()}</div>
          </div>
          <RouterPages />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
