import {Column, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp} from "typeorm";
import {SlotStatus} from "./SlotStatus";

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


    @OneToMany(type => SlotStatus, slotStatus => slotStatus.slotId)
    slotStatus: SlotStatus[]
}
