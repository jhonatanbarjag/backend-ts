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
// Esto es un ejemplo de una funcion que se encarga de conectar a la base de datos utilizando mongoose.
// La funcion utiliza el metodo connect de mongoose para conectarse a la base de datos MongoDB
// y maneja los errores de conexion.
// La funcion se puede llamar al inicio de la aplicacion para asegurarse de que la base de datos este disponible antes de iniciar el servidor.