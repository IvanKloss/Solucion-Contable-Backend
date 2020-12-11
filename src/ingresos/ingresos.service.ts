import { Injectable, NotFoundException } from '@nestjs/common';
import { CrearIngresoDto } from './dto/crear-ingreso-dto';
import { Ingreso } from './ingreso.model';
import { v4 as uuid } from 'uuid';
import { ActualizarIngresoDto } from './dto/actualizar-ingreso-dto';

@Injectable()
export class IngresosService {
    private ingresos:Ingreso[] = [];

    getIngresos():Ingreso[] {
        console.log("get");
        return this.ingresos
    }
    
    getIngresoByID(id: string):Ingreso{
        console.log("get/id");
        const result:Ingreso = this.ingresos.find(ingreso => ingreso.id === id)
        if (!result){
            throw new NotFoundException();
        }
        return result;
    }

    postIngreso(crearIngresoDto: CrearIngresoDto):Ingreso {
        const {monto, descripcion, documento, fuente, imagen} = crearIngresoDto
        console.log("post");
        const ingreso: Ingreso = { 
            id: uuid(),
            monto,
            descripcion, 
            documento, 
            fuente, 
            imagen}
        this.ingresos.push(ingreso);
        return ingreso;
    }
    
    deleteIngreso(id:string): void{
        const resultado = this.getIngresoByID(id)
        this.ingresos = this.ingresos.filter(ingreso => ingreso.id !== resultado.id)
    }

    updateIngreso(actualizarIngresoDto: ActualizarIngresoDto): Ingreso{
        console.log("put");
        const {id, monto, descripcion, documento, fuente, imagen} = actualizarIngresoDto;
        this.deleteIngreso(id);
        const ingresoActualizado: Ingreso = { 
            id,
            monto,
            descripcion, 
            documento, 
            fuente, 
            imagen}
        this.ingresos.push(ingresoActualizado)
        return ingresoActualizado;
    }
}
