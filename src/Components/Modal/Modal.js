import React, { useState } from "react";

import styles from "./Modal.module.css";

let singleCls = styles["modal-wrapper"];
let doubleCls = styles["modal-wrapper"] + " " + styles["hide"];



const Modal = (props) => {
  const [clsName, setClsName] = useState(props.className);
  
  const changeCls = function () {
    props.nameChange({'func': setClsName, 'val': doubleCls});
    setClsName(doubleCls);
  }; 
  

  return (
    <div onClick={changeCls} className={clsName}>
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
