
import express from "express"

import authRoutes from "./src/routes/auth.routes.js";
const app = express();
app.use("api/auth",authRoutes)
 app.listen(5173,()=>{
    console.log("server is running on port 5173");
  } )