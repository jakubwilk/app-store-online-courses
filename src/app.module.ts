import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { Categories } from './categories/categories.entity';
import { CoursesModule } from './courses/courses.module';
import { Courses } from './courses/courses.entity';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { Testimonials } from './testimonials/testimonials.entity';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Categories, Courses, Testimonials, Users],
      migrations: [__dirname + '/migrations/*.ts'],
      synchronize: true,
      logging: false,
      cli: {
        "migrationsDir": "src/migrations"
      }
    }),
    CategoriesModule,
    CoursesModule,
    TestimonialsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
  
}
