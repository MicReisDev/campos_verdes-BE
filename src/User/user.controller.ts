import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    Req,
    Request,
    Query,
    Headers,
} from '@nestjs/common';

import { CreateUserDTO, LoginDTO } from './DTO/user.dto';
import { UserService } from './user.service';
import { throwError } from 'rxjs';
import { IErrorReturn, ISuccessReturn } from 'src/DefaultTypes/IServicesDefault';


@Controller('user')
export class UserController {
    constructor(private readonly UserService: UserService) { }

    @Post('create')
    async CreateUser(
        @Req() req: Request,
        @Body() data: CreateUserDTO
    ) {
        return this.UserService.CreateUser(data)
    }

    @Post('login')
    async Login(
        @Req() req: Request,
        @Body() data: LoginDTO
    ): Promise<ISuccessReturn | IErrorReturn | any> {

        try {
            return await this.UserService.Login(data)
        } catch (e) {
            throw e
        }

    }

}