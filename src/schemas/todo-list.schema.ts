import mongoose, { Document, model, Schema } from "mongoose";

export type TTodolist = {
    title: string;
    description: string;
    done: boolean;
    user: string; // id del usuario que crea la tarea
};

export interface ITodoList extends TTodolist , Document{};

const todoListSchema = new Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    done:{
        type: Boolean,
    },
    archived:{
        type: Boolean,
        default: false,
    },
    user:{
        type: mongoose.Types.ObjectId,ref: "user", // referencia al modelo de usuario , sin esto no se puede hacer la relacion entre los modelos y el populate no funcionara
    }
},{
    timestamps: true
    
}
);

const TodoList = model("TodoList", todoListSchema);
export default TodoList;


// esto es un esquema de mongoose que define la estructura de los documentos que se guardaran en la coleccion de todo-list
// el esquema define los campos que tendra cada documento, sus tipos y si son obligatorios o no.
// ademas, se define un campo adicional llamado archived que se utiliza para hacer un soft delete
// cuando se marca un documento como archivado, no se elimina fisicamente de la base de datos, sino que se marca como archivado para que no se muestre en las consultas normales.
// el esquema tambien incluye un campo de timestamps que se utiliza para guardar la fecha de creacion y actualizacion de cada documento.
// el esquema se exporta como un modelo de mongoose que se puede utilizar para crear, leer, actualizar y eliminar documentos en la coleccion de todo-list.
// el modelo se puede utilizar en el repositorio para realizar las operaciones CRUD sobre los documentos de la coleccion de todo-list.
// el modelo se puede utilizar en el servicio para realizar la logica de negocio de la aplicacion.
// el modelo se puede utilizar en el controlador para manejar las peticiones y respuestas de la aplicacion.
// el modelo se puede utilizar en la ruta para definir las rutas de la aplicacion.
// el modelo se puede utilizar en la aplicacion para manejar las tareas pendientes de los usuarios.