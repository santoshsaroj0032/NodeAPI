import express from "express";
import mongoose from "mongoose";
const router=express.Router(); 
import {connectDB} from "./data/database.js";

 export const app=express();

connectDB();

app.use(express.json());
// app.use("/users",userRouter);

app.get("/",(req,res)=>{
  return res.redirect("user");
});

       