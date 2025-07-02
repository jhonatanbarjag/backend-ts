import { Request, Response } from 'express';
import UserService from '../services/user.service';

class AuthController{
    
    async login(req:Request, res:Response) {
        try {
            const { email, password } = req.body;
            const correct = await UserService.login(email, password);
            if (correct) {
                res.status(200).json({data :"ok" });
            } else {
                res.status(4011).json({ error: "usuario/contraseña incorrecto" });
            }
            
        } catch (error) {
            res.status(500).json({ error});
        }
        
    }    
}

const authController = new AuthController();
export default authController;    