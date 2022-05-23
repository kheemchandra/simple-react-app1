import React, { useState } from "react";

import NewUser from "./Components/NewUser/NewUser";
import UserList from "./Components/UserList/UserList";
import Modal from "./Components/Modal/Modal";

function App() {
  let dummyUsers = [
    {id: '3', name: 'Sobhan Singh', age: 45},
    {id: '2', name: 'Munim Ram', age: 20},
    {id: '1', name: 'Khajan Pal', age: 32},
  ];

  const [users, setUser] = useState([]);  
  const [error, setError] = useState('');

  const addUserHandler = (user) => {
    setUser((prevUsers) => {
      let updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        id: Math.random().toString(),
        name: user.name,
        age: user.age,
      });
      return updatedUsers;
    });
  };
  const errorHandler = (text) =>{
    setError(text);
    console.log('error:=>', error);
  }

  return (
    <div>      
      <section>
        <NewUser errorHandler={errorHandler} addUserHandler={addUserHandler} />
      </section>
      <section>
        <UserList>{users}</UserList>
      </section>
      <section>
        <Modal style={{display: 'none'}}>{error}</Modal>
      </section>
    </div>
  );
}

export default App;
