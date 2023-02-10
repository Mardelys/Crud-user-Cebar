import React, { useState } from "react";
import { MdMode, MdOutlineDelete, MdOutlineCheckCircleOutline } from 'react-icons/md'

export const User = ({ name,username, email, phone,website, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
    return(
      <div></div>
    )

  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value,  evt.target.username.value, evt.target.phone.value, evt.target.website.value);
    setIsEdit(!isEdit);
  };

  return (
    <>
      {isEdit ? (

         <section className="modal">
            <div className="modal_container">
        <form onSubmit={handleOnEditSubmit}>
          
          <input placeholder="Nombre Completo" name="name" defaultValue={name}/>
      <input placeholder="Usuario" name="username" defaultValue={username} />
      <input placeholder="Email" name="email" defaultValue={email} />
      
      <input placeholder="Teléfono" name="phone" defaultValue={phone}/>
      <input placeholder="Sitio web" name="website" defaultValue={website}/>
         <div></div>
          <a href="#" className="modal_close"><button  onSubmit={handleOnEditSubmit}><MdOutlineCheckCircleOutline/></button></a>
        </form>
        </div>
        </section>
      ) : (
        <div className="card">
          <span>Nombre Completo</span>
          <p>{name}</p>
          <span>Nombre de Usuario</span>
          <p>{username}</p>
          <span >Correo Electrónico</span>
          <p>{email}</p>
          <span > Número de Teléfono</span>
          <p>{phone}</p>
          <span className="user-website">Sitio web</span>
          <p>{website}</p>
          <div className="btns">
            <MdMode size={30} onClick={handleEdit} /> 
            <MdOutlineDelete size={30} onClick={handleDelete} />
          </div>
        </div>
      )}
    </>
  );
};
