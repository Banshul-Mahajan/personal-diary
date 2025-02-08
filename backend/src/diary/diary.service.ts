import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DiaryEntry } from '@prisma/client';

@Injectable()
export class DiaryService {
  constructor(private prisma: PrismaService) {}

  // CREATE a diary entry
  async createDiaryEntry(userId: string, title: string, content: string): Promise<DiaryEntry> {
    return this.prisma.diaryEntry.create({   // using primsaORM (Object Relational mapper to handle the relationship automatically)
      data: { 
        title, 
        content, 
        user: {
          connect: { id: userId }, // Connects the diary entry to a user
        },
      },
    });
  }

  // this.prisma -  refers to the Prsima Client, which allow us to interact with the databse
  // dairyEntry.create(...) - this tells prisma to insert a new record into the DiaryEntry table
  // Example we run a fuction like this,  await createDiaryEntry("user123", "My Day", "I had a great time!");
  // Prisma will generate and execute SQL query similar to 

  // INSERT INTO "DiaryEntry" ("id", "title", "content", "userId")
  // VALUES ('random-id', 'My Day', 'I had a great time!', 'user123');



  // READ a single diary entry
  async getDiaryEntry(id: string): Promise<DiaryEntry | null> {
    return this.prisma.diaryEntry.findUnique({
      where: { id },
    });
  }

  // UPDATE a diary entry
  async updateDiaryEntry(id: string, title: string, content: string): Promise<DiaryEntry> {
    return this.prisma.diaryEntry.update({
      where: { id },
      data: { title, content },
    });
  }

  // DELETE a diary entry
  async deleteDiaryEntry(id: string): Promise<DiaryEntry> {
    return this.prisma.diaryEntry.delete({
      where: { id },
    });
  }

  // GET all diary entries
  async getAllDiaryEntries(): Promise<DiaryEntry[]> {
    return this.prisma.diaryEntry.findMany();
  }
}
