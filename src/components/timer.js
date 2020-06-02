import React, { useState, useEffect } from "react";

function WatchCount() {
  const [count, setCount] = useState(0);
  const [pauseState, setPause] = useState(false);
  
  useEffect(() => {
    let timer;
    if (!pauseState) {
      timer = setTimeout(() => {
       setCount(count => count + 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  });
  const reset = () => setCount(prev => 0);
  const pause = () => setPause(prev => !prev);
 
  return (
    <div className="timer">
      <h4>You have used {count} seconds on this website.</h4>
      <button className="m-2 btn-primary btn" onClick={() => reset()}>
        Reset
      </button>
      <button className="m-2 btn-danger btn" onClick={() => pause()}>
        {pauseState === true ? "Start" : "Pause"}
      </button>
    </div>
  );
}
export default WatchCount;

