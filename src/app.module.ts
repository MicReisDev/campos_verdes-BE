import { Module } from '@nestjs/common';
import { HelperModule } from './Helpers/helper.module';
import { UserModule } from './User/user.module';

@Module({
  imports: [HelperModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
