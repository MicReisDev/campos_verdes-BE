import { Module } from '@nestjs/common';
import { JWTHelper } from './JwtHelper';

@Module({
    providers: [JWTHelper],
    exports: [JWTHelper],
})
export class HelperModule { }