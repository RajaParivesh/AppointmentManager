import {Param, Body, Get, Post, Put, Delete, JsonController, QueryParam, Patch} from "routing-controllers";
import {Slots} from "../Entity/Slots";
import {getConnectionManager, Repository} from "typeorm";
import {EntityFromBody, EntityFromParam} from "typeorm-routing-controllers-extensions";


@JsonController()
export class SlotController {

    private slotsRepository: Repository<Slots>;

    constructor() {
        this.slotsRepository = getConnectionManager().get().getRepository(Slots);
    }

    // create slots
    @Post("/slots")
    post(@EntityFromBody() slots: Slots ){
        return this.slotsRepository.save(slots);
    }

    // Get all slots of a given user_id
    @Get("/slots/:user_id")
    getSlots(@Param("user_id") user_id: number){
        return this.slotsRepository.find({user_id:user_id});
    }

    // Modify the slots
    @Patch("/slots/:id")
    async modifySlot(@Param("id") id:number, @EntityFromBody() slots: Slots ){
        const slot : Slots | undefined  = await this.slotsRepository.findOne({id:id});
        if (slot === undefined) return false;

        slot.start_date_time = slots.start_date_time;
        slot.end_date_time = slots.end_date_time;

        return this.slotsRepository.save(slot);
    }
}

