import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response): void => {
	res.status(200).json({ message: 'lista de usuarios'});
}
