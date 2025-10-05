//importar css
import "../css/inicio.css"
import 'bootstrap/dist/css/bootstrap.min.css';
function Inicio(){
	return(
	<div className="container-component">
	   <article>
		<h1>Inicio del Sistema Penitenciario</h1>
		<p className="text-wrap">
			Bienvenido al sistema de gestión penitenciaria. Utilice el menú de la izquierda para navegar por las diferentes secciones y gestionar la información de los internos, delitos y penitenciarías.
		</p>	
	   </article>
	</div>
	);
}

export default Inicio;
