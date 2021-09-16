import { SetMetadata } from "@nestjs/common";

export const Role = (role : string)=>
    //Altyera o comportamento de uma var, func, metodo ou classe
    SetMetadata('role', role);