import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('courses')
export class Course {

    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar')
    title: string

    @Column('varchar')
    description: string
    
    @Column('double')
    weeks: number

    @Column('double')
    tuition: number

    @Column('varchar', {length: 30})
    minimumSkill: minimumSkill

    @Column('date')
    createdAt: Date

}

enum minimumSkill {
    'Beginner',
    'Intermediate',
    'Advanced'
}