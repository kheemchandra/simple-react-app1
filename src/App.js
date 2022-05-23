import React, { useState } from "react";

import NewUser from "./Components/NewUser/NewUser";
import UserList from "./Components/UserList/UserList";

function App() {

  const [users, setUser] = useState([]);  

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

  return (
    <div>      
      <section>
        <NewUser addUserHandler={addUserHandler} />
      </section>
      <section>
        <UserList>{users}</UserList>
      </section>
      
    </div>
  );
}

export default App;
