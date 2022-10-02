import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from 'src/controllers/task.controller';
import { Task } from 'src/models/task.model';
import { TaskService } from 'src/services/task.service';

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    providers: [TaskService],
    controllers: [TaskController],
    exports: [TaskService]
})

export class TaskModule { }