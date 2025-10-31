import { useCartContext } from "../contextProvider/context"
//importamos interface delito
import {InterfaceDelito} from "../interface/interfaceDelito"

import { useNavigate} from "react-router-dom";

function Delitos() {
    //uso del context
    const {datosDelito, setObjetoDelito, setDatosForm} = useCartContext();

    const navegar = useNavigate();

    function irRegistrarDelito(){
        navegar("/registrarDelito");
    }

    return (
        <div className="container-component">
            <article>
                <div className="title">
                    <h1>Gestión de delitos</h1>
                    <h4>
                        Modificar y gestionar datos de los delitos cometidos por los internos, incluyendo información del juez que dicto el delito.
                    </h4>
                </div>
                <br/>
                <div className="input-container">
                    <div className="w-100">
                        <label className="form-label">Buscar Delito</label>
                        <input className="w-50" type="text"/>
                    </div>
                </div>
                <h2>Internos Existentes</h2>
                <table className="table mb-2">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Delito</th>
                            <th scope="col">Juez</th>
                            <th scope="col">Fecha Detención</th>
                            <th scope="col">Fecha de Inicio de Condena</th>
                            <th scope="col">Duración de condena</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosDelito.map((d: InterfaceDelito)=>(
                            d.delEstado === "activo" ?
                                 <tr key={d.idDelito}>
                                <th scope="row">{d.idDelito}</th>
                                <td>{d.delDelito}</td>
                                <td>{d.delJuez}</td>
                                <td>{String(d.delFechDet)}</td>
                                <td>{String(d.delFechIniCondena)}</td>
                                <td>{d.delDuracion}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm" onClick={()=> {setDatosForm(d); irRegistrarDelito()}} >
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        : ""))}
                    </tbody>
                </table>
                <br />
            </article>
        </div>
    );
}

export default Delitos;