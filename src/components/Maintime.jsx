import { useEffect } from "react";
import { useState } from "react";

const Maintime = ({ mode }) => {
  const [min, setMin] = useState(25);
  const [sec, setSec] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [focusOption, setFocusOption] = useState("Pomodoro");

  useEffect(() => {
    let timeSec;
    if (isStart) {
      timeSec = setTimeout(
        () => (sec > 0 ? setSec(sec - 1) : (setSec(59), setMin(min - 1))),
        1000
      );
      if (sec === 0 && min === 0) {
        clearTimeout(timeSec);
        setIsStart(!isStart);
      }
    }

    return () => {
      clearTimeout(timeSec);
    };
  }, [sec, min, isStart]);

  const handleStartButtonClick = () => {
    setIsStart(!isStart);
  };

  const handleClickOption = (e) => {
    setFocusOption(e.target.textContent);
    setIsStart(false);
    mode(e.target.textContent);

    if (e.target.textContent === "Pomodoro") {
      setMin(25);
      setSec(0);
    } else if (e.target.textContent === "Short Break") {
      setMin(5);
      setSec(0);
    } else if (e.target.textContent === "Long Break") {
      setMin(15);
      setSec(0);
    }
  };

  return (
    <article className="maintime">
      <div>
        <button
          onClick={handleClickOption}
          className={`maintime-option__btn ${
            focusOption === "Pomodoro" ? "focus" : ""
          }`}
        >
          Pomodoro
        </button>
        <button
          onClick={handleClickOption}
          className={`maintime-option__btn ${
            focusOption === "Short Break" ? "focus" : ""
          }`}
        >
          Short Break
        </button>
        <button
          onClick={handleClickOption}
          className={`maintime-option__btn ${
            focusOption === "Long Break" ? "focus" : ""
          }`}
        >
          Long Break
        </button>
      </div>

      <div className="maintime-stopwatch">
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
      </div>
      <div>
        <button
          onClick={handleStartButtonClick}
          className={`maintime-start__btn ${isStart ? "start" : ""}`}
        >
          {isStart ? "Stop" : "Start"}
        </button>
      </div>
    </article>
  );
};

export default Maintime;
