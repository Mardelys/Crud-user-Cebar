import User from "../models/User";

export const getUser = async _ => await User.find()

export const createUser = async dataJson=> {
   const user = new User(dataJson)
   return await user.save()
}

export const deleteUser = async id => await User.findByIdAndDelete(id)

export const updateUser = async (id, dataJson) => await User.findByIdAndUpdate(id, dataJson, {new: true})