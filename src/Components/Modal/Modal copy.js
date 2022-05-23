import React from "react";

import styles from './Modal.module.css';

const Modal = (props) => {
  let flag=false;

  const toggleModal = (event) => {
    flag = !flag;
    console.log(flag);
    
  };

  return (
    <div onClick={toggleModal} className={`${styles['modal-wrapper']} ${flag ? styles['hide'] : '' }`}>
      <div className={styles.modal}>
        <h3>Invalid input</h3>
        <p>Please enter a valid age (>0).</p>
        <button >Okay</button>
      </div>
    </div>
  );
};

export default Modal;
