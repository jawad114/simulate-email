import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmailTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @Column('text')
  message: string;
}
