import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class SlotStatus {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    slot_id:number;

    @Column()
    status_id: number;

    @Column()
    user_id: number;

    @Column()
    timestamp: number;
}
