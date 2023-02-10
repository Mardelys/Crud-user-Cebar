import React from "react";

export const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value,  evt.target.username.value,  evt.target.phone.value,evt.target.website.value);
    evt.target.name.value = "";
    evt.target.username.value = "";
    evt.target.email.value = "";
    evt.target.phone.value = "";
    evt.target.website.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add User</h3>
      <input placeholder="Nombre Completo" name="name" />
      <input placeholder="Usuario" name="username" />
      <input placeholder="Email" name="email" />
      <input placeholder="Teléfono" name="phone" />
      <input placeholder="Sitio web" name="website" />
      <button onSubmit={handleOnSubmit}>Add</button>
    </form>
  );
};