import TodoModel from '../schemas/todo-list.schema';

interface CreateTodoDTO {
    title: string;
    description: string;
    done: boolean;
}

class TodoRepository{

    async create(todo: CreateTodoDTO) {
        const addedTodo = new TodoModel(todo);
        return await addedTodo.save();
    }

    async findAll(){
        const result= await TodoModel.find({archived: false}).populate('user'); // Solo tareas no archivadas
        // .populate('user', 'name email') es para obtener los datos del usuario que crea la tarea
        return result;
    }

    async findById(_id:string){
        const result = await TodoModel.findOne({_id, archived: false});
        return result;
    }

    async update(_id:string, todoChanges: Partial<CreateTodoDTO>) {
         const updateItem = await TodoModel.findByIdAndUpdate({ _id },{
                $set: todoChanges,
            }, {
                new: true
            });
            return updateItem;
            };
        
    

    async delete(_id:string){
        await TodoModel.findOneAndUpdate({ _id }, //esto es para que no se elimine fisicamente el documento
            { archived: true });
    }
    
}

const todoRepository = new TodoRepository();
export default todoRepository;  

// este es el repositorio que se encarga de interactuar con la base de datos
// se encarga de realizar las operaciones CRUD sobre los documentos de la coleccion de todo-list 
// se encarga de llamar a los metodos del modelo de mongoose para realizar las operaciones CRUD
// se encarga de manejar los errores que puedan ocurrir en el proceso

//sof deeletea a un hardelete
// si se quiere eliminar fisicamente el documento, se puede usar el metodo deleteOne
// de mongoose, pero en este caso se prefiere hacer un soft delete para no perder la informacion.
// el soft delete se hace marcando el documento como archivado, y no eliminandolo