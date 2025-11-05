import { InterfaceIntProfesion} from "../interface/interfaceIntProfesion";
import {useCartContext} from "../contextProvider/context";


function InformeRP() {
    const {datosInformeIntProfesion,informeIntProfesion } = useCartContext();

    return (
        <div className="container-component">
            <article>
                <div className="title">
                    <h1>Informe de Internos con Reducción de Pena por Profesíon</h1>
                    <h4>
                        El informe muestra la cantidad de intenos de los cuales sus condenas fueron reducidad por su profesión.
                    </h4>
                </div>
                <br />
                <button className="btn btn-primary" type="submit" onClick={informeIntProfesion}>
                    Generar informe
                </button>
                <br /><br />
                <table className="table mb-2">
                    <thead>
                        <tr>
                            <th scope="col">Profesión</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Fecha nacimiento</th>
                            <th scope="col">DNI/CUIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosInformeIntProfesion.map((element: InterfaceIntProfesion, index: number)=>(
                        <tr key={index}>
                            <th scope="row">{element.intProfesion}</th>
                            <td>{element.intNombre}</td>
                            <td>{element.intApellido}</td>
                            <td>{String(element.intFechNac)}</td>
                            <td>{element.intDni}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <br />
            </article>
        </div>
    );
}

export default InformeRP;