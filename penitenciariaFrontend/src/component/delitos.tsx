
import { Link } from "react-router-dom";

function Delitos() {
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
                        <tr>
                            <th scope="row">23223</th>
                            <td>Tiburcio</td>
                            <td>Olivera</td>
                            <td>28/10/2000</td>
                            <td>28/10/2000</td>
                            <td>6</td>
                            <td><button className="btn btn-outline-secondary btn-sm">
                                Editar
                            </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">23223</th>
                            <td>Tiburcio</td>
                            <td>Olivera</td>
                            <td>28/10/2000</td>
                            <td>28/10/2000</td>
                            <td>6</td>
                            <td><button className="btn btn-outline-secondary btn-sm">
                                Editar
                            </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">23223</th>
                            <td>Tiburcio</td>
                            <td>Olivera</td>
                            <td>28/10/2000</td>
                            <td>28/10/2000</td>
                            <td>6</td>
                            <td><button className="btn btn-outline-secondary btn-sm">
                                Editar
                            </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
            </article>
        </div>
    );
}

export default Delitos;