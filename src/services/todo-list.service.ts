
import TodoRepository  from "../repository/todo-list.schema";

interface CreateTodoDTO {
    title: string;
    description: string;
    done: boolean;
    user: string; // id del usuario que crea la tarea
}

class TodoService{
    
    async getAll() {
        return TodoRepository.findAll();
    }
    async getById(id: string) {
        return TodoRepository.findById(id);
    }
    async create(createDTO: CreateTodoDTO) {
        return TodoRepository.create(createDTO);
    }
    async update(_id: string,  updateDTO: Partial<CreateTodoDTO>){
        return TodoRepository.update(_id, updateDTO);
    }
    async remove(id: string) {
        return TodoRepository.delete(id);
    }
        
}
const todoService = new TodoService();
export default todoService;

// este es el servicio que se encarga de la logica de negocio de la aplicacion
// se encarga de llamar al repositorio para realizar las operaciones CRUD
// y de manejar los errores que puedan ocurrir en el proceso.