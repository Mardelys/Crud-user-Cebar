import React from "react";

export const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value,  evt.target.username.value,evt.target.address.city.value,  evt.target.phone.value,evt.target.website.value, evt.target.company.name.value);
    evt.target.name.value = "";
    evt.target.username.value = "";
    evt.target.email.value = "";
    evt.target.address.city.value = "";
    evt.target.phone.value = "";
    evt.target.website.value = "";
    evt.target.company.name.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add User</h3>
      <input placeholder="Nombre Completo" name="name" />
      <input placeholder="Usuario" name="username" />
      <input placeholder="Email" name="email" />
      <input placeholder="Ciudad" name="address" />
      <input placeholder="Teléfono" name="phone" />
      <input placeholder="Sitio web" name="website" />
      <input placeholder="Empresa" name="company" />
      <button onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
  );
};