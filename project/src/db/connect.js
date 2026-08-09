import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const ConnectDB = async ()=>{
    try {
        const connectionInstace = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`mongodb connceted !! DB HOST ${connectionInstace.connection.host}`);
    } catch (error) {
        console.log("error" , error);
        process.exit(1); 
    }
}
export default ConnectDB;
