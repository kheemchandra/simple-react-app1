import React, { useState } from "react";

import User from "../User/User";

import styles from "./UserList.module.css";

const UserList = (props) => {
  
  let isEmpty = true;
  
  let users = props.children.map((user) => {
    return <User key={user.id}>{`${user.name} (${user.age} years old)`}</User>;
  });
  
  if(users.length){isEmpty = false;}
  let clsName = (isEmpty) ? 'no-users' : 'users-list';
  return <ul className={styles[clsName]}>{users}</ul>;
};

export default UserList;
