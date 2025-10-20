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
	const { validarForm, datosForm, setDatosForm, error, setCampos, campos} = useCartContext();


	

	useEffect(() => {
		//paso los campos de cada inputs para poder hacer las validaciones
		setCampos(["apellido", "nombre", "genero", "alias", "fechaNac", "estadoCivil", "dptoNac",
			"provinciaNac", "nacionalidad", "profesion", "direccion", "DNI", "tipo","delito","juez", 
			"penitenciaria","fechaIngreso"]);

		console.log("*****************Valor del objeto datosForm en interns")
		console.log(datosForm);
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
		return validarForm(["fechaNac","fechaIngreso"]);
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
								<label className="form-label" htmlFor="apellido">Apellido</label>
								<input type="text" name="apellido" id="apellido" onChange={handleChange} value={datosForm?.apellido ?? ""}/>
								{error.apellido && <span className="error" >{error.apellido}</span>}
							</div>
							<div>
								<label className="form-label" htmlFor="nombre">Nombre</label>
								<input type="text" name="nombre" id="nombre" onChange={handleChange} value={datosForm?.nombre ?? ""}/>
								{error.nombre && <span className="error" >{error.nombre}</span>}
							</div>
						</div>
						<div className="input-container">
							<div>
								<label className="form-label" htmlFor="genero">Genero</label>
								<select aria-label="x" name="genero" id="genero" onChange={handleChange}>
									<option value={datosForm?.genero ?? ""} >Seleccione género</option>
									<option value="M">Masculino</option>
									<option value="F">Femenino</option>
								</select>
								{error.genero && <span className="error" >{error.genero}</span>}
							</div>
							<div>
								<label className="form-label" htmlFor="alias">alias</label>
								<input className="" type="text" name="alias" id="alias" onChange={handleChange} value={datosForm?.alias ?? ""}/>
								{error.alias && <span className="error" >{error.alias}</span>}
							</div>
						</div>
						<div className="input-container">
							<div>
								<label className="form-label" >Fecha nacimiento</label>
								<input type="date" name="fechaNac" id="fechaNac" onChange={handleChange} value={datosForm?.fechaNac ?? ""}/>
								{error.fechaNac && <span className="error" >{error.fechaNac}</span>}
							</div>
							<div>
								<label className="form-label" >Estado Civil</label>
								<input type="text" name="estadoCivil" id="estadoCivil" onChange={handleChange} value={datosForm?.estadoCivil ?? ""}/>
								{error.estadoCivil && <span className="error" >{error.estadoCivil}</span>}
							</div>
						</div>
						<div className="input-container">
							<div>
								<label className="form-label" >Departamento de Nacimiento</label>
								<input className="" type="text" name="dptoNac" id="dptoNac" onChange={handleChange} value={datosForm?.dptoNac ?? ""}/>
								{error.dptoNac && <span className="error" >{error.dptoNac}</span>}
							</div>
							<div>
								<label className="form-label" htmlFor="provinciaNac">Provincia de Nacimiento</label>
								<input className="" type="text" name="provinciaNac" id="provinciaNac" onChange={handleChange} value={datosForm?.provinciaNac ?? ""}/>
								{error.provinciaNac && <span className="error" >{error.provinciaNac}</span>}
							</div>
						</div>
						<div className="input-container">
							<div>
								<label className="form-label" htmlFor="nacionalidad">Nacionalidad</label>
								<input className="" type="text" name="nacionalidad" id="nacionalidad" onChange={handleChange} value={datosForm?.nacionalidad ?? ""}/>
								{error.nacionalidad && <span className="error" >{error.nacionalidad}</span>}
							</div>
							<div>
								<label className="form-label" htmlFor="profesion" >Profesión</label>
								<input className="" type="text" name="profesion" id="profesion" onChange={handleChange} value={datosForm?.profesion ?? ""}/>
								{error.profesion && <span className="error" >{error.profesion}</span>}
							</div>
						</div>
						<div className="input-container">
							<div className="w-100">
								<label className="form-label" htmlFor="direccion">Dirección</label>
								<input className="w-100" type="text" name="direccion" id="direccion" onChange={handleChange} value={datosForm?.direccion ?? ""}/>
								{error.direccion && <span className="error" >{error.direccion}</span>}
							</div>
						</div>
						<div className="input-container gap-4">
							<div>
								<label className="form-label me-5" htmlFor="tipo">Tipo de Documento</label>
								<select aria-label="tipo" name="tipo" id="tipo" onChange={handleChange}>
									<option value={datosForm?.tipo ?? ""}>Tipo</option>
									<option value="DNI">DNI</option>
									<option value="CUIT">CUIT</option>
								</select>
								{error.tipo && <span className="error" >{error.tipo}</span>}
							</div>
							<div>
								<label className="form-label" htmlFor="DNI" >Número de documento</label>
								<input className="" type="text" name="DNI" id="DNI" onChange={handleChange} value={datosForm?.DNI ?? ""}/>
								{error.DNI && <span className="error" >{error.DNI}</span>}
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
								<input type="text" name="delito" id="delito" value={datosForm?.Rdelito ?? ""} readOnly/>
								{error.delito && <span className="error" >Debe registrar un delito</span>}
							</div>
							<div>
								<label className="form-label" htmlFor="juez">Juez de la Causa</label>
								<input type="text" name="juez" id="juez" value={datosForm?.Rjuez ?? ""} readOnly/>
								{error.juez && <span className="error" >Debe registrar un delito</span>}
							</div>
						</div>
						<br />
						<h2>Información de Ingreso</h2>
						<div className="input-container gap-4">
							<div>
								<label className="form-label" htmlFor="penitenciaria">Instalación de ingreso</label>
								<select aria-label="SeleccionPenitenciaria" name="penitenciaria" id="penitenciaria" onChange={handleChange}>
									<option value={datosForm?.penitenciaria ?? ""}>Seleccione Penitenciaria</option>
									<option value="prueba1">prueba1</option>
									<option value="prueba2">prueba2</option>
								</select>
								{error.penitenciaria && <span className="error" >Debe seleccionar una penitenciaria</span>}
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
