import dotenv from "dotenv" 
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express" ;
import ConnectDB from "./db/connect.js";
import {app} from "./app.js";

dotenv.config() ;

ConnectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () => {  
        console.log(` server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("mongo db failed " , err);
})
// const app= express()

// const port = process.env.PORT || 3000 ;




// ( async () =>  {
//     try {
//         const connectInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}` )
//         console.log("mongodb connected")
//         console.log(connectInstance.connection.host);
//         app.on("error" , (error) =>{
//             console.log("ERR: " , error);
//             throw error;
//         });
//         app.listen(port ,  ()=>{
//             console.log(`app listenig on ${port}`);
//         })
//     } catch (error) {
//         console.log("error:" , error);
//         throw error;
//     }
// })()
