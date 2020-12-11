import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Ingreso } from './ingreso.model';
import {CrearIngresoDto} from './dto/crear-ingreso-dto'
import { IngresosService } from './ingresos.service';
import { ActualizarIngresoDto } from './dto/actualizar-ingreso-dto';

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
  @UsePipes(ValidationPipe)
  postIngreso(@Body() crearIngresoDto:CrearIngresoDto):Ingreso {
    return this.ingresosService.postIngreso(crearIngresoDto);
  }

  @Delete('/:id')
  deleteIngreso(@Param('id')id:string):void {
    this.ingresosService.deleteIngreso(id);
  }

  @Put()
  @UsePipes(ValidationPipe)
  updateIngreso(@Body()actualizarIngresoDto: ActualizarIngresoDto):Ingreso{
    return this.ingresosService.updateIngreso(actualizarIngresoDto);
  }
}