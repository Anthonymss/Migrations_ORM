import { Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn
  
 } from 'typeorm';

export enum Status{
  ACTIVE='active',
  INACTIVE='inactive',
  DELETED='deleted'
}
@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  bio: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
  
  @Column({ type: 'enum', enum: Status, default: Status.ACTIVE })
  status: Status;
  
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

}
