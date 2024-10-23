import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {

  //Inyectar: obtener una instancia del 
  //Repositorio como atributo de 
  //la clase BootcampsService: sin
  //necesidad de instanciar 
  constructor(@InjectRepository(Review) 
        private bootcampRepository:
                Repository<Review> ){
        }
  create(createReviewDto: CreateReviewDto) {
    return 'This action adds a new review';
  }

  findAll() {
    return this.bootcampRepository.find()
  }

  findOne(id: number) {
    return this.bootcampRepository.findOneBy({id})
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
