import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm' 

@Entity('Bootcamps')
export class Bootcamp {

    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', 
        {length: 20})
    phone: string

    @Column('varchar', 
            {length: 20})
    name: string

    @Column('varchar',
            {length: 20, default:"xxx"})
    addres: string

    @Column('text')
    topics: string

    @Column({name:'average_rating',
    })
    averageRating: number

    @Column({ type: 'timestamp',
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP'      
    })
    createdAt: Date

  

}

