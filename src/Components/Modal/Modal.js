import React, { useState } from "react";

import styles from "./Modal.module.css";

const Modal = (props) => {
  const [clsName, setClsName] = useState("");

  const changeCls = function () {
    setClsName((prevClsName) => {
      return prevClsName ? "" : styles["hide"];
    });
  };

  if (props.children) {
    // changeCls();

    return (
      <div
        id="modal-wrapper"
        onClick={changeCls}
        className={styles["modal-wrapper"] + " " + clsName}
      >
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
  } else return null;
};

export default Modal;
