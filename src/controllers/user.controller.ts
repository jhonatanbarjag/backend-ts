import { Request, Response } from 'express';
import UserService from '../services/user.service';


class UserController{
    
    async get(req:Request, res:Response) {
        try {
            const todos = await UserService.getAll();
            res.status(200).json({ data:todos });
        } catch (error) {
            res.status(500).json({ error});
        }
        
    }

    async create(req:Request, res:Response) {
        try {
            const { email, password,name } = req.body;
            const todos = await UserService.create({
                email,
                password,
                name,
               
            });
            res.status(200).json({ data:todos });
        } catch (error) {
            res.status(500).json({ error});
        }
}   
    async update(req:Request, res:Response) {
        try {
            const { id } = req.params;
            const { email, password, name } = req.body;

            const todos = await UserService.update(id,{
                email,
                password,
                name,
            });
            res.status(200).json({ data:todos });
        } catch (error) {
            res.status(500).json({ error});
        }
} 
    async remove(req:Request, res:Response) {
        try {
            const { id } = req.params;
            
            const todos = await UserService.remove(id);
            res.status(200).json({ data:todos });
        } catch (error) {
            res.status(500).json({ error});
        }
}
    async getTodosByUser(req: Request, res: Response) {
        try {
            const { user } = req.params;
            const todos = await UserService.getTodosByUser(user);
            res.status(200).json({ data:todos });
        } catch (error) {
            res.status(500).json({ error});
        }
    }
}
const userController = new UserController();
export default userController;