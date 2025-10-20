//importar css
//import "../css/penitenciaria.css"
import { useEffect } from "react";
import { useCartContext } from "../contextProvider/context";
//importo mi interfaz Penitenciaria (para indicar el tipo de dato en el MAP())
import { InterfacePenitenciaria } from "../interface/interfacePenitenciaria";


function Penitenciaria() {

    //importamos mis datos y funciones de mi proveedor
    const { validarForm, datosForm, setDatosForm, setCampos, error, datosPenitenciaria,enviarDatosPenitenciaria} = useCartContext();

    useEffect(() => {
        setCampos(["penNom", "penCapacidad", "penDireccion", "penTipo"]);

        return () => {
            setCampos([]);
            setDatosForm({});
        }
    }, [])


    function handleChange(e: any) {
        setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
    }


    function handledSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (validarForm()) {
            console.log("entro en el if");
            enviarDatosPenitenciaria();
        }
        return false;
    }

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
                    <form className="w-100" onSubmit={handledSubmit}>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" htmlFor="penNom">Nombre de Penitenciaria</label>
                            <input type="text" className="w-50" id="penNom" name="penNom" onChange={handleChange} value={datosForm?.penNom ?? ""}/>
                            {error.penNom && <span className="error">{error.penNom}</span>}
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" htmlFor="penDireccion">Dirección</label>
                            <input type="text" className="w-50" id="penDireccion" name="penDireccion" onChange={handleChange} value={datosForm?.penDireccion ?? ""} />
                            {error.penDireccion && <span className="error">{error.penDireccion}</span>}
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" htmlFor="penCapacidad">Capacidad</label>
                            <input type="number" className="w-50" id="penCapacidad" name="penCapacidad" onChange={handleChange} value={datosForm?.penCapacidad ?? ""}/>
                            {error.penCapacidad && <span className="error">{error.penCapacidad}</span>}
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" htmlFor="penTipo">Tipo</label>
                            <select className="w-50" aria-label="x" id="penTipo" name="penTipo" onChange={handleChange}>
                                <option value={datosForm?.penTipo ?? ""} >Seleccione Tipo</option>
                                <option value="Hombres">Hombres</option>
                                <option value="Mujeres">Mujeres</option>
                                <option value="Mixto">Mixto</option>
                            </select>
                            {error.penTipo && <span className="error">{error.penTipo}</span>}
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Agregar Penitenciaria
                        </button>
                    </form>
                </div>
                <br /><br />
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
                        {datosPenitenciaria.map((e: InterfacePenitenciaria) => (
                            <tr key={e.idPenitenciaria}>
                                <th scope="row">{e.idPenitenciaria}</th>
                                <td>{e.penNom}</td>
                                <td>{e.penDireccion}</td>
                                <td>{e.penCapacidad}</td>
                                <td>{e.penTipo}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm me-2">
                                        Editar
                                    </button>
                                    <button className="btn btn-danger btn-sm">
                                        Eliminar
                                    </button>
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

export default Penitenciaria;