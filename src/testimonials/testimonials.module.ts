import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestimonialsController } from './testimonials.controller';
import { TestimonialsService } from './testimonials.service';
import { Testimonials } from './testimonials.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Testimonials])],
    controllers: [TestimonialsController],
    providers: [TestimonialsService],
    exports: [TypeOrmModule]
})
export class TestimonialsModule {}
