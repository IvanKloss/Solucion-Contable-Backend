import { Body, Controller, Get, Post } from '@nestjs/common';
import { Ingreso } from './ingreso.model';

import { IngresosService } from './ingresos.service';

@Controller('ingresos')
export class IngresosController {
  constructor(private ingresosService: IngresosService) { }

  @Get()
  getIngresos(): Ingreso[] {
    return this.ingresosService.getIngresos();
  }

  @Post()
  postIngreso(
    @Body('monto') monto: number,
    @Body('descripcion') descripcion: string,
    @Body('documento') documento: string,
    @Body('fuente') fuente: string,
    @Body('imagen') imagen: string,
  ): Ingreso {
    //console.log('body ', body)
    return this.ingresosService.postIngreso(monto, descripcion, documento, fuente, imagen);
  }

}