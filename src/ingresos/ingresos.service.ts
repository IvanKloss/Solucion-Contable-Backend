import { Injectable } from '@nestjs/common';

@Injectable()
export class IngresosService {
    private ingresos: [];

    getIngresos() {
        return this.ingresos
    }

}
