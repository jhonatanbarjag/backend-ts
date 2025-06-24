import express from 'express';
import todoController from '../controllers/todo-list.controller';


const router = express.Router();

router.get('/', todoController.get);
router.post('/', todoController.create);
router.patch('/:id', todoController.update);
export default router;
