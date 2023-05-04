import React from "react";
import "./InputEstilizado.css";


export default (props) => {
  return (
    <div className="Pai">
      <div className="InputBox">
        <input type="text" required="required" />
        <span>First Name</span>
      </div>
    </div>
  );
};
