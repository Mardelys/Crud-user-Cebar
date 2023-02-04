const { connect } = require("mongoose");

export default function conn(){
   connect(process.env.URL_JSON)
   .then(_ => {console.log("Connect")})
   .catch(err => {console.log("error: " + err)})
}