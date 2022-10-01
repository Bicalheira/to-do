import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from 'src/controllers/project.controller';
import { Project } from 'src/models/project.model';
import { ProjectService } from 'src/services/project.service';

@Module({
    imports: [TypeOrmModule.forFeature([Project])],
    providers: [ProjectService],
    controllers: [ProjectController],
    exports: [ProjectService]
})

export class ProjectModule { }