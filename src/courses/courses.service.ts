import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';


@Injectable()
export class CoursesService {
  
  //Inyectar: obtener una instancia del 
  //Repositorio como atributo de 
  //la clase BootcampsService: sin
  //necesidad de instanciar 
  constructor(@InjectRepository(Course) 
        private bootcampRepository:
                Repository<Course> ){
        }
  create(createCourseDto: CreateCourseDto) {
    return 'This action adds a new course';
  }

  findAll() {
    return this.bootcampRepository.find()
  }

  findOne(id: number) {
    return this.bootcampRepository.findOneBy({id})
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
