import {Param, Body, Get, Post, Put, Delete, JsonController, QueryParam, Patch, Authorized} from "routing-controllers";
import {Slots} from "../Entity/Slots";
import {getConnectionManager, Repository} from "typeorm";
import {EntityFromBody, EntityFromParam} from "typeorm-routing-controllers-extensions";
import {SlotStatus} from "../Entity/SlotStatus";


@JsonController()
export class SlotController {

    private slotsRepository: Repository<Slots>;
    private slotStatusRepository: Repository<SlotStatus>;

    constructor() {
        this.slotsRepository = getConnectionManager().get().getRepository(Slots);
        this.slotStatusRepository = getConnectionManager().get().getRepository(SlotStatus);
    }

    // create slots
    @Authorized()
    @Post("/slots")
    async post(@EntityFromBody() slots: Slots ){
        const slot = await this.slotsRepository.save(slots);
        const slotStatus= {
            user_id: slot.user_id,
            slotId: slot.id,
            status_id: 1,
            timestamp: Date.now()/1000
        };
        await this.slotStatusRepository.save(slotStatus);
        return this.slotsRepository.findOne({id: slot.id});
    }

    // Get all slots of a given user_id
    @Authorized()
    @Get("/slots/:user_id")
    getSlots(@Param("user_id") user_id: number){
        return this.slotsRepository.find({user_id:user_id});
    }

    // Modify the slots
    @Authorized()
    @Patch("/slots/:id")
    async modifySlot(@Param("id") id:number, @EntityFromBody() slots: Slots ){
        const slot : Slots | undefined  = await this.slotsRepository.findOne({id:id});
        if (slot === undefined) return false;

        slot.start_date_time = slots.start_date_time;
        slot.end_date_time = slots.end_date_time;

        return this.slotsRepository.save(slot);
    }
}

