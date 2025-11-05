import {InterfaceDelito} from "./interfaceDelito"
import {InterfaceInterno} from "./interfaceInternos"

export interface InterfaceCondena{
    idCondena: number;
    legajo: InterfaceInterno;
    idDelido: InterfaceDelito;
    conDuracion: number;
    conFechFinCon: Date;
    conMotRedPena: String;
    conTiempoRedCond: number;
    conFechIniCon: Date;
}