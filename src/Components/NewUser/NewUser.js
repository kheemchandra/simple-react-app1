import React, { useState } from "react";

import Modal from '../Modal/Modal';
import styles from "./NewUser.module.css";
import styles1 from "../Modal/Modal.module.css";

let singleCls = styles1["modal-wrapper"];
let doubleCls = styles1["modal-wrapper"] + " " + styles1["hide"];
//              show        hide  
const clses = [singleCls, doubleCls];

let foreign = null;

const NewUser = (props) => {
  const[message, setMessage] = useState('');
  const[clsName, setClsName] = useState(doubleCls);
  let text = '';

  const nameChange = (arr) => {
    // arr.func(arr.val);
    foreign = arr.func;
    setClsName(doubleCls);
  };
  const submitUser = (event) => {
    
    event.preventDefault();
    let name = event.target.elements['username'].value.trim();
    let age = event.target.elements['userage'].value;
    let text = '';
    let error = false;
    if(!name || !age){
      text = 'Please enter a valid name and age (non-empty values).';
      error = true;
    }
    else if(+age < 1){
      text = 'Please enter a valid age (>0).';
      error = true;
    }
    setMessage(text);
    if(!error){
      props.addUserHandler({name:name, age: age});
    }else{
      setClsName(singleCls);
      if(foreign)foreign(singleCls);
    }
  };

  
  // let clsName = (message) ? clses[0] : clses[1];

  

  let content = <p></p>;
  if(message)content = <Modal nameChange={nameChange} className={clsName}>{message}</Modal>;
  // let content = <Modal nameChange={nameChange} className={clsName}>{message}</Modal>;

  
  return (
    <div>
      {content}
      <form onSubmit={submitUser} className={styles.form}>
      <div className={styles['form-control']}>
        <label>Username</label>
        <input type="text" name='username'/>
      </div>
      <div className={styles['form-control']}>
        <label>Age(Years)</label>
        <input type="number" name='userage' />
      </div>
      <button type="submit">Add User</button>
    </form>
    </div>
  );
};

export default NewUser;
