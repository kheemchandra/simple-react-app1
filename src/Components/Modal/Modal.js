import React from "react";

import styles from "./Modal.module.css";


const Modal = (props) => { 
  const changeCls = function () {
    props.toggleClass();
  }; 
  

  return (
    <div onClick={changeCls} className={props.className}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles["modal"]}
      >
        <h3>Invalid input</h3>
        <p>{props.children}</p>
        <button onClick={changeCls}>Okay</button>
      </div>
    </div>
  );
    
};

export default Modal;
