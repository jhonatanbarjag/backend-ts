import { Request, Response } from 'express';
import TodoService from '../services/todo-list.service';


class TodoController{
    
    async get(req:Request, res:Response) {
        try {
            const todos = await TodoService.getAll();
            res.status(200).json({ data:todos });
        } catch (error) {
            res.status(500).json({ error});
        }
        
    }

    async create(req:Request, res:Response) {
        try {
            const { title, description, done , user } = req.body;
            const todos = await TodoService.create({
                title,
                description,
                done,
                user,
            });
            res.status(200).json({ data:todos });
        } catch (error) {
            res.status(500).json({ error});
        }
}   
    async update(req:Request, res:Response) {
        try {
            const { id } = req.params;
            const { title, description, done, user } = req.body;

            const todos = await TodoService.update(id,{
                title,
                description,
                done,
                user
            });
            res.status(200).json({ data:todos });
        } catch (error) {
            res.status(500).json({ error});
        }
} 
    async remove(req:Request, res:Response) {
        try {
            const { id } = req.params;
            
            const todos = await TodoService.remove(id);
            res.status(200).json({ data:todos });
        } catch (error) {
            res.status(500).json({ error});
        }
}
}
const todoController = new TodoController();
export default todoController;

// esto es el controlador que se encarga de manejar las peticiones y respuestas de la aplicacion
// se encarga de llamar al servicio para realizar las operaciones CRUD 
// y de manejar los errores que puedan ocurrir en el proceso.
// el controlador se encarga de recibir las peticiones del cliente, procesarlas y devolver una respuesta al cliente.
// el controlador se encarga de manejar los errores que puedan ocurrir en el proceso y devolver una respuesta adecuada al cliente.
// el controlador se encarga de definir los tipos de peticiones que se pueden realizar a la aplicacion (GET, POST, PATCH, DELETE).
// el controlador se encarga de definir los tipos de respuestas que se pueden devolver al cliente (200, 400, 404, 500).
