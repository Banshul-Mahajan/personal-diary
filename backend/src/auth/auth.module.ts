import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { DiaryModule } from './diary/diary.module';


@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: 'MY_SECRET_KEY',
      signOptions: {expiresIn: '1h'},
    }),
    DiaryModule,
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
