import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //enable CORS (Cross origin resource sharing, ) since our frontend on local for now and backend is on render
  app.enableCors({
    origin:"*", //Allows requests from any domain(Use a specific domain in production)
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  });
  
  // Connect to database
  const prisma = new PrismaClient();
  await prisma.$connect();
  console.log("Database connected successfully");

  await app.listen(3000);
}
bootstrap();
