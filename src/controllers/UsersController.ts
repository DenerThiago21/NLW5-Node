import { Request, Response } from 'express';
import { UsersServie } from '../services/UsersService';

class UsersController {
    async create(request: Request, response: Response) {
        const { email } = request.body;

        const UsersService = new UsersServie();

        const user = await UsersService.create(email);

        return response.json(user);

    }
}

export { UsersController }