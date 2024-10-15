import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Campaign {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  targetSent: string;

  @Column()
  dateSent: Date;

  @Column()
  delivered: string;

  @Column('decimal', { precision: 5, scale: 2 })
  opens: number;

  @Column('decimal', { precision: 5, scale: 2 })
  clicks: number;
}
