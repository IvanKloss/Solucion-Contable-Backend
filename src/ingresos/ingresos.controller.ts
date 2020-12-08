import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Ingreso } from './ingreso.model';
import {CrearIngresoDto} from './dto/crear-ingreso-dto'
import { IngresosService } from './ingresos.service';

@Controller('ingresos')
export class IngresosController {
  constructor(private ingresosService: IngresosService) { }

  @Get()
  getIngresos(): Ingreso[] {
    return this.ingresosService.getIngresos();
  }

  @Get('/:id')
  GetIngresoByID(@Param('id')id:string ):Ingreso{
    return this.ingresosService.getIngresoByID(id);
  } 

  @Post()
  postIngreso(@Body() crearIngresoDto:CrearIngresoDto):Ingreso {
    return this.ingresosService.postIngreso(crearIngresoDto);
  }

  @Delete('/:id')
  deleteIngreso(@Param('id')id:string):void {
    this.ingresosService.deleteIngreso(id);
  }
}