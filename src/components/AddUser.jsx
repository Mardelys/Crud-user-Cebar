import React from "react";

export const AddUser = ({ onAdd }) => {
   //accedemos a los input despectivos para agregar los datos a la data
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value,  evt.target.username.value,  evt.target.phone.value,evt.target.website.value);
    evt.target.name.value = "";
    evt.target.username.value = "";
    evt.target.email.value = "";
    evt.target.phone.value = "";
    evt.target.website.value = "";
  };
//se retorna el formulario
  return (
   <div className="form-add">
   <h2>Agregar nuevo usuario</h2>
   
    <form classname="add"onSubmit={handleOnSubmit}>
      
      
      <input placeholder="Nombre Completo" name="name" required />
      <input placeholder="Usuario" name="username" required/>
      <input placeholder="Email" name="email" required/>
      <input placeholder="Teléfono" name="phone" required/>
      <input placeholder="Sitio web" name="website" required/>
      <button onSubmit={handleOnSubmit}>Agregar Usuario</button>
    </form>
    </div>
  );
};