import express from 'express';
import todoController from '../controllers/todo-list.controller';


const router = express.Router();

router.get('/', todoController.get);
router.post('/', todoController.create);
router.patch('/:id', todoController.update);
router.delete('/:id', todoController.remove);

export default router;


// esto es el enrutador de express que se encarga de definir las rutas de la aplicacion
// se encarga de llamar al controlador para manejar las peticiones y respuestas de la aplicacion 
// se encarga de definir las rutas de la aplicacion y de asociarlas a los metodos del controlador