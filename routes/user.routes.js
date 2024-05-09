import express from 'express';
import { createUser, deleteUser, getUser, updateUser } from '../controllers/user.controller.js';
import { myMiddleware } from '../middlewares/user.middleware.js';
var router = express.Router();

router.get('/:userid',getUser)

router.post('/', myMiddleware,createUser)

router.delete('/:userid', deleteUser)

router.put('/:userid',updateUser)


export default router;
