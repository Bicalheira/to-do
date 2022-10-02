import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProjectModule } from './modules/project.module';
import { TaskModule } from './modules/task.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [DatabaseModule, ProjectModule, UserModule, TaskModule],
})
export class AppModule { }
