import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampController } from './controllers/bootcamp.controller';
import { CoursesController } from './controllers/courses.controller';
import { UsersController } from './controllers/users.controller';
import { ReviewsController } from './controllers/reviews.controller';

@Module({
  imports: [],
  controllers: [AppController, BootcampController, CoursesController, UsersController, ReviewsController],
  providers: [AppService],
})
export class AppModule {}
