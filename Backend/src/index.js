
import express from "express";

import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";

import cors from "cors";


const app = express();

dotenv.config();




const PORT =process.env.PORT

app.use(express.json());
app.use(cookieParser());
app.use(cors ({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use("/api/auth", authRoutes)


 app.listen(PORT, ()=>{
    console.log("server is running on PORT:" + PORT);
  } )