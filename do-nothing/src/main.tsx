import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import InfoIcon from "@mui/icons-material/Info";
import "./App.css";

// Optional: move ChangeDuration here too if you want single file
const ChangeDuration = ({ onUpdate }: { onUpdate: (value: number) => void }) => (
    <select
        className="duration-select"
        onChange={(e) => onUpdate(parseInt(e.target.value) * 60)}
    >
      {Array.from({ length: 55 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
      ))}
    </select>
);

const App = () => {
  const [timer, setTimer] = useState(60);
  const [isStart, setStart] = useState(false);
  const [isPaused, setPaused] = useState(false);
  const [initialTime, setInitialTime] = useState(60);

  useEffect(() => {
    if (!isStart || isPaused) return;
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setStart(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isStart, isPaused]);

  const timeConversion = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  return (
      <div className="app-container">
        <button className="icon-button" onClick={() => alert("Do Nothing Timer")}>
          <InfoIcon className="info-icon" />
        </button>

        {isStart ? (
            <div className="timer-display">
              <h1
                  className={`timer ${!isPaused ? "pulse" : ""}`}
                  onClick={() => setPaused((p) => !p)}
              >
                {timeConversion(timer)}
              </h1>
              <p>{isPaused ? "Paused ⏸️" : "Enjoy the moment 🧘"}</p>
              <button className="stop-button" onClick={() => {
                setStart(false);
                setPaused(false);
                setTimer(initialTime);
              }}>
                Stop
              </button>
            </div>
        ) : (
            <div className="opener">
              <h1 className="title">Do Nothing</h1>
              <h2 className="subtitle">
                I want to do nothing for <ChangeDuration onUpdate={(v) => {
                setTimer(v);
                setInitialTime(v);
              }} /> minutes
              </h2>
              <button className="start-button" onClick={() => setStart(true)}>
                Start Doing Nothing
              </button>
            </div>
        )}
      </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);
