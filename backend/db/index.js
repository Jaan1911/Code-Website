const mongoose = require("mongoose")
require("dotenv").config()
const userSchema = new mongoose.Schema({
  email: String,
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conect to DataBase"))
  .catch(() => console.log("ERROR connecting to database"))





const User=mongoose.model('User',userSchema);

module.exports=User;