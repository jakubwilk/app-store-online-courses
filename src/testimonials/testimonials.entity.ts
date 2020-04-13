import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Testimonials {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    author: string;
    
    @Column()
    description: string;
    
    @CreateDateColumn({ type: 'timestamp' })
    created: Date;
    
    @Column()
    avatar: string;
    
    @Column()
    status: boolean;
}