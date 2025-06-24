import {connect} from "mongoose";


export async function ConnectDatabase(){
    try {
        await connect("mongodb://localhost:27017/todolist"), 
        console.log("Database connected");
        
        
    }
    catch (error) {
        console.log("Error connecting to database", error);
    }

}