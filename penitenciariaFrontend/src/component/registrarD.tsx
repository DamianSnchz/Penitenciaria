import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../contextProvider/context.jsx";

function RegistrarD() {
    
    //variable para la navegación
    const navegar = useNavigate();
    //variables y funciones de mi proveedor de datos
    const {validarForm,setCampos, setDatosForm,datosForm, error,campos} = useCartContext();

    useEffect(()=>{
        //cargamos los campos de los inputs para hacer las validacios
        setCampos(["Rdelito","Rjuez","fechaDet","fechaIniCon","duracion"]);

        return()=>{
            //limpio "campos"
            setCampos([]);
        }
    },[])

    

    function handleChange(e: any) {
        //para la validacion del formulario
        setDatosForm({...datosForm, [e.target.name]: e.target.value});
    }

    function handleSubmit(e: React.FormEvent){
        //evita la carga de la pagina
        e.preventDefault();
        //paso las claves para validar las fechas. Si el metodo me devuelve "true" realizara la navegaciòn a "/internos"
        const valor = validarForm(["fechaDet","fechaIniCon"])
        console.log("+++++++++++valor: " + valor);
        if(valor){
            setDatosForm({...datosForm,delito: datosForm.Rdelito, juez: datosForm.Rjuez})
            //le doy tiempo de 1s para que React termine de ejecutar el metodo setDatosForm()
            //luego realiza la navegaciòn
            setTimeout(()=>{navegar("/internos");},1000);
        }else{
            return false;
        }
    }

    return (
        <div className="container-component">
            <article>
                <div className="title">
                    <h1>Registrar delitos</h1>
                    <h4>
                        Registrar delitos cometidos por los internos, incluyendo información del juez que dicto el delito.
                    </h4>
                </div>
                <br />
                <div className="form-container ">
                    <h2> Información del delito</h2>
                    <form className="w-100" onSubmit={(e) => handleSubmit(e)}>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" htmlFor="Rdelito">Delito</label>
                            <select className="w-50" aria-label="x" id="Rdelito" onChange={handleChange} name="Rdelito">
                                <option value="" >Seleccione Delito</option>
                                <option value="Homicidio">Homicidio</option>
                                <option value="Asesinado">Asesinado</option>
                            </select>
                            {error.Rdelito && <span className="error">{error.Rdelito}</span>}
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" htmlFor="Rjuez">Juez</label>
                            <input type="text" className="w-50" id="Rjuez" name="Rjuez" onChange={handleChange}/>
                            {error.Rjuez && <span className="error">{error.Rjuez}</span>}
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" htmlFor="fechaDet">Fecha de Detención</label>
                            <input type="date" className="w-50" id="fechaDet" name="fechaDet" onChange={handleChange}/>
                            {error.fechaDet && <span className="error">{error.fechaDet}</span>}
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" htmlFor="fechaIniCon">Fecha de inicio de condena</label>
                            <input type="date" className="w-50" id="fechaIniCon" name="fechaIniCon" onChange={handleChange}/>
                            {error.fechaIniCon && <span className="error">{error.fechaIniCon}</span>}
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" htmlFor="duracion">Duración de Condena</label>
                            <input type="number" className="w-50" id="duracion" name="duracion" onChange={handleChange}/>
                            {error.duracion && <span className="error">{error.duracion}</span>}
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary mx-2" type="submit">
                                Continuar
                            </button>
                            <button className="btn btn-outline-secondary" type="button" onClick={()=>{setDatosForm({});setTimeout(()=>{navegar("/internos")},1000)}}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </article>
        </div>
    );
}

export default RegistrarD;