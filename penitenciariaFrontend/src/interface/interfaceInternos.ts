import { InterfacePenitenciaria } from "./interfacePenitenciaria";
import {InterfaceDelito} from "./interfaceDelito";

export interface InterfaceInterno{
    legajo: number;
    intDni:String;
    intFechNac: Date;
    intSexo:String;
    intTipo:String;
    idDelito:InterfaceDelito;
    idPenitenciaria:InterfacePenitenciaria;
    intEstado:String;
    intEstadoCivil:String;
    intAlias:String;
    intDomicilio:String;
    intDptoNac:String;
    intNacionalidad:String;
    intPciaNac:String;
    intProfesion:String;
    intNombre:String;
    intApellido:String;
} 