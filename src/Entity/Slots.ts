import {Column, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp} from "typeorm";
import {SlotStatus} from "./SlotStatus";

@Entity()
export class Slots {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    epochStart:number;

    @Column()
    epochEnd: number;

    @Column()
    userId: number;


    @OneToMany(type => SlotStatus, slotStatus => slotStatus.slotId)
    slotStatus: SlotStatus[]
}
