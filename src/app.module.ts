import { Module } from '@nestjs/common';
import { UsersController } from './modules/users/users.controller';
import { UsersModule } from './modules/users/users.module';


@Module({
  imports: [UsersModule]
})
export class AppModule {}
