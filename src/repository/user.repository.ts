import UserModel from '../schemas/user.schema';
import TodoModel from '../schemas/todo-list.schema';

interface CreateTodoDTO {
    email: string;
    password: string;
    name: string;
    active?: boolean;
    verified?: boolean;
}

class UserRepository{

    async create(todo: CreateTodoDTO) {
        const addedTodo = new UserModel(todo);
        return await addedTodo.save();
    }

    async findAll(){
        const result= await UserModel.find({active: true}); // Solo usuarios activos
        return result;
    }

    async findById(_id:string){
        const result = await UserModel.findOne({_id, active: true}); // Solo usuarios activos
        return result;
    }
    async findByEmail(email:string){
        const result = await UserModel.findOne({email, active: true}); // Solo usuarios activos
        return result;
    }


    async update(_id:string, todoChanges: Partial<CreateTodoDTO>) {
         const updateItem = await UserModel.findByIdAndUpdate({ _id },{
                $set: todoChanges,
            }, {
                new: true
            });
            return updateItem;
            };
        
    

    async delete(_id:string){
        await UserModel.findOneAndUpdate({ _id }, //esto es para que no se elimine fisicamente el documento
            {active:false}); // Cambia el estado a inactivo
    }
    
    async getTodosByUser( user: string) {
        return TodoModel.find({user})
    }
}

const userRepository = new UserRepository();
export default userRepository;