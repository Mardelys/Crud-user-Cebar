import User from "../models/User";

// recuperar datos
export const getUser = async _ => await User.find()
//crear nuevo dato de usuario
export const createUser = async (data)=> {
   const user = new User(data)
   return await user.save()
}
// función borrar usuario mediante el id
export const deletedUser = async (id) => await User.findByIdAndDelete(id)

// actualizado de datos tomando como parámetros id y la data existente
export const updateUser = async (id, data) => await User.findByIdAndUpdate(id, data, {new: true})

//testeo en postman de funcionalidad de peticiones