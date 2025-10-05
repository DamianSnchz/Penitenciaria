//importar css
import "../css/internos.css"

function Internos() {
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
					<button className="btn btn-outline-secondary" type="button">Registrar Delito</button>
				</div>
				<div className="form-container ">
					<h2> Información del Inteno</h2>
					<form className="w-100">
						<div className="input-container">
							<div>
								<label className="form-label" >Apellido</label>
								<input type="text" />
							</div>
							<div>
								<label className="form-label" >Nombre</label>
								<input className="" type="text" />
							</div>
						</div>
						<div className="input-container">
							<div>
								<label className="form-label" >Genero</label>
								<select aria-label="x">
									<option selected >Seleccione género</option>
									<option value="M">Masculino</option>
									<option value="F">Femenino</option>
								</select>
							</div>
							<div>
								<label className="form-label" >alias</label>
								<input className="" type="text" />
							</div>
						</div>
						<div className="input-container">
							<div>
								<label className="form-label" >Fecha nacimiento</label>
								<input className="" type="date" />
							</div>
							<div>
								<label className="form-label" >Estado Civil</label>
								<input className="" type="text" />
							</div>
						</div>
						<div className="input-container">
							<div>
								<label className="form-label" >Departamento de Nacimiento</label>
								<input className="" type="text" />
							</div>
							<div>
								<label className="form-label" >Provincia de Nacimiento</label>
								<input className="" type="text" />
							</div>
						</div>
						<div className="input-container">
							<div>
								<label className="form-label" >Nacionalidad</label>
								<input className="" type="text" />
							</div>
							<div><label className="form-label" >Profesión</label>
								<input className="" type="text" />
							</div>
						</div>
						<div className="input-container">
							<div style={{ width: "100%" }}>
								<label className="form-label">Dirección</label>
								<input className="" type="text" style={{ width: "100%" }} />
							</div>
						</div>
						<div className="input-container">
							<div>
								<label className="form-label" >Tipo de Documento</label>
								<select aria-label="DNI">
									<option selected>Tipo</option>
									<option value="DNI">DNI</option>
									<option value="CUIT">CUIT</option>
								</select>
							</div>
							<div>
								<label className="form-label" >Número de documento</label>
								<input type="number" />
							</div>
						</div>
						<br />
						<h2>Información de Ingreso</h2>
						<div className="input-container">
							<div>
								<label className="form-label" >Instalación de ingreso</label>
								<select aria-label="SeleccionPenitenciaria">
									<option selected>Seleccione Penitenciaria</option>
									<option value="#">prueba1</option>
									<option value="#">prueba2</option>
								</select>
							</div>
							<div>
								<label className="form-label" >Fecha de ingreso</label>
								<input type="date" />
							</div>
						</div>
						<div className="d-flex justify-content-end">
							<button className="btn btn-primary mx-2" type="submit">
								Guardar
							</button>
							<button className="btn btn-outline-secondary" type="submit">
								Cancear
							</button>
						</div>
					</form>
				</div>
				<div className="input-container">
					<div style={{ width: "100%" }}>
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
				<br/>
			</article>
		</div>
	);
}

export default Internos;
