import { useState } from "react"
import { getData } from "../utils/tools"

export default function Form({ fun }) {
   const [data, setData] = useState({
      name: "",
      username: "",
      email: "",
      address: {
         city: "",
      },
      phone: "",
      website: "",
      company: {
         name: "",
      }
   })
   const changueHandler = e => {
      setData({
         ...data,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = async _ => {
      try {
         const res = await fetch('https://jsonplaceholder.typicode.com/users/', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
               name: name,
               username: "",
               email: "",
               address: {
                  city: "",
               },
               phone: "",
               website: "",
               company: {
                  name: "",
               }
            })
         })
         const json = await res.json()
         setData(json);
         fun(await getData())
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <div className="add">
         <input type="text" name="name" placeholder='Nombre' onChange={changueHandler} value={data.name} />
         <input type="text" name="username" placeholder='Usuario' onChange={changueHandler} value={data.username} />
         <input type="email" name="email" placeholder='E-mail' onChange={changueHandler} value={data.email} />
         <input type="text" name="address" placeholder='Ciudad' onChange={changueHandler} value={data.address.city} />
         <input type="text" name="phone" placeholder='Teléfono' onChange={changueHandler} value={data.phone} />
         <input type="text" name="website" placeholder='Sitio web' onChange={changueHandler} value={data.website} />
         <input type="text" name="company" placeholder='Compañia' onChange={changueHandler} value={data.company.name} />
         <button onClick={handleSubmit}>Agregar</button>
      </div>
   )
}