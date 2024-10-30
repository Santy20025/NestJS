import { CreateBootcampDto } from './../bootcamps/dto/create-bootcamp.dto';
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
        private cursoRepository:
                Repository<Course> ){
        }
  create(payload: any) {
    const newCurso = this.cursoRepository.create(payload)
    return this.cursoRepository.save(newCurso)
    ;
  }

  findAll() {
    return this.cursoRepository.find()
  }

  findOne(id: number) {
    return this.cursoRepository.findOneBy({id: id})
  }

  async update(id: number, payload: any) {
    //1. encontrar el bootcamp por id
    const UpdCurso = await this.cursoRepository.findOneBy({id});
    //2. hacer update: agregar cambios del payload 
    //a la entidad hallada en el punto 1 
    this.cursoRepository.merge(UpdCurso, payload)
    //3, grabar cambios
    return this.cursoRepository.save(UpdCurso)
  }

  async remove(id: number) {
    //Buscar Curso por id
    const delCurso = await this.cursoRepository.findOneBy({id});
   // borrar Curso
   //Borrado
    this.cursoRepository.delete(delCurso)
    //3, retonar el bootcap
    //borrado
    return delCurso
  }
}
