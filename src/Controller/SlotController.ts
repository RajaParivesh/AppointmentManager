import {Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers";

@Controller()
export class SlotController {

    @Get("/slots")
    getAll() {
        return "This action returns all slots";
    }

    @Get("/slots/:id")
    getOne(@Param("id") id: number) {
        return "This action returns slots #" + id;
    }

    @Post("/slots")
    post(@Body() slot: any) {
        return "Saving slot...";
    }

    @Put("/slots/:id")
    put(@Param("id") id: number, @Body() user: any) {
        return "Updating a slot...";
    }

    @Delete("/slots/:id")
    remove(@Param("id") id: number) {
        return "Removing slot...";
    }

}
