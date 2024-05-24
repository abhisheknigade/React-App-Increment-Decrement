import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // initially initialize it to 0

  // Increment, Decrement and Reset handler functions
  function decHandler() {
    setCount(count - 1);
  }

  function incHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#3a4553] flex-col gap-10">

      <div className="text-[#0398d4] font-medium text-2xl">
        Increment & Decrement
      </div>

      <div className="bg-white flex justify-center gap-12 px-5 py-2 rounded-lg text-[25px] text-[#344151]">

        <button onClick={decHandler}> - </button>
        <div>{count}</div>
        <button onClick={incHandler}> + </button>
      </div>
      
      <div className="bg-[#0398d4] text-white px-2 py-1 rounded-md text-lg ">
        <button onClick={resetHandler}> Reset </button>
      </div>
      
    </div>
  );
}

export default App;
