import { useState } from "react";
import { useCartContext } from "../contextProvider/context.jsx";
import { InterfaceInformeIntPenDel} from "../interface/interfaceInformeIntPenDel.js"


function InformeDP() {
    const {setDatosInformeIntPenDel, datosInformeIntPenDel,informeIntPenDel} = useCartContext();


    return (
        <div className="container-component">
            <article>
                <div className="title">
                    <h1>Informe de delitos por Penitenciarias</h1>
                    <h4>
                        El informe muestra la cantidad de intenos agrupados por delitos y penitenciarias.
                    </h4>
                </div>
                <br />
                <button className="btn btn-primary" type="submit" onClick={informeIntPenDel}>
                    Generar informe
                </button>
                <br /><br />
                <table className="table mb-2">
                    <thead>
                        <tr>
                            <th scope="col">Penitenciaria</th>
                            <th scope="col">Delito</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosInformeIntPenDel.map((element : InterfaceInformeIntPenDel, index: number) =>(
                            <tr key={index}>
                                <th scope="row">{element.penNom}</th>
                                <td>{element.delDelito}</td>
                                <td>{element.intNombre}</td>
                                <td>{element.intApellido}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
            </article>
        </div>
    );
}

export default InformeDP;