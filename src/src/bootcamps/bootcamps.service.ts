import { Injectable, Delete } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';


@Injectable()
export class BootcampsService {


  //Inyectar: obtener una instancia del 
  //Repositorio como atributo de 
  //la clase BootcampsService: sin
  //necesidad de instanciar 
  constructor(@InjectRepository(Bootcamp) 
        private bootcampRepository:
                Repository<Bootcamp> ){
        }
  create(payload: any) {
    //1. Crear una instancia de una entiti Bootcamp
    const newBootcamp = this.bootcampRepository.create(payload)
    //2. grabar esa instancia
    return this.bootcampRepository.save(newBootcamp)
    ;
  }

  findAll() {
    return this.bootcampRepository.find()
  }

  findOne(id: number) {
    return this.bootcampRepository.findOneBy({id})
  }

  async update(id: number, payload: any) {
    //1. encontrar el bootcamp por id
    const UpdBootcamp = await this.bootcampRepository.findOneBy({id});
    //2. hacer update: agregar cambios del payload 
    //a la entidad hallada en el punto 1 
    this.bootcampRepository.merge(UpdBootcamp, payload)
    //3, grabar cambios
    return this.bootcampRepository.save(UpdBootcamp)
  }

  async remove(id: number) {
    //Buscar bootcamp por id
    const delBootcamp = await this.bootcampRepository.findOneBy({id});
   // borrar bootcamp
   //Borrado
    this.bootcampRepository.delete(delBootcamp)
    //3, retonar el bootcap
    //borrado
    return delBootcamp
  }
}
