

import { getData } from "@/src/utils/tools"
import { getUser, createUser } from "../../controller/user"



export default async function handler(req, res) {
   getData
   switch (req.method) {
      case "GET":
         try {
            const listUser = await getUser()
            return res.status(200).json(listUser)

         } catch (error) {
            console.log(error)
            return res.status(400).json({
               msg: `Error: ${error.message}`
            })
         }

      case "POST":
         try {
            const user = await createUser(req.body)
           
            return res.status(200).json({ msg: "user saved successfully", user}) 
            
         } catch (error) {
            console.log(error)
            return res.status(400).json({
               msg: `Error: ${error.message}`
            })
         }
   }
}