import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';
import * as argon2 from 'argon2';

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

    @BeforeInsert()
    async hashPassword() {
        this.password = await argon2.hash(this.password);
    }
}