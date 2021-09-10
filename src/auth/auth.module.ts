import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';

@Module({
  providers: [AuthService],
  imports: [AuthService],
})

export class AuthModule {}
