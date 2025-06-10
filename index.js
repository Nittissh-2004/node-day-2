import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/dbconfig.js";
import recipeRoute from "./routers/recipiesrouter.js";

// configure dotenv file
dotenv.config();
const app = express();
app.use(express.json());

//setup default middleware
app.use(express.json());
app.use(cors());

// connect DB by calling connectDB Function
connectDB();

//default router
app.get("/",(req,res)=>{
    res.status(200).json({message:"Welcom To Backend"})
})
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcom To Backend" });
});
//custom router

app.use("/api/recipes",recipeRoute)
app.use("/api/recipes", recipeRoute);

//port initialization
const port = process.env.PORT;

// server starting function
app.listen(port,()=>{
    console.log("server started");
    
})
app.listen(port, () => {
  console.log("server started");
});