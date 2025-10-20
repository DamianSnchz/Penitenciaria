

function ModificacionC() {
    return (
        <div className="container-component">
            <article>
                <div className="title">
                    <h1>Modificación de Condena</h1>
                    <h4>
                        Buscar interno por su legajo, se confirma y luego se realizan las modificaciones.
                    </h4>
                </div>
                <br />
                <div className="d-flex flex-column mb-4">
                    <label className="form-label" >Ingrese Legajo</label>
                    <input type="text" className="w-50" />
                </div>
                <button className="btn btn-primary" type="submit">
                    Buscar Interno
                </button>
                <br /><br />
                <h2>Datos Actuales de la Condena</h2>
                <div className="row my-4">
                    <div className="col-5 border-top border-light">
                        <h6 className="text-secondary">Nombre del interno</h6>
                        <b className="text-light">Damian Sanchez</b>
                    </div>
                    <div className="col-6 border-top border-light ms-5">
                        <h6 className="text-secondary">Delito</h6>
                        <b className="text-light">Violador</b>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-5 border-top border-light">
                        <h6 className="text-secondary">Condena actual</h6>
                        <b className="text-light">5 años</b>
                    </div>
                </div>
                <br />
                <h2>Modificar Condena</h2>
                <div className="d-flex w-100 justify-content-start my-4">
                    <div className="border-top border-light w-50">
                        <h6 className="text-secondary">Motivo de Reducción de Pena</h6>
                        <input type="text" className="w-100" />
                    </div>
                    <div className="border-top border-light w-50 ms-5">
                        <h6 className="text-secondary">Tiempo de Reducción de Pena</h6>
                        <input type="text" className="w-100" />
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">
                    Confirmar
                </button>
            </article>
        </div>
    );
}

export default ModificacionC;