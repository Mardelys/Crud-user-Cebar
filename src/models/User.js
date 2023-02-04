import { Schema, model, models } from "mongoose";

const userSchema = Schema(
   {
      name: {
         type: String,
      required: true
      },
      username: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
      },
      address: {
         street:{
            type: String,
            required: true,
         },
         city: {
            type: String,
            required: true,
         }
      },
      phone : {
         type: String,
         required:true,
      },
      website: {
         type: String,
         required: true,
      },
      company: {
         name: {
            type: String,
            required: true,
         },
         bs: {
            type: String,
            required: true,
         }
      }
   },
   {
      versionKey: false
   }
);


export default models.User || model ("User", userSchema);