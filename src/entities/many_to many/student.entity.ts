import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Course } from './course.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;
  name: string;

  @Column({ type: 'date' })
  dateOfBirth: Date;

  @ManyToMany(() => Course, (course) => course.students)
  @JoinTable()
  courses: Course[];
}
