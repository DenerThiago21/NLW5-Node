import { Repository } from "typeorm";
import { User } from "../entities/Users";

class UsersRepository extends Repository<User>{

}

export { UsersRepository }; 