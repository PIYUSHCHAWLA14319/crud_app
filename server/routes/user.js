import express from 'express';
import userController from '../controllers/user.js';
const router = express.Router();


// All Routes are here

router.get("/users",userController.getAllUsers);
router.post("/users",userController.createUsers);
router.get("/users/single/:id",userController.singleUsers);
router.put("/users/:id",userController.updateuser);
router.delete("/users/:id",userController.deleteuser);

export default router;