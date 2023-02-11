import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { User } from "../components/User";
import { AddUser } from "../components/AddUser";



export default function Home() {
   const [users, setUsers] = useState([]);
   // se usa el hook useeffect para traer la base de datos de fetch data 
   useEffect(() => {
      fetchData();
   }, []);
   // esta constante hace la petición get a la base de datos externa, en este caso la api falsa que utilizamos de jsonplaceholder
   const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())//es una promesa que se ejecutará tarde o temprano, trae la data en formato json
         .then((data) => setUsers(data))
         .catch((error) => console.log(error));//se captura el error en caso que se presente
   };
   //esta función realiza la petición post responsable de agregar un nuevo usuario, cabe destacar que este usuario no se agrega a la base de datos porque es estática por lo tanto estos datos son almacenados en un hook llamado setUsers
   const onAdd = async (name, email, username, phone, website) => {
      await fetch("https://jsonplaceholder.typicode.com/users", {
         method: "POST",
         body: JSON.stringify({
            name: name,
            username: username,
            email: email,
            phone: phone,
            website: website
         }),
         headers: {
            "Content-type": "application/json; charset=UTF-8"
         }
      })
         //al ser una api falsa para poder simular la modificación de esta api se debe capturar el estado de respuesta de la petición(status:201 cuando esta OK), gracias a este se puede guardar la respuesta en el estado setUsers y hacer uso de estos datos en el frontend
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
         .catch((error) => console.log(error));//se captura el error en consola si llegase a ocurrir
   };
   // Esta constante onEdit es responsable de la petición put la cual se encarga de la modificación de datos existentes en un usuario
   const onEdit = async (id, name, email, username, phone, website) => {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
         method: "PUT",
         body: JSON.stringify({
            name: name,
            username: username,
            email: email,
            phone: phone,
            website: website
         }),
         headers: {
            "Content-type": "application/json; charset=UTF-8"
         }
      })//se utiliza el status de respuesta de la petición para poder obtener estos datos en el frontend
         .then((response) => {
            if (response.status !== 201) {
               return;
            } else {
               return response.json();
            }
         })
         .then((data) => {
            // setUsers((users) => [...users, data]);
            //se guardan los datos modificados en su respectiva props en la api, reemplazandolos
            const updatedUsers = users.map((user) => {
               if (user.id === id) {
                  user.name = name;
                  user.username = username;
                  user.email = email;
                  user.phone = phone;
                  user.website = website;
               }

               return user;
            });

            setUsers((users) => updatedUsers);
         })
         .catch((error) => console.log(error));
   };
   // esta constante es la encargada de borrar los usuarios, solo se utiliza el método delete para llevarlo acabo 
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
   // Es lo que se renderiza en el servidor muestra el header y los componentes creados, formulario y card de usuarios
   return (
      <><Head>
         <title>Usuarios Cebar S.A.S</title>
         <meta name="description" content="Movies club CRUD" />
         <link rel="icon" href="/favicon.ico" />
      </Head>
         <header>
            <h1>Usuarios Cebar SAS</h1>
         </header>
         <div className="App">

            <AddUser onAdd={onAdd} />
            <div className="container-card">
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
            </div>
         </div></>
   );
}
