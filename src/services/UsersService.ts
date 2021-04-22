import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"


class UsersServie {

    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);
        // Verificar se o usuário existe

        const userExists = await usersRepository.findOne({
            email
        });
        
        // Se existir retornar usuario
        if(userExists){
            return userExists;
        }

        // Se naõ existir, salvar no BD           
        const user = usersRepository.create({
            email
        });

        await usersRepository.save(user);

        return user;

    }
}

export { UsersServie }