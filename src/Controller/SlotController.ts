import {
    Param,
    Get,
    Post,
    JsonController,
    Patch,
    Authorized,
    Req, Delete
} from "routing-controllers";
import {Slots} from "../Entity/Slots";
import {getConnectionManager, Repository} from "typeorm";
import {EntityFromBody} from "typeorm-routing-controllers-extensions";
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
    async post(@EntityFromBody() slots: Slots, @Req() req: any ){
        slots.userId = req.auth.user.id;
        slots.statusId = 1;
        const slot = await this.slotsRepository.save(slots);
        const slotStatus= {
            userId: slot.userId,
            slotId: slot.id,
            statusId: slots.statusId,
            epoch: Math.floor(Date.now()/1000)
        };
        await this.slotStatusRepository.save(slotStatus);
        return this.slotsRepository.findOne({id: slot.id});
    }

    // Get all slots of a given user_id
    @Authorized()
    @Get("/slots")
    getSlots(@Req() req: any ){
        return this.slotsRepository.find({userId:req.auth.user.id});
    }

    // Modify the slots
    @Authorized()
    @Patch("/slots/:id")
    async modifySlot(@Param("id") id:number, @EntityFromBody() slots: Slots ){
        const slot : Slots | undefined  = await this.slotsRepository.findOne({id:id});
        if (slot === undefined) return false;

        slot.epochStart = slots.epochStart;
        slot.epochEnd = slots.epochEnd;

        return this.slotsRepository.save(slot);
    }

    @Authorized()
    @Delete("/slots/:id")
    async deleteSlot(@Param("id")  id: number){
        await this.slotStatusRepository.delete({slotId:id})
        return this.slotsRepository.delete({id:id});
    }
}

