import {IsNotEmpty, IsNumber, IsUUID} from 'class-validator'

export class ActualizarIngresoDto{

@IsUUID(4)
@IsNotEmpty()
id:string;

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