import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const [secsCount, setSecsCount] = useState(0);
  const [minsCount, setMinsCount] = useState(0);
  const timerRef = useRef(null);
  const countRef = useRef(0);

  function startTimer() {
    timerRef.current = null;
    timerRef.current = setInterval(() => {
      countRef.current += 1;
      setSecsCount(countRef.current);
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer() {
    setSecsCount(0);
    clearInterval(timerRef.current);
    timerRef.current = null;
    countRef.current = 0;
  }

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    if (countRef.current >= 60) {
      countRef.current = 0;
      setSecsCount(countRef.current);
      setMinsCount(countRef.current + 1);
    }
  }, [secsCount]);

  return (
    <div className="App">
      <p>Timer</p>
      <span>
        {minsCount} mins {secsCount} secs
      </span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
