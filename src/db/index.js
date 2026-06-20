import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]); //This is my hotspot problem so don't add it.



const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n ✅ MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log(" ❌ MONGODB connection error",error)
        process.exit(1)
        
    }
}

export default connectDB