import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert} from 'typeorm';
import * as argon2 from 'argon2';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 20})
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    accountType: number;

    @CreateDateColumn({type: 'timestamp'})
    created: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updated: Date;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    phone_number: string;

    @Column()
    website: string;

    @Column()
    description: string;

    @Column()
    avatar: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await argon2.hash(this.password);
    }
}
