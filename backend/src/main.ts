import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Connect to database
  const prisma = new PrismaClient();
  await prisma.$connect();
  console.log("Database connected successfully");

  await app.listen(3000);
}
bootstrap();
