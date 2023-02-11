import React, { useState } from "react";
import Swal from 'sweetalert2'
import { MdMode, MdOutlineDelete, MdOutlineCheckCircleOutline } from 'react-icons/md'

export const User = ({ name, username, email, phone, website, id, onEdit, onDelete }) => {
   const [isEdit, setIsEdit] = useState(false);

   const handleEdit = () => {
      setIsEdit(!isEdit);
   };

   const handleDelete = () => {
      onDelete(id);
      return (
         Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario eliminado exitosamente',
            showConfirmButton: false,
            timer: 1500
         }))

   };

   const handleOnEditSubmit = (evt) => {
      evt.preventDefault();
      onEdit(id, evt.target.name.value, evt.target.email.value, evt.target.username.value, evt.target.phone.value, evt.target.website.value);
      setIsEdit(!isEdit);
   };

   return (
      <>
         {isEdit ? (

            <section className="modal">
               <div className="modal_container">
                  <h2>Editar Usuario</h2>
                  <form onSubmit={handleOnEditSubmit}>

                     <li>
                        <label htmlFor="name">Nombre</label>
                        <input placeholder="Nombre Completo" name="name" defaultValue={name} />
                     </li>
                     <li>
                        <label htmlFor="username">Usuario</label>
                        <input placeholder="Usuario" name="username" defaultValue={username} />
                     </li>
                     <li>
                        <label htmlFor="email">Correo</label>
                        <input placeholder="Email" name="email" defaultValue={email} />
                     </li>
                     <li>
                        <label htmlFor="phone">Teléfono</label>
                        <input placeholder="Teléfono" name="phone" defaultValue={phone} />
                     </li>
                     <li>
                        <label htmlFor="website">Sitio Web</label>
                        <input placeholder="Sitio web" name="website" defaultValue={website} />
                     </li>

                     <a href="#" className="modal_close"><button onSubmit={handleOnEditSubmit}><MdOutlineCheckCircleOutline /></button></a>
                  </form>
               </div>
            </section>
         ) : (
            
            <div className="card">
               <span>Nombre</span>
               <p>{name}</p>
               <span> Usuario</span>
               <p>{username}</p>
               <span >Email</span>
               <p>{email}</p>
               <span >Teléfono</span>
               <p>{phone}</p>
               <span className="user-website">Sitio web</span>
               <p>{website}</p>
               <span>Acciones</span>
               <div className="btns">
                  <MdMode size={30} onClick={handleEdit} />
                  <MdOutlineDelete size={30} onClick={handleDelete} />
               </div>
            </div>
         )}
      </>
   );
};
