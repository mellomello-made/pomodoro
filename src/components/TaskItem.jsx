import React from "react";

function TaskItem({ title, cycle }) {
  return (
    <div className="taskitem-wrapper">
      <div className="taskitem-side"></div>
      <div className="taskitem-body">
        <div>
          <spa className="taskitem-title"> {title} </spa>
        </div>
        <div>
          <span className="taskitem-cycle__front">
            0 <span className="taskitem-cycle__back"> /{cycle}</span>
          </span>
          <button className="tasks-menu__btn inti"> $ </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
