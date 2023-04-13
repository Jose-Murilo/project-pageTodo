import { Router } from 'express';
import controllers from '../controllers'
const router = Router();

router.get('/task', controllers.read)
router.post('/task', controllers.create)
router.put('/task/:id', controllers.update)
router.delete('/task/:id', controllers.delete)

export default router