import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProjectModule } from './modules/project.module';

@Module({
  imports: [DatabaseModule, ProjectModule],
})
export class AppModule { }
