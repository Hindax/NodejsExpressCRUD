import express from "express";

import { getUsers, createUser, getUser, deleteUser, updateUser } from "./controllers/users.js";

// initialize the router
const router = express.Router();

let users = [];


router.get('/', getUsers);

router.post('/', createUser);


router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);


export default router; // to use in index

