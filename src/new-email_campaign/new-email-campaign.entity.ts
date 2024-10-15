import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NewEmailCampaign {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  emailName: string;

  @Column()
  targetEmailId: number; // Foreign key reference to Target entity

  @Column()
  emailTemplateId: number; // Foreign key reference to EmailTemplate entity

  @Column()
  pageTemplateId: number; // Foreign key reference to PageTemplate entity

  @Column({ type: 'simple-array' }) // To store multiple follow-up email options
  followUpEmailOptions: string[];

  @Column()
  timeZone: string; // Time zone

  @Column({ type: 'date' })
  startDate: Date; // Start date

  @Column({ type: 'time' })
  startTime: string; // Start time
}
