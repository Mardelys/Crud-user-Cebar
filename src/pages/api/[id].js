
import { getData } from "@/src/utils/tools";
import { updateUser, deleteUser } from "../../controller/user";

export default async function handler(req, res) {
   getData()
  const { id } = req.query
  const {body} = req
 

  switch (req.method) {
    case "PUT":
      try {
        const update = await updateUser(id, body);
        return res.status(200).json({
          msg: "Usuario Actualizado",
          update,
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          msg: `Error: ${error.message}`,
        });
      }

    case "DELETE":
      try {
        const deleted = await deleteUser(id);
        return res.status(200).json({
          msg: "Usuario Borrado",
          deleted,
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          msg: `Error: ${error.message}`,
        });
      }
  }
}
