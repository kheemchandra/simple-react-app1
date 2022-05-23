import React from "react";

import Modal from "../Modal/Modal";

import styles from "./NewUser.module.css";


const NewUser = (props) => {

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
    props.errorHandler(text);
    if(!error){
      props.addUserHandler({name:name, age: age});
    }
    

  };

  return (
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
  );
};

export default NewUser;
