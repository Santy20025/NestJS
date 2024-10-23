import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('reviews')
export class Review {

    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar')
    title: string

    @Column('varchar')
    comment: string
    
    @Column('double')
    rating: number

}
