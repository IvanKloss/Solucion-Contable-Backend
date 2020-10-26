import { Controller, Get } from '@nestjs/common';

import { IngresosService } from './ingresos.service';

@Controller('ingresos')
export class IngresosController {
    constructor(private ingresosService: IngresosService) { }


    @Get()
    getIngresos() {
        return this.ingresosService.getIngresos();
    }

}