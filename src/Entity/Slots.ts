import {Column, Entity, PrimaryGeneratedColumn, Timestamp} from "typeorm";

@Entity()
export class Slots {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    start_date_time:number;

    @Column()
    end_date_time: number;

    @Column()
    user_id: number;
}
