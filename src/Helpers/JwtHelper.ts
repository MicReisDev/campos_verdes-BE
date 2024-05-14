import { Injectable } from '@nestjs/common';

//External Libs
import jwt from 'jsonwebtoken';
import moment from 'moment';

@Injectable()
export class JWTHelper {
    constructor() { }

    async decodeJWT(bearerToken: string): Promise<{
        name: string;
        user_id: string;
        iat: number;
    }> {
        const token = bearerToken.split(' ')[1];

        const parsedToken: any = jwt.verify(token, process.env.JWT_SECRET);

        const toReturn = {
            name: parsedToken?.name,
            user_id: parsedToken?.user_id,
            iat: parsedToken?.iat,
        };

        return toReturn;
    }

    async createJWT(data: {
        user_id: string;
        name: string;
    }): Promise<{ name: string; user_id: string; token: string }> {
        //Creating Token
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign({ name: data.name, user_id: data.user_id }, secret);
        return {
            name: data.name,
            user_id: data.user_id,
            token,
        };
    }

    async createTemporaryJWT(data: { user_id: string; name: string }) {
        const createTime = moment();
        //Creating Token
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign(
            { name: data.name, user_id: data.user_id, createTime },
            secret,
        );
        return {
            name: data.name,
            user_id: data.user_id,
            token,
        };
    }
}