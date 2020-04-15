import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Courses {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    description: string;
    
    @CreateDateColumn({ type: 'timestamp' })
    created: Date;
    
    @UpdateDateColumn({ type: 'timestamp' })
    updated: Date;
    
    @Column()
    author: string;
    
    @Column()
    coverPhoto: string;
    
    @Column()
    category: string;
    
    @Column()
    episodes: number;
    
    @Column()
    price: number;
    
    @Column()
    rate: number;
    
    @Column()
    status: number;
    
    @Column()
    draft: boolean;
}