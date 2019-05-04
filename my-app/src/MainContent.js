import React from "react";

function MainContent(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <label className={props.item.completed && "incomplete"}>
        {props.item.text}
      </label>
    </div>
  );
}

export default MainContent;
