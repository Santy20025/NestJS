import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('courses')
export class Course {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', 
                    length:100, 
                    nullable: true})
    title: string
    
    @Column({ type: 'tinyint',
              nullable: true,
              default: 4
            
    })
    weeks: number

    @Column({type: 'decimal',
             nullable:true
    })
    tuition: number

    @Column({name: 'minimum_skill',
            type: 'enum',
            enum: ["Beginner", 
                    "Intermediate", 
                    "Advanced"],         
    })
    minimumSkill: minimumSkill

    @Column({type: 'date',
            nullable: true
    })
    createdAt: Date

}

enum minimumSkill {
    'Beginner',
    'Intermediate',
    'Advanced'
}