//importar css
import "../css/delitos.css"

function Delitos() {
    return (
        <div className="container-component">
            <article>
                <div className="title">
                    <h1>Gestión de delitos</h1>
                    <h4>
                        Registrar, modificar y gestionar datos de los delitos cometidos por los internos, incluyendo información del juez que dicto el delito.
                    </h4>
                </div>
                <br/>
                <div className="form-container ">
                    <h2> Información del delito</h2>
                    <form className="w-100">
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" >Delito</label>
                            <select className="w-50" aria-label="x">
                                <option selected >Seleccione Delito</option>
                                <option value="M">Homicidio</option>
                                <option value="F">Asesinado</option>
                            </select>
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" >Juez</label>
                            <input type="text" className="w-50"/>
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" >Fecha de Detención</label>
                            <input type="date" className="w-50"/>
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" >Fecha de inicio de condena</label>
                            <input type="date" className="w-50"/>
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" >Duración de Condena</label>
                            <input type="number" className="w-50"/>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary mx-2" type="submit">
                                Guardar
                            </button>
                            <button className="btn btn-outline-secondary" type="submit">
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
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