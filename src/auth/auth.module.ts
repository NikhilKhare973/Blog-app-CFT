import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: 'MY_SECRET_KEY', // In a real app, put this in .env
      signOptions: { expiresIn: '1d' }, // Tokens expire in 1 day, you can adjust as needed
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
