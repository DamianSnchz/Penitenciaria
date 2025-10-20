

function InformeFC() {
    return (
        <div className="container-component">
            <article>
                <div className="title">
                    <h1>Informe de Condenas Cumplidas</h1>
                    <h4>
                        El informe muestra el porcentaje de cumplimiento de condenas de cada uno de los internos, dada una fecha determinada.
                    </h4>
                </div>
                <br />
                <div className="d-flex flex-column mb-4">
                            <label className="form-label" >Fecha de corte</label>
                            <input type="date" className="w-50"/>
                        </div>
                <button className="btn btn-primary" type="submit">
                    Generar informe
                </button>
                <br /><br />
                <table className="table mb-2">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Capacidad</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">23223</th>
                            <td>Penitenciaria girasoles</td>
                            <td>Av Belgrano 1444</td>
                            <td>580</td>
                            <td>Masculino</td>
                            <td><button className="btn btn-outline-secondary btn-sm">
                                Editar
                            </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">23223</th>
                            <td>Penitenciaria girasoles</td>
                            <td>Av Belgrano 1444</td>
                            <td>580</td>
                            <td>Masculino</td>
                            <td><button className="btn btn-outline-secondary btn-sm">
                                Editar
                            </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">23223</th>
                            <td>Penitenciaria girasoles</td>
                            <td>Av Belgrano 1444</td>
                            <td>580</td>
                            <td>Masculino</td>
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

export default InformeFC;