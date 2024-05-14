import { Module } from '@nestjs/common';
import { HelperModule } from 'src/Helpers/helper.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './Repositories/user.repositories';

@Module({
    imports: [HelperModule],
    controllers: [UserController],
    providers: [UserService, UserRepository],
})

export class UserModule { }


