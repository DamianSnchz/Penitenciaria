import "../css/internos.css"
//importar uselocation para poder recibir datos por parametros
import { Link} from "react-router-dom";
//importar mi proveedor ContextProvider
import { useCartContext } from "../contextProvider/context.jsx";
import { useEffect } from "react";
//importar interface Penitenciaria para usarlo en el select
import {InterfacePenitenciaria} from "../interface/interfacePenitenciaria.js"
import  {InterfaceInterno} from "../interface/interfaceInternos.ts";



function Internos() {
	//función compartida del proveedor de datos
	const { validarForm, datosForm, setDatosForm, error, setCampos, datosPenitenciaria, enviarDatosInternos,objetoInterno, setObjetoInterno,datosInterno,eliminarInterno,editarDatoInterno,valoresEditar} = useCartContext();


	

	useEffect(() => {
		//paso los campos de cada inputs para poder hacer las validaciones
		setCampos(["intApellido", "intNombre", "intSexo", "intAlias", "intFechNac", "intEstadoCivil", "intDptoNac",
			"intPciaNac", "intNacionalidad", "intProfesion", "intDireccion", "intDni", "intTipo","delito","juez", 
			"idPenitenciaria","fechaIngreso","intDomicilio"]);

		return() => {
			//limpio "campos" para que al ingresar al componente "delitos" pueda cargar los ID de sus nuevos inputs
			//para hacer las validaciones
			setCampos([]);
		}
	}, [])//se ejecuta solo una vez cuando se realiza el montaje y desmontaje


	
	//función para asignar valor a mi "datosForm" proveniente de mi proveedor de datos
	function handleChange(e: any) {
		
		//caso especial a la hora de utilizar el select (para poder capturar el objeto seleccionado)
		if(e.target.name === "idPenitenciaria"){
			const id = Number(e.target.value);
			//busco el objeto en "datosPenitenciaria" que tiene todos los objetos de la peticion
			const penitenciaria = datosPenitenciaria.find((p: InterfacePenitenciaria) => p.idPenitenciaria === id) || null;
			//Agrego el id a datosForm para mantener las validaciones de los inputs
			setDatosForm({...datosForm, idPenitenciaria: id});
			//agrego el subObjeto penitenciaria al objeto internos
			setObjetoInterno({...objetoInterno, idPenitenciaria: {...penitenciaria}})
		}else{
			//El operador spread "dispersar" (...) copia todas las propiedades del objeto datosForm en un nuevo objeto
			//Por medio de los corchetes indico que a e.target.name lo utilice como clave de objeto 
			setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
			setObjetoInterno({...objetoInterno, [e.target.name]: e.target.value});
		}


		
	}

	//función que se ejecuta cuando se envía el formulario
	function handledSubmit(e: React.FormEvent) {
		e.preventDefault();
		//pasamos las fechas a validar
		const id = datosForm.legajo ?? 0;
		const valor = validarForm(["intFechNac","fechaIngreso"]);
		
		if(valor){
			if(id !== 0){
				editarDatoInterno(id);
			}else{
				enviarDatosInternos();
			}
		}
		return valor;
	}


	return (
		<div className="container-component">
			<article>
				<div className="d-flex justify-content-between">
					<div className="title">
						<h1>Gestión de Internos</h1>
						<h4>
							Registrar, modificar y gestionar datos personales de internos, incluyendo información de ingreso.
						</h4>
					</div>
					<Link to={"/registrarDelito"} className={`btn btn-outline-secondary btn-sm ${datosForm.legajo ? "disabled" : ""}`}>Registrar Delito</Link>
				</div>
				<div className="form-container ">
					<h2> Información del Inteno</h2>
					<form className="w-100" id="form-internos" onSubmit={(e) => { handledSubmit(e) }}>
						<input hidden id="legajo" name="legajo" value={datosForm.legajo ?? 0} readOnly/>
						<div className="input-container">
							<div>
								<label className="form-label" htmlFor="intApellido">Apellido</label>
								<input type="text" name="intApellido" id="intApellido" onChange={handleChange} value={datosForm?.intApellido ?? ""}/>
								{error.intApellido && <span className="error" >{error.intApellido}</span>}
							</div>
							<div>
								<label className="form-label" htmlFor="intNombre">Nombre</label>
								<input type="text" name="intNombre" id="intNombre" onChange={handleChange} value={datosForm?.intNombre ?? ""}/>
								{error.intNombre && <span className="error" >{error.intNombre}</span>}
							</div>
						</div>
						<div className="input-container">
							<div>
								<label className="form-label" htmlFor="intSexo">Genero</label>
								<select aria-label="x" name="intSexo" id="intSexo" onChange={handleChange} value={datosForm?.intSexo ?? ""}>
									<option value="">Seleccione género</option>
									<option value="M">Masculino</option>
									<option value="F">Femenino</option>
								</select>
								{error.intSexo && <span className="error" >{error.intSexo}</span>}
							</div>
							<div>
								<label className="form-label" htmlFor="intAlias">alias</label>
								<input className="" type="text" name="intAlias" id="intAlias" onChange={handleChange} value={datosForm?.intAlias ?? ""}/>
								{error.intAlias && <span className="error" >{error.intAlias}</span>}
							</div>
						</div>
						<div className="input-container">
							<div>
								<label className="form-label" >Fecha nacimiento</label>
								<input type="date" name="intFechNac" id="intFechNac" onChange={handleChange} value={datosForm?.intFechNac ?? ""}/>
								{error.intFechNac && <span className="error" >{error.intFechNac}</span>}
							</div>
							<div>
								<label className="form-label" >Estado Civil</label>
								<input type="text" name="intEstadoCivil" id="intEstadoCivil" onChange={handleChange} value={datosForm?.intEstadoCivil ?? ""}/>
								{error.intEstadoCivil && <span className="error" >{error.intEstadoCivil}</span>}
							</div>
						</div>
						<div className="input-container">
							<div>
								<label className="form-label" >Departamento de Nacimiento</label>
								<input className="" type="text" name="intDptoNac" id="intDptoNac" onChange={handleChange} value={datosForm?.intDptoNac ?? ""}/>
								{error.intDptoNac && <span className="error" >{error.intDptoNac}</span>}
							</div>
							<div>
								<label className="form-label" htmlFor="intPciaNac">Provincia de Nacimiento</label>
								<input className="" type="text" name="intPciaNac" id="intPciaNac" onChange={handleChange} value={datosForm?.intPciaNac ?? ""}/>
								{error.intPciaNac && <span className="error" >{error.intPciaNac}</span>}
							</div>
						</div>
						<div className="input-container">
							<div>
								<label className="form-label" htmlFor="intNacionalidad">Nacionalidad</label>
								<input className="" type="text" name="intNacionalidad" id="intNacionalidad" onChange={handleChange} value={datosForm?.intNacionalidad ?? ""}/>
								{error.intNacionalidad && <span className="error" >{error.intNacionalidad}</span>}
							</div>
							<div>
								<label className="form-label" htmlFor="intProfesion" >Profesión</label>
								<input className="" type="text" name="intProfesion" id="intProfesion" onChange={handleChange} value={datosForm?.intProfesion ?? ""}/>
								{error.intProfesion && <span className="error" >{error.intProfesion}</span>}
							</div>
						</div>
						<div className="input-container">
							<div className="w-100">
								<label className="form-label" htmlFor="intDireccion">Dirección</label>
								<input className="w-100" type="text" name="intDireccion" id="intDireccion" onChange={handleChange} value={datosForm?.intDireccion ?? ""}/>
								{error.intDireccion && <span className="error" >{error.intDireccion}</span>}
							</div>
						</div>
						<div className="input-container gap-4">
							<div>
								<label className="form-label me-5" htmlFor="intTipo">Tipo de Documento</label>
								<select aria-label="intTipo" name="intTipo" id="intTipo" onChange={handleChange} value={datosForm?.intTipo ?? ""}>
									<option value="">Tipo</option>
									<option value="DNI">DNI</option>
									<option value="CUIL">CUIL</option>
								</select>
								{error.intTipo && <span className="error" >{error.intTipo}</span>}
							</div>
							<div>
								<label className="form-label" htmlFor="intDni" >Número de documento</label>
								<input className="" type="text" name="intDni" id="intDni" onChange={handleChange} value={datosForm?.intDni ?? ""}/>
								{error.intDni && <span className="error" >{error.intDni}</span>}
							</div>
						</div>
						<div className="input-container">
							<div>
								<label className="form-label" >Domicilio</label>
								<input className="" type="text" name="intDomicilio" id="intDomicilio" onChange={handleChange} value={datosForm?.intDomicilio ?? ""}/>
								{error.intDomicilio && <span className="error" >{error.intDomicilio}</span>}
							</div>
						</div>
						<br />
						<h2>Información de Delito</h2>
						<div className="input-container">
							<div>
								<label className="form-label" htmlFor="delito">Delito</label>
								{/*Uso de "encadenamiento opcional" ?. sirver para acceder a una propiedad solo si el objeto no es nulo ni undefined
								si dato es un objeto devuelve -> dato.delito ; si es null o undefined devuelve -> undefined (sin lanzar error)
								"Coalescencia" ?? sirve para obtener un valor por defecto si la expresión de la izq. es null o undefined
								*/}
								<input type="text" name="delito" id="delito" value={datosForm?.delito ?? ""} readOnly/>
								{error.delito && <span className="error" >Debe registrar un delito</span>}
							</div>
							<div>
								<label className="form-label" htmlFor="juez">Juez de la Causa</label>
								<input type="text" name="juez" id="juez" value={datosForm?.juez ?? ""} readOnly/>
								{error.juez && <span className="error" >Debe registrar un delito</span>}
							</div>
						</div>
						<br />
						<h2>Información de Ingreso</h2>
						<div className="input-container gap-4">
							<div>
								<label className="form-label" htmlFor="idPenitenciaria">Instalación de ingreso</label>
								<select aria-label="SeleccionPenitenciaria" name="idPenitenciaria" id="idPenitenciaria" value={datosForm?.idPenitenciaria  ?? ""} onChange={handleChange}>
									<option value="">Seleccione Penitenciaria</option>
									{datosPenitenciaria.map((e: InterfacePenitenciaria) => (
										<option key={e.idPenitenciaria} value={e.idPenitenciaria}>{e.penNom}</option>
									))}
								</select>
								{error.idPenitenciaria && <span className="error" >Debe seleccionar una penitenciaria</span>}
							</div>
							<div>
								<label className="form-label" htmlFor="fechaIngreso">Fecha de ingreso</label>
								<input type="date" name="fechaIngreso" id="fechaIngreso" onChange={handleChange} value={datosForm?.fechaIngreso ?? ""}/>
								{error.fechaIngreso && <span className="error" >{error.fechaIngreso}</span>}
							</div>
						</div>
						<div className="d-flex justify-content-end">
							<button className="btn btn-primary mx-2" type="submit">
								Guardar
							</button>
							<button className="btn btn-outline-secondary" type="button" onClick={()=>{setDatosForm({}); setObjetoInterno({}) }} >
								Cancelar
							</button>
						</div>
					</form>
				</div>
				<div className="input-container">
					<div className="w-100">
						<label className="form-label">Buscar Legajo</label>
						<input className="" type="text" style={{ width: "100%" }} />
					</div>
				</div>
				<h2>Internos Existentes</h2>
				<table className="table mb-2">
					<thead>
						<tr>
							<th scope="col">Legajo</th>
							<th scope="col">Nombre</th>
							<th scope="col">Apellido</th>
							<th scope="col">DNI/CUIL</th>
							<th scope="col">Fecha de Nacimiento</th>
							<th scope="col">Delito</th>
							<th scope="col">Penitenciaria</th>
							<th scope="col">Acciones</th>
						</tr>
					</thead>
					<tbody>
						{datosInterno.map((i: InterfaceInterno) => (
							i.intEstado === "activo" ?
							<tr key={i.legajo}>
								<th scope="row">{i.legajo}</th>
								<td>{i.intNombre}</td>
								<td>{i.intApellido}</td>
								<td>{i.intDni}</td>
								<td>{String(i.intFechNac)}</td>
								<td>{i.idDelito.delDelito}</td>
								<td>{i.idPenitenciaria.penNom}</td>
								<td>
									<button className="btn btn-primary btn-sm me-2" onClick={()=> valoresEditar(i)}>
                                        Editar
                                    </button>
                                    <button className="btn btn-danger btn-sm" onClick={()=> eliminarInterno(i.legajo)}>
                                        Eliminar
                                    </button>
								</td>
							</tr> : "" 
						))}
					</tbody>
				</table>
				<br />
			</article>
		</div>
	);
}

export default Internos;
