import React, { useState } from "react";

import Modal from '../Modal/Modal';

import styles from "./NewUser.module.css";

import st from "../Modal/Modal.module.css";

let singleCls = st["modal-wrapper"];
let doubleCls = st["modal-wrapper"] + " " + st["hide"];
 

const NewUser = (props) => {
  const[message, setMessage] = useState('');
  const[clsName, setClsName] = useState(doubleCls); 

  const toggleClass = () => { 
    setClsName(doubleCls);
  };
  const submitUser = (event) => {    
    event.preventDefault();

    let name = event.target.elements['username'].value.trim();
    let age = event.target.elements['userage'].value;
    let text = ''; 
    
    if(!name || !age){
      text = 'Please enter a valid name and age (non-empty values).';
    }
    else if(+age < 1){
      text = 'Please enter a valid age (>0).';
    }
    setMessage(text);
    if(!text){
      event.target.reset();
      props.addUserHandler({name:name, age: age});
    }else{
      setClsName(singleCls); 
    }
  };
 

  let content = null;
  if(message)content = <Modal toggleClass={toggleClass} className={clsName}>{message}</Modal>;
   
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
