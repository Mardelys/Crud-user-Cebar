import React, { useEffect, useState } from "react";
import { User } from "../components/User";
import { AddUser } from "../components/AddUser";
import { connect } from "mongoose";



export default function Home() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())
         .then((data) => setUsers(data))
         .catch((error) => console.log(error));
   };

   const onAdd = async (name, email, username, phone, website) => {
      await fetch("https://jsonplaceholder.typicode.com/users", {
         method: "POST",
         body: JSON.stringify({
            name: name,
            username: username,
            email: email,
            phone: phone,
            website:website
         }),
         headers: {
            "Content-type": "application/json; charset=UTF-8"
         }
      })
         .then((response) => {
            if (response.status !== 201) {
               return;
            } else {
               return response.json();
            }
         })
         .then((data) => {
            setUsers((users) => [...users, data]);
         })
         .catch((error) => console.log(error));
   };

   const onEdit = async (id,name, email, username, phone, website) => {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
         method: "PUT",
         body: JSON.stringify({
            name: name,
            username: username,
            email: email,
            phone: phone,
            website:website
         }),
         headers: {
            "Content-type": "application/json; charset=UTF-8"
         }
      })
         .then((response) => {
            if (response.status !== 201) {
               return;
            } else {
               return response.json();
            }
         })
         .then((data) => {
            // setUsers((users) => [...users, data]);
            const updatedUsers = users.map((user) => {
               if (user.id === id) {
                  user.name = name;
                  user.username = username;
                  user.email = email;
                  user.phone = phone;
                  user.website= website;
               }

               return user;
            });

            setUsers((users) => updatedUsers);
         })
         .catch((error) => console.log(error));
   };

   const onDelete = async (id) => {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
         method: "DELETE"
      })
         .then((response) => {
            if (response.status !== 200) {
               return;
            } else {
               setUsers(
                  users.filter((user) => {
                     return user.id !== id;
                  })
               );
            }
         })
         .catch((error) => console.log(error));
   };

   return (
      <>
      <header>
         <h1>Usuarios Cebar SAS</h1>
      </header>
      <div className="App">
         
         <AddUser onAdd={onAdd} />
         {users.map((user) => (
            <User
               id={user.id}
               key={user.id}
               name={user.name}
               email={user.email}
               username={user.username}
               phone={user.phone}
               website={user.website}
               onEdit={onEdit}
               onDelete={onDelete}
            />
         ))}
      </div></>
   );
}
