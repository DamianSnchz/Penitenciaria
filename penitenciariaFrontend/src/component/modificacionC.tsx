import { InterfaceCondena } from "../interface/interfaceCondena";
import { useCartContext } from "../contextProvider/context";
import { useEffect, useState } from "react";

function ModificacionC() {
    const { formatoFecha,obtenerCondena, editarDatosCondena, objetoCondena, setCampos, error, setDatosForm, datosForm, validarForm, setObjetoCondena, datosBuscados } = useCartContext();
    const [legajo, setLegajo] = useState(0)
    const [errorL, setErroL] = useState("");
    const [datos, setDatos] = useState<InterfaceCondena>();

    useEffect(() => {
        setCampos(["conTiempoRedCond", "conMotRedPena"]);
    }, [])

    useEffect(() => {
        setDatos(objetoCondena );
    }, [objetoCondena])

    function handlerChange(e: any) {
        let valor: any = e.target.value;
        if (e.target.name === "legajo") {
            setObjetoCondena({});
            setLegajo(e.target.value);
        } else {
            setDatosForm({ ...datosForm, [e.target.name]: valor })
            setObjetoCondena({ ...objetoCondena, [e.target.name]: valor })
        }



    }

    function validarLegajo() {
        try {
            const legajoNum = Number(legajo);
            if (!isNaN(legajoNum) && legajoNum > 0) {
                //llamo a la funcion obtenerCondena me devuelve una condena en el caso de que exista sino "null"
                const condena = obtenerCondena(legajoNum);
                if (condena) {
                    if (condena.conEstado === "activo") {
                        setErroL("");
                    } else {
                        setErroL("Condena dada de baja");
                    }
                } else {
                    setErroL("No se encontró condena para ese legajo");
                }
            } else {
                setErroL("Debe ingresar un número");
            }
        } catch (msj) {
            alert("Error: " + msj);
        }
    }

    function validarDatos() {
        const valor = validarForm();
        if (valor) {
            editarDatosCondena(datos?.idCondena);
            setObjetoCondena({});
        }
    }

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
                    <label className="form-label" htmlFor="legajo">Ingrese Legajo</label>
                    <input type="number" className="w-50" id="legajo" name="legajo" value={String(legajo ?? "") ?? ""} onChange={handlerChange} />
                    <span className="error">{errorL}</span>
                </div>
                <button className="btn btn-primary" type="submit" onClick={() => { validarLegajo() }}>
                    Buscar Interno
                </button>
                <br /><br />
                <h2>Datos Actuales de la Condena</h2>
                <div className="row my-4">
                    <div className="col-5 border-top border-light">
                        <h6 className="text-secondary">Nombre del interno</h6>
                        <b className="text-light">{datos?.conEstado === "activo" ? String(datos?.legajo?.intNombre ?? "") + " " + String(datos?.legajo?.intApellido ?? "") : null}</b>
                    </div>
                    <div className="col-6 border-top border-light ms-5">
                        <h6 className="text-secondary">Delito</h6>
                        <b className="text-light">{datos?.conEstado === "activo" ? datos?.idDelito?.delDelito ?? "" : null}</b>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-5 border-top border-light">
                        <h6 className="text-secondary">Condena actual</h6>
                        <b className="text-light">{datos?.conEstado === "activo" ? String(datos?.conDuracion + " meses") ?? "" : null}</b>
                    </div>
                    <div className="col-6 border-top border-light ms-5">
                        <h6 className="text-secondary">Fecha Fin de Condena</h6>
                        <b className="text-light">{datos?.conEstado === "activo" ? String(formatoFecha(datos?.conFechFinCon) ?? "") ?? "" : null}</b>
                    </div>
                </div>
                <br />
                <h2>Modificar Condena</h2>
                <div className="d-flex w-100 justify-content-start my-4">
                    <div className="border-top border-light w-50">
                        <h6 className="text-secondary">Motivo de Reducción de Pena</h6>
                        <input type="text" id="conMotRedPena" name="conMotRedPena" className="w-100" value={datos?.conEstado === "activo" ? String(datos?.conMotRedPena ?? "") ?? "" : ""} onChange={handlerChange} />
                        {error.conMotRedPena && <span className="error">{error.conMotRedPena}</span>}
                    </div>
                    <div className="border-top border-light w-50 ms-5">
                        <h6 className="text-secondary">Tiempo de Reducción de Pena</h6>
                        <input type="number" className="w-100" id="conTiempoRedCond" name="conTiempoRedCond" value={datos?.conEstado === "activo" ? String(datos?.conTiempoRedCond ?? "") ?? "" : ""} onChange={handlerChange} />
                        {error.conTiempoRedCond && <span className="error">{error.conTiempoRedCond}</span>}
                    </div>
                </div>
                <button className="btn btn-primary" type="submit" onClick={() => { validarDatos() }}>
                    Confirmar
                </button>
            </article>
        </div>
    );
}

export default ModificacionC;