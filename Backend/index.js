// const express = require("express");
// const User = require("./models/AuthUser");
// const mongoose = require("mongoose");

// const app = express();
// const bcrypt = require("bcrypt");
// const cookieParser = require("cookie-parser");
// const { createToken, verifyToken } = require("./Auth");

// const dbConnect =
//   "mongodb+srv://Letshare:letshare123@testdjango.tdi2a7k.mongodb.net/?retryWrites=true&w=majority";
// mongoose
//   .connect(dbConnect, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((res) => {
//     app.listen(8080, () => {
//       console.log(`Server running on port 8080`);
//     });
//   })
//   .catch((err) => console.log(err));

// app.use(express.json());
// app.use(cookieParser());

// app.post("/register", async (req, res) => {
//   const { username, email, password } = req.body;
//   const existUser = await User.findOne({ username: username });
//   bcrypt.hash(password, 10).then((hash) => {
//     if (existUser) {
//       res.status(400).json({ error: "Username already exists" });
//     } else {
//       const newUser = new User({
//         username: username,
//         email: email,
//         password: hash,
//       });
//       newUser.save();
//       res.json({ message: "New User Successfully Registered" }).status(200);
//     }
//   });
// });

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const dbUser = await User.findOne({ username: username });
//   if (!dbUser) {
//     res.status(400).json({ error: "Username doesnt exist" });
//   }
//   if (dbUser) {
//     bcrypt.compare(password, dbUser.password)
//     .then((match) => {
//         if(!match){
//             res.status(400).json({error: "Wrong password"})
//         }else{
//             const accessToken = createToken(dbUser)
//             res.cookie("access-token", accessToken, {
//                 maxAge: 60*60*24*30*1000,
//             })
//             res.json({"message": "You are already logged in"});
//         }
//     })
//   }

// });

// app.get("/dashboard", verifyToken, (req, res) => {
//   res.json("User Dashboard loaded successfully");
// });
