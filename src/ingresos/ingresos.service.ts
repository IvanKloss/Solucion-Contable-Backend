import { Injectable } from '@nestjs/common';
import { CrearIngresoDto } from './dto/crear-ingreso-dto';
import { Ingreso } from './ingreso.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class IngresosService {
    private ingresos:Ingreso[] = [];

    getIngresos():Ingreso[] {
        console.log("get");
        return this.ingresos
    }
    
    getIngresoByID(id: string):Ingreso{
        console.log("get/id")
        return this.ingresos.find(ingreso => ingreso.id === id)
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
    
    deleteIngreso(id:string){
        this.ingresos = this.ingresos.filter(ingreso => ingreso.id !== id)
    }
}
