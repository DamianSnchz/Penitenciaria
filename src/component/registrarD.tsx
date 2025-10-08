import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";



function RegistrarD() {
    //variable para guardar campos del formulario
    const [formData, setFormData] = useState({ delito: "", juez: "" });
    //variable para la navegación
    const navegar = useNavigate();

    function handleChange(e: any) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();//evita la carga de la pagina
        navegar("/internos", {state: formData});//envio el objeto a la ruta "usando el state de React"
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
                            <label className="form-label" >Delito</label>
                            <select className="w-50" aria-label="x" value={formData.delito} onChange={handleChange} name="delito">
                                <option value="" >Seleccione Delito</option>
                                <option value="Homicidio">Homicidio</option>
                                <option value="Asesinado">Asesinado</option>
                            </select>
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" >Juez</label>
                            <input type="text" className="w-50" name="juez" value={formData.juez} onChange={handleChange}/>
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" >Fecha de Detención</label>
                            <input type="date" className="w-50" />
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" >Fecha de inicio de condena</label>
                            <input type="date" className="w-50" />
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label className="form-label" >Duración de Condena</label>
                            <input type="number" className="w-50" />
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary mx-2" type="submit">
                                Continuar
                            </button>
                            <button className="btn btn-outline-secondary" type="submit">
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