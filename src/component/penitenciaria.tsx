//importar css
//import "../css/penitenciaria.css"

function Penitenciaria() {
    return (
        <div className="container-component">
            <article>
                <div className="title">
                    <h1>Gestión de Penitenciarias</h1>
                    <h4>
                        Registrar, modificar y gestionar datos de las penitenciarias de la provincia.
                    </h4>
                </div>
                <br />
                <div className="form-container ">
                    <h2> Información de Penitenciaria</h2>
                    <form className="w-100">
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" >Nombre de Penitenciaria</label>
                            <input type="text" className="w-50" />
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" >Dirección</label>
                            <input type="text" className="w-50" />
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" >Capacidad</label>
                            <input type="number" className="w-50" />
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" >Tipo</label>
                            <select className="w-50" aria-label="x">
                                <option selected >Seleccione Tipo</option>
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                            </select>
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Agregar Penitenciaria
                        </button>
                    </form>
                </div>
                <br/><br/>
                <h2>Penitenciarias Registradas</h2>
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

export default Penitenciaria;