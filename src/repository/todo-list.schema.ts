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
        const result= await TodoModel.find({archived: false});
        return result;
    }

    async findById(_id:string){
        const result = await TodoModel.findOne({_id})
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

//sof deeletea a un hardelete
// si se quiere eliminar fisicamente el documento, se puede usar el metodo deleteOne
// de mongoose, pero en este caso se prefiere hacer un soft delete para no perder la informacion.
// el soft delete se hace marcando el documento como archivado, y no eliminandolo