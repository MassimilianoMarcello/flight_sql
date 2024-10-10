import express from 'express';
import flightController from '../controllers/flight.js'; 

const router = express.Router();


router.get('/flights', flightController.getAll); 
router.get('/flights/:id', flightController.getOne);
router.post('/add-flight', flightController.add);
router.put('/update/:id', flightController.update);
router.delete('/delete/:id', flightController.remove);
export default router;
