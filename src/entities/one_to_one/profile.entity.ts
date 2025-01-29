import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  bio: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
}
