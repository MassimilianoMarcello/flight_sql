import express from 'express';
import controllers from '../controllers/user.js';


const router = express.Router();

const { add, getAll,getOne,update,remove } =
    controllers;

// routes
router.get('/get', getAll);
router.get('/get/:id', getOne);
router.post('/add', add);
router.put('/update/:id', update);
router.delete('/delete/:id', remove);

export default router;
