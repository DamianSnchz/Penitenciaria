import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../contextProvider/context.jsx";


function RegistrarD() {
    
    //variable para la navegación
    const navegar = useNavigate();
    //variables y funciones de mi proveedor de datos
    const {validarForm,setCampos, setDatosForm,datosForm, error, setError,setObjetoDelito, objetoDelito,objetoInterno, setObjetoInterno,editarDatosDelito} = useCartContext();
    



    useEffect(()=>{
        //cargamos los campos de los inputs para hacer las validacios
        setCampos(["delDelito","delJuez","delFechDet","delFechIniCondena","delDuracion"]);
        

        return()=>{
            //limpio "campos"
            setCampos([]);
            setError({});
        }
    },[])

    

    function handleChange(e: any) {
        //para la validacion del formulario
        setDatosForm({...datosForm, [e.target.name]: e.target.value});
        setObjetoDelito({...objetoDelito, [e.target.name]: e.target.value});
    }

    function handleSubmit(e: React.FormEvent){
        //evita la carga de la pagina
        e.preventDefault();
        //paso las claves para validar las fechas. Si el metodo me devuelve "true" realizara la navegaciòn a "/internos"
        const valor = validarForm(["delFechDet","delFechIniCondena"]);
        const id = datosForm.idDelito ?? 0;
        if(valor){
            if(id != 0){
                editarDatosDelito(id);
                navegar("/delitos");
            }else{
                //agrego el sub objeto al objeto interno
                setObjetoInterno({...objetoInterno,idDelito: {...objetoDelito}});
                //para poder hacer las validaciones en la IU internos
                setDatosForm({...datosForm,delito: datosForm.delDelito, juez: datosForm.delJuez})
                //le doy tiempo de 1s para que React termine de ejecutar el metodo setDatosForm()
                //luego realiza la navegaciòn
                setTimeout(()=>{navegar("/internos");},1000);
            }
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
                            <label className="form-label" htmlFor="delDelito">Delito</label>
                            <select className="w-50" id="delDelito" onChange={handleChange} name="delDelito" value={datosForm?.delDelito ?? ""}>
                                <option value="" >Seleccione Delito</option>
                                <option value="Homicidio">Homicidio</option>
                                <option value="Asesinado">Asesinato</option>
                            </select>
                            {error.delDelito && <span className="error">{error.delDelito}</span>}
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" htmlFor="delJuez">Juez</label>
                            <input type="text" className="w-50" id="delJuez" name="delJuez" onChange={handleChange} value={datosForm?.delJuez?? ""}/>
                            {error.delJuez && <span className="error">{error.delJuez}</span>}
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" htmlFor="delFechDet">Fecha de Detención</label>
                            <input type="date" className="w-50" id="delFechDet" name="delFechDet" onChange={handleChange} value={datosForm?.delFechDet ?? ""}/>
                            {error.delFechDet && <span className="error">{error.delFechDet}</span>}
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" htmlFor="delFechIniCondena">Fecha de inicio de condena</label>
                            <input type="date" className="w-50" id="delFechIniCondena" name="delFechIniCondena" onChange={handleChange} value={datosForm?.delFechIniCondena ?? ""}/>
                            {error.delFechIniCondena && <span className="error">{error.delFechIniCondena}</span>}
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" htmlFor="delDuracion">Duración de Condena</label>
                            <input type="number" className="w-50" id="delDuracion" name="delDuracion" onChange={handleChange} value={datosForm?.delDuracion ?? ""}/>
                            {error.delDuracion && <span className="error">{error.delDuracion}</span>}
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary mx-2" type="submit">
                                Continuar
                            </button>
                            <button className="btn btn-outline-secondary" type="button" onClick={()=>{setDatosForm({}); setError({}); datosForm.idDelito ? navegar("/delitos") : setTimeout(()=>{navegar("/internos")},1000)}}>
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