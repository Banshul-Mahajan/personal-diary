import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DiaryService } from './diary.service';
import { DiaryEntry } from '@prisma/client';


@Controller('diary') // This defines the base route '/diary', and all api endpoints inside this controller will start with '/diary'
export class DiaryController {
    constructor(private readonly diaryService: DiaryService) {}  // The constuctor injects the diary service, allowing this controller to user this service.

    @Post()
    async create(@Body() body: {title: string; content: string; userId: string }): Promise<DiaryEntry> {
        return this.diaryService.createDiaryEntry(body.userId, body.title, body.content);
    }

    //async : This func is asynchronous(runs in the background), Because it might take time to communicate with the database so we dont want app to freeze
    //like we order the food online and we dont sit idle until the food arrives - We continue browsing while waiting
    // create: is a func name, it creates a new diary entry in the database
    // @Body: this extracts the request body it makes your api request like this { title: "My First Diary", content: "Today was great!", userId: "12345" }
    // Promise: Because the func is fetching data from database, which might take time, So instead of freezing the app it returns a promise that reolves when data is ready
    // Promise<DiaryEntry> means the function will eventually return a DiaryEntry object
    // this.diaryService.createDiaryEntry - calls tio create a diary entry in database
    // the diaryService.createDiaryEntry(...) will we called like this this.diaryService.createDiaryEntry("12345", "My First Diary", "Today was amazing!");

    @Get()
    async findAll(): Promise<DiaryEntry[]> {
        return this.diaryService.getAllDiaryEntries();
    }

    @Get(':id')
    async findOne(@Param('id') id:string): Promise<DiaryEntry | null> {
        return this.diaryService.getDiaryEntry(id);
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() body: {title: string; content: string }): Promise<DiaryEntry> {
        return this.diaryService.updateDiaryEntry(id, body.title, body.content);
    }

    @Delete(':id')
    async remove(@Param('id') id:string): Promise<DiaryEntry> {
        return this.diaryService.deleteDiaryEntry(id);
    }
}
