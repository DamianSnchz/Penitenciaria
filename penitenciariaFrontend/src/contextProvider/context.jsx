import React, { useState, useContext, useEffect } from "react"





//creo el contexto
const Context = React.createContext();
// mediante "useCartContext" puedo hacer uso de mi contexto
export const useCartContext = () => useContext(Context);

//Proveedor de datos y funciones
function ContextProvider({ children }) {
    //estados para almacenar el objeto delitos
    const [datosDelito, setDatosDelito] = useState({});
    //variable para almacenar los datos de penitenciaria provenientes de la petición
    const [datosPenitenciaria, setDatosPenitenciaria] = useState([]);
    // almacena los datos buscados, es utilizado en buscarDatos()
    //luego su valor pasara a setDatos() para ser mostrados
    const [buscar, setBuscar] = useState([]);
    //estados para validar formularios
    const [datosForm, setDatosForm] = useState({});
    

    //estados para mostrar los errores en el formulario
    const [error, setError] = useState({});
    //estados para almacenal el nom de los campos de los inputs para poder pasarlos como parametros
    const [campos, setCampos] = useState([]);
    // ------------------------------------------------------------------------------------
    // funciones:
    useEffect(() => {
        // ejecutar funcion de obtencion de datos
        obtenerDatoPenitenciaria();
    }, [])

    // funcion de busqueda filtrado
    /*const buscarDatos = (ev) => {
        //filtro para obtener los datos buscados
        let result = buscar.filter((element) => {
            //primera condición: selecciono en "title" me aseguro que sea un string con "toString()" convierto el string en minuscula
            //toLowerCase() luego con includes() compruebo que el String ingresado existe en el array (esta primera condición es aplicada para la busqueda)
            //Segunda condición: cumple con la misma lógica pero con el type (esta condición se aplica al filtrado) 
            if (element.title.toString().toLowerCase().includes(ev.toLowerCase())) {
                return element;
            }
        });
        setDatos(result);
    }

    // funcion de busqueda recibe una cadena del input o un valor del selection
    const textInput = (ev) => {
        //realizo la busqueda
        buscarDatos(ev.target.value);
    }*/

    /*=================================================================================================================================================*/
    /*=====================================================Funciones Penitenciaria====================================================================*/
    /*=================================================================================================================================================*/

    //funcion para pedir los datos de penitenciaria a la API
    async function obtenerDatoPenitenciaria() {
        // buscar el JSON
        const response = await fetch('http://localhost:8080/api/penitenciaria');
        // convertir la peticion en objeto
        const objeto = await response.json();
        // guardar los datos obtenidos en mis variables de trabajo 
        //setDatos y setBuscar los utilizo para hacer las busquedas y filtrados
        setDatosPenitenciaria(objeto);
        //setBuscar(objeto);
    }

    //funcion para enviar datos de penitenciaria a la API
    async function enviarDatosPenitenciaria() {
        try {
            const respuesta = await fetch("http://localhost:8080/api/penitenciaria", {
                                                                                       method: "POST",
                                                                                       headers: {
                                                                                           "Content-type": "application/json"
                                                                                       },
                                                                                       body: JSON.stringify(datosForm)
                                                                                   });
            if(!respuesta.ok){
                throw new Error("Error al enviar los datos");
            }

           //actualizamos los valores
            await obtenerDatoPenitenciaria();
            //limpiamos los datos del formulario
            setDatosForm({});
            //limpiamos el objeto error
            setError({});
        } catch (error) {
            console.log("error al enviar datos", error);
        }
    }

    //Eliminar Penitenciaria
    async function eliminarPenitenciaria(id){
        try{
            const response = await fetch("http://localhost:8080/api/penitenciaria/" + id, {
                                                                                        method: "DELETE"
                                                                                    });
            if(!response.ok){
                throw new Error("Error al eliminar");
            }

            //refresco los valores de la tabla
            await obtenerDatoPenitenciaria();
        }catch(error){
            console.log("Error al eliminar un registro", error);
        }

    }

    //editar penitenciaria
    async function editarPenitenciaria(id){
        try{
            const response = await fetch("http://localhost:8080/api/penitenciaria/" + id,{
                method:"PUT",
                headers:{
                    "content-type":"application/json",
                    "Access-Control-Allow-Origin": "http://localhost:8080/api/penitenciaria"
                },
                body: JSON.stringify(datosForm)
            })

            if(!response.ok){
                throw new Error("Error al editar penitenciaria");
            }

            //actualizamos la tabla penitenciaria
            await obtenerDatoPenitenciaria();
            //limpiamos la variable datosForm
            setDatosForm({});

        }catch(error){
            console.log("Error al editar una penitenciaria: ", error);
        }
    }

    /*=================================================================================================================================================*/
    /*=====================================================Validacion de formularios====================================================================*/
    /*=================================================================================================================================================*/
    function validarForm(fecha = null) {
        //Objeto temporal que se va a ir generando a medida de que ocurren errores
        let objeto = {};

        objeto = inputVacios({});

        //si existen errores se cargar los msj en el objeto
        if (!Object.keys(objeto).length === 0) {
            setError(objeto);
        }

        //si existe la clave "DNI" ingresara al if para realizar la validaciòn
        if (datosForm.DNI?.trim()) {
            //variable para verificar si existe un campo "tipo" en el objeto 
            //si la clave "tipo" no existe solo se asigna una cadena vacia (con el fin de que el programa no se rompa)
            const tipo = datosForm.tipo?.trim() || "";
            if (tipo === "CUIT") {
                objeto = validarCuil(objeto);
            } else {
                objeto = validarDNI(objeto);
            }
        }


        //verificamos si fecha es distinto de null
        if (fecha) {
            fecha.forEach((e) => {
                if (datosForm[e]?.trim()) {
                    if (e === "intFechaNac") {
                        objeto = validarFechaNac(objeto);
                    } else {
                        objeto = validarFecha(e, objeto);
                    }
                }
            });
        }


        setError(objeto);

        return Object.keys(objeto).length === 0;
    }

    function inputVacios(tmp) {
        campos.forEach(clave => {
            if (!String(datosForm[clave] ?? "").trim()) tmp[clave] = "Debe ingresar un valor";
        });

        return tmp;
    }

    //funcion para validar DNI
    function validarDNI(tmp) {
        const dni = datosForm.DNI?.trim();
        const exp = /^[0-9]{8}$/;

        if (!exp.test(dni)) {
            tmp.DNI = "El DNI debe contener 8 digitos númericos";
        }

        return tmp;
    }

    //funcion para validar cuil
    function validarCuil(tmp) {
        const cuil = datosForm.DNI?.trim();
        const exp = /^[0-9-]{2}-[0-9]{8}-[0-9]{1}$/;
        if (!exp.test(cuil)) {
            tmp.DNI = "CUIL incorrecto";
        } else {
            const [prefix, number, suffix] = cuil.split("-").map(Number);
            if ([prefix, number, suffix].some(isNaN) || prefix < 10 || prefix > 99 || suffix < 1) {
                tmp.DNI = "CUIL incorrecto";
            }
        }

        return tmp;
    }


    //funcion para validar fecha de nacimiento
    function validarFechaNac(tmp) {
        const fecha = datosForm.intFechaNac.trim().split("-");
        const [anio, mes, dia] = fecha.map(Number);

        if (isNaN(anio) || anio > 2007 || anio < 1950) {
            tmp.intFechaNac = "El año debe estar entre 1950 y 2007";
        } else if (isNaN(mes) || mes > 12 || mes < 1) {
            tmp.intFechaNac = "Mes incorrecto"
        } else if (isNaN(dia) || dia > 31 || dia < 1) {
            tmp.intFechaNac = "Día incorrecto"
        } else {
            // Validar días correctos según el mes
            const fechaValida = new Date(anio, mes - 1, dia);
            if (
                fechaValida.getFullYear() !== anio ||
                fechaValida.getMonth() + 1 !== mes ||
                fechaValida.getDate() !== dia
            ) {
                tmp.intFechaNac = "La fecha no es válida";
            }
        }

        return tmp;
    }

    //funcion para validar fechas ingreso, detenciòn, etc...
    function validarFecha(clave, tmp) {
        const fecha = datosForm[clave]?.trim().split("-");
        const [anio, mes, dia] = fecha.map(Number);
        const anioActual = new Date().getFullYear();
        const diaActual = new Date().getDate();
        const mesActual = new Date().getMonth() + 1;
        if (isNaN(anio) || anio > anioActual || anio < 1950) {
            tmp[clave] = `El año no debe ser mayor a ${anioActual}`;
        } else if (isNaN(mes) || mes > 12 || mes < 1) {
            tmp[clave] = "Mes incorrecto"
        } else if (isNaN(dia) || dia > 31 || dia < 1) {
            tmp[clave] = "Día incorrecto"
            //verificar si la fecha ingresada es mayor a la actual
        } else if (fechaActual(anio, anioActual, mes, mesActual, dia, diaActual)) {
            tmp[clave] = `La fecha no debe ser mayor a ${diaActual}-${mesActual}-${anioActual}`;
        }

        return tmp;
    }

    //retorna "true si la fecha ingresada es mayor a la actual"
    function fechaActual(anio, anioActual, mes, mesActual, dia, diaActual) {
        if (anio === anioActual) {
            if (mes >= mesActual) {
                if (dia > diaActual) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }


    //paso los datos y funciones a mi Context antes definido en la linea: 4
    return (
        <Context.Provider value={{ validarForm, setDatosForm, datosForm, error, setCampos, campos, 
        datosPenitenciaria,
        enviarDatosPenitenciaria, 
        eliminarPenitenciaria,
        editarPenitenciaria,
        datosDelito,setDatosDelito}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;