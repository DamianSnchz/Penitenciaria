import { useEffect, useState } from "react";
import { useCartContext } from "../contextProvider/context.jsx"
import { InterfaceInformeFecha } from "../interface/interfaceInformeFecha.ts";

function InformeFC() {
    const { setDatosInformePorFecha, datosInformePorFecha, informeXFecha, setCampos, validarForm, setDatosForm, datosForm, error, formatoFecha } = useCartContext();

    useEffect(() => {
        setCampos(["fechaInforme"]);
        return () => {
            setDatosInformePorFecha([]);
        }
    }, [])

    function changeHandler(e: any) {
        const value = e.target.value;
        setDatosForm({ ...datosForm, [e.target.name]: value });
        setDatosInformePorFecha([]);
    }

    function onSubmit() {
        const valor = validarForm(["fechaInforme"]);
        if (valor) {
            informeXFecha(datosForm.fechaInforme);
        }
    }



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
                    <label className="form-label" htmlFor="fechaInforme">Fecha de corte</label>
                    <input type="date" className="w-50" name="fechaInforme" id="fechaInforme" onChange={changeHandler} />
                    {error.fechaInforme && <span className="error">{error.fechaInforme}</span>}
                </div>
                <button className="btn btn-primary" type="submit" onClick={onSubmit}>
                    Generar informe
                </button>
                <br /><br />
                <table className="table mb-2">
                    <thead>
                        <tr>
                            <th scope="col">Penitenciaria</th>
                            <th scope="col">Delito</th>
                            <th scope="col">Nombre y Apellido</th>
                            <th scope="col">Dni/Cuil</th>
                            <th scope="col">Fecha Inicio Condena</th>
                            <th scope="col">Fecha Fin Condena</th>
                            <th scope="col">Fecha Consulta</th>
                            <th scope="col">Condena Cumplida</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosInformePorFecha.map((i: InterfaceInformeFecha, index: number) => (
                            <tr key={index}>
                                <th>{i.penitenciaria}</th>
                                <td>{i.delito}</td>
                                <td>{i.name + " " + i.apellido}</td>
                                <td>{i.dni}</td>
                                <td>{formatoFecha(i.fechaInicio)}</td>
                                <td>{formatoFecha(i.fechaFin)}</td>
                                <td>{formatoFecha(i.fechaIngresada)}</td>
                                <td>
                                    {(i.porcentaje ?? 0).toFixed(2) + "%"}
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar" style={{width: `${(i.porcentaje ?? 0).toFixed(2)}%` }}></div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
            </article>
        </div>
    );
}

export default InformeFC;