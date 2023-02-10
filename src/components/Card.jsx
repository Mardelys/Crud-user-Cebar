import { useRef, useState, useEffect } from 'react'
import { MdMode, MdOutlineDelete, MdOutlineCheckCircleOutline } from 'react-icons/md'
import { getData } from '../utils/tools'




export default function Card({ user: { id, name, username, email, address, phone, website, company }, fun }) {
   const [edit, setEdit] = useState(false)
   const [paragraps, setParagraps] = useState()
   const cardRef = useRef(null)
   
   useEffect(_ => { setParagraps(Array.from(cardRef.current.getElementsByTagName("p"))) }, [])
   useEffect(() => {
      getData();
    }, []);
   const editable = editBool => {
      paragraps.forEach(item => {
         item.contentEditable = editBool
         item.classList.toggle("edit")
      })
      setEdit(!edit)
   }
   const editHandler = _ => {
      console.log(paragraps);
      editable(true)
      window.getSelection().selectAllChildren(paragraps[0])
      window.getSelection().collapseToEnd();
      paragraps[0].focus()
   }
   const finishHandler = async _ => {
      editable(false)
      const data = {
         name: paragraps[0].textContent,
         username: paragraps[1].textContent,
         email: paragraps[2].textContent,
         address: paragraps[3].textContent,
         phone: paragraps[4].textContent,
         website: paragraps[5].textContent,
         company: paragraps[6].textContent
      }
      try {
         const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
               
            })
         })
         const json = await res.json()
         console.log(json);

         fun(await getData())
      } catch (error) {
         console.log(error);
      }
   }

   const deleteHandler = async () => {
      try {
         const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE"
         })
         const json = await res.json()
         console.log(json)
         fun(await getData())


      } catch (error) {
         console.log(error)
      }
   }
   return (
      <div ref={cardRef} className="card">
         <span>Nombre</span>
         <p>{name}</p>
         <span>Usuario</span>
         <p>{username}</p>
         <span>E-mail</span>
         <p>{email}</p>
         <span>Dirección</span>
         <p>{address.city}</p>
         <span>Teléfono</span>
         <p>{phone}</p>
         <span>Sitio Web</span>
         <p>{website}</p>
         <span>Compañía</span>
         <p>{company.name}</p>
         <span>Administrar</span>
         <div className="btns">
            {!edit ? <MdMode size={30} onClick={editHandler} /> :
               <MdOutlineCheckCircleOutline size={30} onClick={finishHandler} />}
            <MdOutlineDelete size={30} onClick={deleteHandler} />
         </div>
      </div>
   )
}