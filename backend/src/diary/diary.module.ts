// A module is a way to group related files together.

// It consists of:
// A Service (DiaryService) → Handles the logic (database queries, CRUD operations).
// A Controller (DiaryController) → Defines API routes (like POST, GET).
// An Import (PrismaModule) → Allows access to the database.

import { Module } from '@nestjs/common';
import { DiaryService } from './diary.service';
import { DiaryController } from './diary.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule], //imports the prisma module to interact with database
  providers: [DiaryService],  // provide the DiaryService so it can be used in this module
  controllers: [DiaryController], // Register the DairyController to handle API requests
})
export class DiaryModule {}




// A user makes an API request (e.g., POST /diary to create a new diary entry).
// The DiaryController receives the request and calls DiaryService.
// DiaryService interacts with the database using Prisma.
// The response is returned to the user.