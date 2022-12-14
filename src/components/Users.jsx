import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";

const Users = () => {
  const API = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);

  async function getUsers() {
    let res = await axios.get(API);
    setUsers(res.data)
  }

  useEffect(() => {
    getUsers();
  }, []);
//   позволяет добавлять какие либо эффекты в зависимомсти от состояния

useEffect(()=> {
    // перед самым  исчезновением компонента можно выполнить какой ниубдь код с помощью return другой функции
    return ()=>{
        console.log("Прощай")
    }
},[])


console.log(users)
  return <div style={{display: 'flex', flexWrap: 'wrap', gap: "50px", marginLeft:"7%"}}>
    {users.map((item)=>(
        <UserCard item={item}/>
    ))}
  </div>;
};

export default Users;
