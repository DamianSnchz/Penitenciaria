//importar css
import { Link } from "react-router-dom";
import "../css/internos.css"
//importar uselocation para poder recibir datos por parametros
import { useLocation } from "react-router-dom";
//importar mi proveedor ContextProvider
import { useCartContext } from "../contextProvider/context.jsx";
import { useEffect } from "react";


function Internos() {
	//variable para el recibimiento de parametros
	const location = useLocation();
	//función compartida del proveedor de datos
	const { validarForm, datosForm, setDatosForm, error, setCampos, datosDelito, setDatosDelito} = useCartContext();


	

	useEffect(() => {
		//paso los campos de cada inputs para poder hacer las validaciones
		setCampos(["intApellido", "intNombre", "intSexo", "intAlias", "intFechaNac", "intEstadoCivil", "intDptoNac",
			"intProvinciaNac", "intNacionalidad", "intProfesion", "intDireccion", "intDni", "intTipo","delito","juez", 
			"idPenitenciaria","fechaIngreso"]);

		return() => {
			//limpio "campos" para que al ingresar al componente "delitos" pueda cargar los ID de sus nuevos inputs
			//para hacer las validaciones
			setCampos([]);
		}
	}, [])//se ejecuta solo una vez cuando se realiza el montaje y desmontaje

	
	//función para asignar valor a mi "datosForm" proveniente de mi proveedor de datos
	function handleChange(e: any) {
		//El operador spread "dispersar" (...) copia todas las propiedades del objeto datosForm en un nuevo objeto
		//Por medio de los corchetes indico que a e.target.name lo utilice como clave de objeto 
		setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
	}

	//función que se ejecuta cuando se envía el formulario
	function handledSubmit(e: React.FormEvent) {
		e.preventDefault();
		//pasamos las fechas a validar
		const valor = validarForm(["intFechaNac","fechaIngreso"]);
		if(valor){
			//si es true agrego un SubObjeto a los datos
			setDatosForm({...datosForm, idDelito:{...datosDelito}});
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
					<Link to={"/registrarDelito"} className="btn btn-outline-secondary btn-sm ">Registrar Delito</Link>
				</div>
				<div className="form-container ">
					<h2> Información del Inteno</h2>
					<form className="w-100" id="form-internos" onSubmit={(e) => { handledSubmit(e) }}>
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
								<select aria-label="x" name="intSexo" id="intSexo" onChange={handleChange} value={datosForm?.intgenero ?? ""}>
									<option value="" >Seleccione género</option>
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
								<input type="date" name="intFechaNac" id="intFechaNac" onChange={handleChange} value={datosForm?.intFechaNac ?? ""}/>
								{error.intFechaNac && <span className="error" >{error.intFechaNac}</span>}
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
								<label className="form-label" htmlFor="intProvinciaNac">Provincia de Nacimiento</label>
								<input className="" type="text" name="intProvinciaNac" id="intProvinciaNac" onChange={handleChange} value={datosForm?.intProvinciaNac ?? ""}/>
								{error.intProvinciaNac && <span className="error" >{error.intProvinciaNac}</span>}
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
								<select aria-label="intTipo" name="intTipo" id="intTipo" onChange={handleChange}>
									<option value={datosForm?.inttipo ?? ""}>Tipo</option>
									<option value="DNI">DNI</option>
									<option value="CUIT">CUIT</option>
								</select>
								{error.intTipo && <span className="error" >{error.intTipo}</span>}
							</div>
							<div>
								<label className="form-label" htmlFor="intDni" >Número de documento</label>
								<input className="" type="text" name="intDni" id="intDni" onChange={handleChange} value={datosForm?.intDni ?? ""}/>
								{error.intDni && <span className="error" >{error.intDni}</span>}
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
								<select aria-label="SeleccionPenitenciaria" name="idPenitenciaria" id="idPenitenciaria" value={datosForm?.idPenitenciaria ?? ""} onChange={handleChange}>
									<option value="">Seleccione Penitenciaria</option>
									<option value="1">prueba1</option>
									<option value="2">prueba2</option>
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
							<button className="btn btn-outline-secondary" type="button" onClick={()=>{setDatosForm({})}} >
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
							<th scope="col">DNI</th>
							<th scope="col">Fecha de Ingreso</th>
							<th scope="col">Delito</th>
							<th scope="col">Penitenciaria</th>
							<th scope="col">Accionees</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">23223</th>
							<td>Tiburcio</td>
							<td>Olivera</td>
							<td>42898788</td>
							<td>28/10/2000</td>
							<td>Asesinato</td>
							<td>Penitenciaria</td>
							<td><button className="btn btn-outline-secondary btn-sm">
								Editar
							</button>
							</td>
						</tr>
						<tr>
							<th scope="row">23223</th>
							<td>Tiburcio</td>
							<td>Olivera</td>
							<td>42898788</td>
							<td>28/10/2000</td>
							<td>Asesinato</td>
							<td>Penitenciaria</td>
							<td><button className="btn btn-outline-secondary btn-sm">
								Editar
							</button>
							</td>
						</tr>
						<tr>
							<th scope="row">23223</th>
							<td>Tiburcio</td>
							<td>Olivera</td>
							<td>42898788</td>
							<td>28/10/2000</td>
							<td>Asesinato</td>
							<td>Penitenciaria</td>
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

export default Internos;
