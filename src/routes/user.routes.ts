import { Router } from 'express';
import { getUsers } from '../services/user.service';

const router = Router();

router.get('/', getUsers);

export default router;
