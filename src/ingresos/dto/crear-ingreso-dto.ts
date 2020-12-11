import { IsNotEmpty, IsNumber } from "class-validator";

export class CrearIngresoDto{
@IsNotEmpty()
@IsNumber()
monto: number;

@IsNotEmpty()
descripcion: string;

@IsNotEmpty()
documento: string;

@IsNotEmpty()
fuente: string;

@IsNotEmpty()
imagen: string;
}