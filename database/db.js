import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () =>  {
    const DB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@megasale.r9ablpg.mongodb.net/?retryWrites=true&w=majority`
 try{
    await mongoose.connect(DB_URI, {
        useNewUrlParser: true,
    });
    console.log("db done");
}
catch(err){
    console.log(err)

}
    

}
export default Connection;