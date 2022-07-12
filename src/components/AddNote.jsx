import React from "react";
import { useState } from "react";

function AddNote({ setAdd, setData }) {
  const [title, setTitle] = useState("");
  const [cycle, setCycle] = useState("1");

  const handleCycleChange = (e) => {
    setCycle(e.target.value);
  };

  const handleCycleButtonClick = (e) => {
    const event = e.target.textContent;
    if (event === "+") {
      setCycle(Number(cycle) + 1);
    } else if (event === "-" && Number(cycle) > 1) {
      setCycle(Number(cycle) - 1);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCancleButtononClick = () => {
    setAdd(false);
  };

  const handleSaveButtononClick = () => {
    setData((prev) => [...prev, { title: title, cycle: cycle }]);
    setAdd(false);
  };

  return (
    <div className="addnote-wrapper">
      <div className="addnote-inner">
        <input
          onChange={handleTitleChange}
          value={title}
          className="addnote-input__title"
          type="text"
          placeholder="What are you working on?"
        />
        <span className="addnote-text"> How many? </span>
        <div>
          <input
            onChange={handleCycleChange}
            value={cycle}
            className="addnote-input__cycle"
            type="number"
            min={1}
            max={99}
          />
          <button
            onClick={handleCycleButtonClick}
            className="addnote-cycle__btn"
          >
            +
          </button>
          <button
            onClick={handleCycleButtonClick}
            className="addnote-cycle__btn"
          >
            -
          </button>
        </div>
      </div>

      <div className="addnote-setting__btn">
        <button
          onClick={handleCancleButtononClick}
          className="addnote-btn__cancle"
        >
          Cancle
        </button>
        <button onClick={handleSaveButtononClick} className="addnote-btn__save">
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
