import { Injectable } from '@nestjs/common';
import { Ingreso } from './ingreso.model';

@Injectable()
export class IngresosService {
    private ingresos:Ingreso[] = [];

    getIngresos() {
        console.log("get");
        return this.ingresos
    }

    postIngreso(monto: number, descripcion: string, documento: string, fuente: string, imagen: string) {
        console.log("post");
        const ingreso: Ingreso = { 
            monto,
            descripcion, 
            documento, 
            fuente, 
            imagen }
        this.ingresos.push(ingreso);
        return ingreso;
    }
}
