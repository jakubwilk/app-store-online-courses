import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Categories {
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
    is_visible: boolean;
}