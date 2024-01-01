import express from "express";
import {getUser, getUserById, saveUser, UpdateUser,DeleteUser} from "../controllers/UserContoroller.js";

const router = express.Router();

router.get('/users',getUser);
router.get('/users/:id',getUserById);
router.post('/users/', saveUser);
router.patch('/users/:id', UpdateUser);
router.delete('/users/:id', DeleteUser);

export default router;