import React, { useState } from "react";

export const User = ({ name,username,address, email, phone,website, company, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value,  evt.target.username.value,evt.target.address.city.value,  evt.target.phone.value,evt.target.website.value, evt.target.company.name.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          
          <input placeholder="Nombre Completo" name="name" defaultValue={name}/>
      <input placeholder="Usuario" name="username" defaultValue={username} />
      <input placeholder="Email" name="email" defaultValue={email} />
      <input placeholder="Ciudad" name="address" defaultValue={address.city}/>
      <input placeholder="Teléfono" name="phone" defaultValue={phone}/>
      <input placeholder="Sitio web" name="website" defaultValue={website}/>
      <input placeholder="Empresa" name="company" defaultValue={company.name} />
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div className="user">
          <span className="user-name">{name}</span>
          <span className="user-username">{username}</span>
          <span className="user-email">{email}</span>
          <span className="user-address">{address.city}</span>
          <span className="user-phone">{phone}</span>
          <span className="user-website">{website}</span>
          <span className="user-company">{company.name}</span>
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};
