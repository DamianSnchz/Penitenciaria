//importar css
import { useMemo, useState } from "react";
import { useCartContext } from "../contextProvider/context";
import "../css/inicio.css"
import { InterfaceInterno } from "../interface/interfaceInternos";
import { InterfaceCondena } from "../interface/interfaceCondena";
import { InterfaceDelito } from "../interface/interfaceDelito";
import { InterfacePenitenciaria } from "../interface/interfacePenitenciaria";


function Inicio() {

	// Consume los contextos que necesita
	const { listaDelito, obtenerCondenaAsociada, datosDelito, datosInterno, datosPenitenciaria, datosCondena } = useCartContext();

	// Usamos 'useMemo' para que estos cálculos no se rehagan en cada render,
	// solo si los datos cambian.
	const totalInternos = useMemo(() => datosInterno.length, [datosInterno]);
	const totalPenitenciarias = useMemo(() => datosPenitenciaria.length, [datosPenitenciaria]);

	// cantidad de ingresos Este Mes y liberaciones
	const totalIngresosMes = useMemo(() => {
		return datosInterno.filter((element: InterfaceInterno) => {
			//obtengo la fecha la convierto en string y separo en partes '-' lugo convierto las partes en numeros
			const fecha = String(element.idDelito.delFechIniCondena).split('-').map(Number);
			const date = new Date();
			return fecha[1] === date.getMonth() && fecha[0] === date.getFullYear();
		}).length;
	}, [datosInterno]);

	const totalLiberaciones = useMemo(() => {
		return datosInterno.filter((element: InterfaceInterno) => {
			const condena: InterfaceCondena = obtenerCondenaAsociada(element.legajo);
			const fecha = String(condena.conFechFinCon).split('-').map(Number);
			const date = new Date();

			return fecha[1] === date.getMonth() && fecha[0] === date.getFullYear();

		}).length;
	}, [datosInterno]);


	//cantidad de delitos por su tipo
	const totalDelitosPorTipos = useMemo(() => {
		return listaDelito.map((element: string) => {
			//obtengo cantidad de distintos tipos de Delitos registrados 
			const totalTipo = datosDelito.filter((delito: InterfaceDelito) =>
				element == delito.delDelito
			).length;
			//cantidad total de delitos registrados 'activos'
			const total = datosDelito.length;
			const porcentaje = (totalTipo * 100) / total;

			return {
				totalTipo: totalTipo,
				porcentaje: porcentaje,
				tipo: element
			}
		})
	}, [datosDelito, datosCondena]);


	// ───────────────────────────────────────────────
	// CÁLCULO MEMOIZADO PARA EL GRÁFICO DE PENITENCIARÍAS
	// (Reemplaza tu 'internoPorPenitenciaria' y 'calcularCantidadP')
	// ───────────────────────────────────────────────
	const statsPenitenciarias = useMemo(() => {
		const totalInternosActivos = totalInternos; // Ya lo calculamos arriba
		if (totalInternosActivos === 0) return [];

		// 1. Itera sobre el CATÁLOGO de penitenciarías (datosPenitenciaria)
		return datosPenitenciaria.map((peni: InterfacePenitenciaria) => {

			// 2. Por cada penitenciaría, cuenta cuántos internos tiene
			const totalTipo = datosInterno.filter((interno: InterfaceInterno) =>
				interno.idPenitenciaria?.idPenitenciaria === peni.idPenitenciaria
			).length;

			// 3. Calcula el porcentaje
			const porcentaje = (totalTipo * 100) / totalInternosActivos;

			return {
				nombre: peni.penNom,
				total: totalTipo,
				porcentaje: porcentaje
			};
		})

	}, [datosInterno, datosPenitenciaria, totalInternos]);


	return (
		<div className="container-component" data-bs-theme="dark">
			<article className="flex-1">
				{/* Encabezado */}
				<div className="d-flex flex-wrap justify-content-between align-items-center gap-3 p-4 px-sm-5 py-4">
					<div className="d-flex flex-column gap-1">
						<h1 className="text-light display-5 fw-bolder">Dashboard</h1>
					</div>
				</div>

				<h2 className="text-light h4 fw-bold px-4 px-sm-5 pb-3 pt-4">Resumen General</h2>

				{/* Tarjetas de Resumen (Stats) */}
				<div className="row g-4 p-4 p-sm-5">
					{/* Tarjeta 1 */}
					<div className="col-sm-6 col-lg-3">
						<div className="card bg-body-tertiary rounded-4 border-secondary-subtle">
							<div className="card-body p-4">
								<p className="card-subtitle text-body-secondary mb-2">Total de Internos</p>
								<p className="card-text text-light display-5 fw-bold mb-1">{totalInternos}</p>
							</div>
						</div>
					</div>
					{/* Tarjeta 2 */}
					<div className="col-sm-6 col-lg-3">
						<div className="card bg-body-tertiary rounded-4 border-secondary-subtle">
							<div className="card-body p-4">
								<p className="card-subtitle text-body-secondary mb-2">Ingresos este Mes</p>
								<p className="card-text text-light display-5 fw-bold mb-1">{totalIngresosMes}</p>
							</div>
						</div>
					</div>
					{/* Tarjeta 3 */}
					<div className="col-sm-6 col-lg-3">
						<div className="card bg-body-tertiary rounded-4 border-secondary-subtle">
							<div className="card-body p-4">
								<p className="card-subtitle text-body-secondary mb-2">Liberaciones este Mes</p>
								<p className="card-text text-light display-5 fw-bold mb-1">{totalLiberaciones}</p>
							</div>
						</div>
					</div>
					{/* Tarjeta 4 */}
					<div className="col-sm-6 col-lg-3">
						<div className="card bg-body-tertiary rounded-4 border-secondary-subtle">
							<div className="card-body p-4">
								<p className="card-subtitle text-body-secondary mb-2">Total de Penitenciarías</p>
								<p className="card-text text-light display-5 fw-bold mb-1">{totalPenitenciarias}</p>
							</div>
						</div>
					</div>
				</div>
				<h2 className="text-light h4 fw-bold px-4 px-sm-5 pb-3 pt-5">Estadísticas de delitos y penitenciarías</h2>
				<div className="row g-4 p-4 p-sm-5">
					{/* GRÁFICO 1 - POR TIPO DE DELITO */}
					<div className="col-lg-6">
						<div className="card bg-body-tertiary rounded-4 border-secondary-subtle h-100">
							<div className="card-body p-4 p-lg-5">
								<h3 className="h5 fw-bold text-light mb-4">Internos por Tipo de Delito</h3>
								<div className="d-flex flex-column gap-3">
									{totalDelitosPorTipos.map((element: any, index: number) => {
										return (
											<div className="d-flex align-items-center gap-4" key={index}>
												<span className="text-body-secondary" style={{ minWidth: '90px' }}>{element.tipo}</span>
												<div className="progress w-100" style={{ height: '20px' }}>
													<div className="progress-bar" role="progressbar" style={{ width: `${element.porcentaje}%` }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
												</div>
												<span className="fw-bold text-light" style={{ minWidth: '40px' }}>{element.totalTipo}</span>
												<span className="fw-bold text-light" style={{ minWidth: '40px' }}>{`${(element.porcentaje).toFixed(0)}%`}</span>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
					{/* GRÁFICO 2 - POR PENITENCIARÍA */}
					<div className="col-lg-6">
						<div className="card bg-body-tertiary rounded-4 border-secondary-subtle h-100">
							<div className="card-body p-4 p-lg-5">
								<h3 className="h5 fw-bold text-light mb-4">Internos por Penitenciaría</h3>
								<div className="d-flex flex-column gap-3">
									{/* Mapeamos sobre el array 'statsPenitenciarias' pre-calculado */}
									{statsPenitenciarias.map((p: any) => (
										<div className="d-flex align-items-center gap-4" key={p.nombre}>
											<span className="text-body-secondary" style={{ minWidth: '24%', maxWidth: '25%' }}>
												{p.nombre}
											</span>
											<div className="progress w-100" style={{ height: '20px' }}>
												<div className="progress-bar" role="progressbar" style={{ width: `${p.porcentaje.toFixed(2)}%` }} aria-valuenow={p.porcentaje} aria-valuemin={0} aria-valuemax={100}></div>
											</div>
											<span className="fw-bold text-light" style={{ minWidth: '40px' }}>
												{p.total}
											</span>
											<span className="fw-bold text-light" style={{ minWidth: '40px' }}>
												{`${p.porcentaje.toFixed(0)}%` }
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
}

export default Inicio;
