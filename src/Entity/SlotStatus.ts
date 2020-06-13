import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Slots} from "./Slots";

@Entity()
export class SlotStatus {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    slotId:number;

    @Column()
    status_id: number;

    @Column()
    user_id: number;

    @Column()
    timestamp: number;


    @ManyToOne(type => Slots, slot => slot.id)
    slot: Slots;
}
