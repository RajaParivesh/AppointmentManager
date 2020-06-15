import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Slots} from "./Slots";

@Entity()
export class SlotStatus {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    slotId:number;

    @Column()
    statusId: number;

    @Column()
    userId: number;

    @Column()
    epoch: number;


    @ManyToOne(type => Slots, slot => slot.id)
    slot: Slots;
}
