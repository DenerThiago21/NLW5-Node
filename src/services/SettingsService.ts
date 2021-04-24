import { getCustomRepository, Repository } from 'typeorm';
import { Settings } from '../entities/Settings';
import { SettingsRepository } from '../repositories/settingsRepository';

interface ISettingsCreate {
    chat : boolean;
    username: string;
}

class SettingsService {

    private settingsRepository: Repository<Settings>;

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create({ chat, username }: ISettingsCreate){
        //select * from settings where username - 'username' limit 1;
         const userAlreadyExists = await this.settingsRepository.findOne({
             username
         });

         if(userAlreadyExists) {
             throw new Error('User already exists!');
         }
    
        const settings = this.settingsRepository.create({
           chat,
           username
        });
    
        await this.settingsRepository.save(settings);

        return settings;
    } 

    async findByUsername(username: string) {
        const settings = await this.settingsRepository.findOne({
            username,
        })

        return settings   
    }


    async update (username: string, chat: boolean) {
          this.settingsRepository.createQueryBuilder()
            .update(Settings)
            .set({ chat })
            .where('username = :username', {
                username
            }).execute();
    }
}

export { SettingsService }