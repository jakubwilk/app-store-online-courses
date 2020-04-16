import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    userId: number;
    
    @Column({ length: 20 })
    username: string;
    
    @Column()
    email: string;
    
    @Column()
    password: string;
    
    @Column()
    accountType: boolean;
    
    @CreateDateColumn({ type: 'timestamp' })
    created: Date;
    
    @UpdateDateColumn({ type: 'timestamp' })
    updated: Date;
}