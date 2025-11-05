import React, { useState, useContext, useEffect } from "react"





//creo el contexto
const Context = React.createContext();
// mediante "useCartContext" puedo hacer uso de mi contexto
export const useCartContext = () => useContext(Context);

//Proveedor de datos y funciones
function ContextProvider({ children }) {
    //estados para almacenar el objeto delitos
    const [objetoDelito, setObjetoDelito] = useState({});
    //estado para almacenar el objeto interno
    const [objetoInterno, setObjetoInterno] = useState({});
    //estado para almacenar el objeto condena
    const [objetoCondena, setObjetoCondena] = useState({});
    //variable para almacenar los datos de penitenciaria provenientes de la petición GET
    const [datosPenitenciaria, setDatosPenitenciaria] = useState([]);
    //variable para almacenar los datos de internos provenientes de la petición GET
    const [datosInterno, setDatosInterno] = useState([]);
    //variable para almacenar los datos de delitos provenientes de la petición GET
    const [datosDelito, setDatosDelito] = useState([]);
    //estado para almacenar informe de internos por penitenciaria y por delito
    const [datosInformeIntPenDel,setDatosInformeIntPenDel] = useState([]);
    //estado para almacenar informe de internos por profesion
    const [datosInformeIntProfesion,setDatosInformeIntProfesion] = useState([]);
    //variable para almacenar los datos de condenas provenientes de la petición GET
    const [datosCondena, setDatosCondena] = useState([]);
    // almacena los datos buscados, es utilizado en buscarDatos()
    //luego su valor pasara a setDatos() para ser mostrados
    const [buscar, setBuscar] = useState([]);
    //estados para validar formularios
    const [datosForm, setDatosForm] = useState({});
    //estado para guardar los datos que se buscan
    const [datosBuscados, setDatosBuscados] = useState([]);
    

    //estados para mostrar los errores en el formulario
    const [error, setError] = useState({});
    //estados para almacenal el nom de los campos de los inputs para poder pasarlos como parametros
    const [campos, setCampos] = useState([]);
    
    /*=================================================================================================================================================*/
    /*=====================================================Funciones =================================================================================*/
    /*=================================================================================================================================================*/

    useEffect(() => {
        // ejecutar funcion de obtencion de datos al inicio del programa
        obtenerDatosPenitenciaria();
        obtenerDatosInterno();
        obtenerDatosDelito();
    }, [])

    useEffect(() => {
        obtenerDatosDelito();
    }, [datosInterno])

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

    const buscarLegajo = (evento) => {
        //realizo una busqueda de legajo con los datos obtenidos de internos
        try{
            const response = datosCondena.filter((element) => {
            console.log(evento)
            if(element.legajo.number.includes(evento)){
                return element;
            }
        })

        setDatosBuscados(response);
        }catch(error){
            console.log("Error al filtrar datos: ", error);
        }
    }

    const legajoInput = (evento)=>{
        //realizo la busqueda
        buscarLegajo(evento.target.value);
    }
    

    /*=================================================================================================================================================*/
    /*=====================================================Funciones Penitenciaria====================================================================*/
    /*=================================================================================================================================================*/

    //funcion para pedir los datos de penitenciaria a la API
    async function obtenerDatosPenitenciaria() {
        try{
            // buscar el JSON
            const response = await fetch('http://localhost:8080/api/penitenciaria');
            if(!response.ok){
                throw new Error("Error al obtener datos de penitenciaria");
            }
            // convertir la peticion en objeto
            const objeto = await response.json();
            // guardar los datos obtenidos 
            setDatosPenitenciaria(objeto);
        }catch(error){
            console.log("Error: " + error);
        }
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
            await obtenerDatosPenitenciaria();
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
            await obtenerDatosPenitenciaria();
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
            await obtenerDatosPenitenciaria();
            //limpiamos la variable datosForm
            setDatosForm({});

        }catch(error){
            console.log("Error al editar una penitenciaria: ", error);
        }
    }

    /*=================================================================================================================================================*/
    /*=====================================================Funciones Internos====================================================================*/
    /*=================================================================================================================================================*/
    async function enviarDatosInternos() {
        try{
            const response = await fetch("http://localhost:8080/api/interno",{
                                                                                method:"POST",
                                                                                headers:{
                                                                                    "content-type": "application/json"
                                                                                },
                                                                                body: JSON.stringify(objetoInterno)
                                                                            })
            if(!response.ok){
                throw new Error("Error al enviar datos a internos");
            }

            //actualizo los valores de los internos
            obtenerDatosInterno();
            //limpiamos los datos del formulario
            setDatosForm({});
            //limpiamos el objeto de errores
            setError({});
        }catch(error){
            console.log("Error de envio: ", error);
        }
    }

    async function obtenerDatosInterno(){
        try{
            const response = await fetch('http://localhost:8080/api/interno');
            if(!response.ok){
                throw new Error("Error al recibir datos de internos");
            }

            //convierno la respuesta en objeto json
            const objeto = await response.json();
            //almaceno los datos
            setDatosInterno(objeto);

        }catch(error){
            console.log("Error: ", error);
        }
    }

    async function editarDatoInterno(id) {
        try{
            const response = await fetch("http://localhost:8080/api/interno/"+id, {
                                                                                method:"PUT",
                                                                                headers:{
                                                                                    "content-type":"application/json"
                                                                                },
                                                                                body: JSON.stringify(objetoInterno)
                                                                            })
            if(!response.ok){
                throw new Error("Error al editar un interno");
            }
            //actualizamos los datos
            await obtenerDatosInterno();
            //limpiamos los datos
            setDatosForm({});
            //limpiamos los errores
            setError({});
        }catch(error){
            console.log("Error: ", error);
        }

    }

    async function eliminarInterno(id){
        try{
            const response = await fetch("http://localhost:8080/api/interno/" + id, {
                                                                            method:"DELETE",
                                                                            headers:{
                                                                                "content-type":"application/json"
                                                                            }
                                                                        })
            if(!response.ok){
                throw new Error("Error al eliminar interno");
            }
            //actualizamos los datos
            await obtenerDatosInterno();  
        }catch(error){
            console.log("Error: ", error);
        }
    }

    //funcion para separar los datos antes de editar.
    function valoresEditar(obj){
        setObjetoInterno(obj);

        // creamos un objeto temporal
        const nuevoForm = {};

        Object.entries(obj).forEach(([key, value]) => {
            if (key === "idDelito") {
                nuevoForm.delito = value.delDelito;
                nuevoForm.juez = value.delJuez;
            } else if (key === "idPenitenciaria") {
                nuevoForm.idPenitenciaria = value.idPenitenciaria;
            } else {
                nuevoForm[key] = value;
            }
        });

        // actualizamos el form una sola vez al final
        setDatosForm(nuevoForm);
    }

    /*=================================================================================================================================================*/
    /*=====================================================Funciones Delitos====================================================================*/
    /*=================================================================================================================================================*/
    async function obtenerDatosDelito() {
        try{
            const response = await fetch("http://localhost:8080/api/delito");
            if(!response.ok){
                throw new Error("Error al obtener datos de delitos");
            }
            //convertimos la respuesta en objeto
            const obj = await response.json();
            setDatosDelito(obj);
        }catch(error){
            console.log("Error:" , error);
        }
    }

    async function editarDatosDelito(id) {
        try{
            const response = await fetch("http://localhost:8080/api/delito/" + id, {
                                                                                    method: "PUT",
                                                                                    headers:{
                                                                                        "content-type":"application/json"
                                                                                    },
                                                                                    body: JSON.stringify(objetoDelito)
                                                                                })
            if(!response.ok){
                throw new Error("Error al editar delito");
            }
            //limpiamos el estado de datosForm
            setDatosForm({});
            //limpiamos el estado de errores
            setError({});
            //actualizamos los datos
            await obtenerDatosDelito();

        }catch(error){
            console.log("Error: ", error);
        }
    }

    async function eliminarDelito(id){
        try{
            const response = await fetch("http://localhost:8080/api/delito/" + id,{
                                                                                    method:"DELETE",
                                                                                    headers:{
                                                                                        "content-type":"application/json"
                                                                                    }
                                                                                })
            if(!response.ok){
                throw new Error("Error al eliminar un delito");
            }
            //actualizamos los datos de delitos
            await obtenerDatosDelito();
        }catch(error){
            console.log("Error: ", error)
        }
    }

    /*=================================================================================================================================================*/
    /*===================================================== Informes ====================================================================*/
    /*=================================================================================================================================================*/
    async function informeIntPenDel(){
        try{
            const response = await fetch("http://localhost:8080/api/interno/informeIntPenDel");
            if(!response.ok){
                throw new Error("Error al solicitar informe");
            }
            const obj = await response.json();
            setDatosInformeIntPenDel(obj);

        }catch(error){

        }
    }

    async function informeIntProfesion(){
        try{
            const response = await fetch("http://localhost:8080/api/interno/informeIntProfesion");
            if(!response.ok){
                throw new Error("Error al solicitar informe");
            }
            const obj = await response.json();
            setDatosInformeIntProfesion(obj);

        }catch(error){

        }
    }

    /*=================================================================================================================================================*/
    /*=====================================================Modificacion de condenas====================================================================*/
    /*=================================================================================================================================================*/
    async function obtenerDatosCondena() {
        try{
            const response = await fetch("http://localhost:8080/api/condena");
            if(!response.ok){
                throw new Error("Error al obtener datos de condena");
            }
            //convertimos la respuesta en objeto
            const obj = await response.json();
            setDatosCondena(obj);
        }catch(error){
            console.log("Error:" , error);
        }
    }

    async function obtenerCondena(id) {
        try{
            const response = datosCondena.find(element => element.legajo?.legajo === id);
            if(response){
                setObjetoCondena(response);
            }else{
                throw new Error("Condena inexistente");
                setObjetoCondena({});
            }
            
            
        }catch(error){
            console.log("Error:" , error);
        }
    }

    async function editarDatosCondena(id) {
        try{
            const response = await fetch("http://localhost:8080/api/condena/" + id, {
                                                                                    method: "PUT",
                                                                                    headers:{
                                                                                        "content-type":"application/json"
                                                                                    },
                                                                                    body: JSON.stringify(datosCondena)
                                                                                })
            if(!response.ok){
                throw new Error("Error al editar condena");
            }
            //limpiamos el estado de datosForm
            setDatosForm({});
            //limpiamos el estado de errores
            setError({});

        }catch(error){
            console.log("Error: ", error);
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

        //si existe "intDni" en campos proceso a hacer la validacion
        if(campos.includes("intDni")){
            //si existe la clave "DNI" ingresara al if para realizar la validaciòn
            if (datosForm.intDni?.trim()) {
                //variable para verificar si existe un campo "tipo" en el objeto 
                //si la clave "tipo" no existe solo se asigna una cadena vacia (con el fin de que el programa no se rompa)
                const tipo = datosForm.intTipo?.trim() || "";
                if (tipo === "CUIL") {
                    objeto = validarCuil(objeto);
                } else {
                    objeto = validarDNI(objeto);
                }
            }
        }


        //verificamos si fecha es distinto de null
        if (fecha) {
            fecha.forEach((e) => {
                // Solo valida la fecha si está en 'campos' Y tiene un valor
                if (campos.includes(e) && datosForm[e]?.trim()) {
                    if (e === "intFechNac") {
                        objeto = validarFechaNac(objeto);
                    } else {
                        objeto = validarFecha(e, objeto);
                    }
                }
            });
        }

        //si existe delDuracion hacemos la validacion
        if(datosForm.delDuracion?.trim()){
            objeto = validarDuracion(objeto);
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

    function validarDuracion(tmp){
        try{
            const duracion = datosForm.delDuracion?.trim();

            if(Number(duracion) <= 0){
                console.log("entro al error")
                tmp.delDuracion = "Duracion incorrecta"
            }
            return tmp;
        }catch(error){
            console.log("Error: ", error);
        }
    }

    //funcion para validar DNI
    function validarDNI(tmp) {
        const dni = datosForm.intDni?.trim();
        const legajo = datosForm.legajo;
        const exp = /^[0-9]{8}$/;

        if (!exp.test(dni)) {
            tmp.intDni = "El DNI debe contener 8 digitos númericos";
        }else if (!legajo){
            datosInterno.map((element) => {
                if(element.intDni === dni){
                    tmp.intDni = "El DNI ya existe en la BD"
                }
            });
        }

        
        

        return tmp;
    }

    //funcion para validar cuil
    function validarCuil(tmp) {
        const cuil = datosForm.intDni?.trim();
        const legajo = datosForm.legajo;
        const exp = /^[0-9-]{2}-[0-9]{8}-[0-9]{1}$/;
        if (!exp.test(cuil)) {
            tmp.intDni = "CUIL incorrecto";
        } else {
            const [prefix, number, suffix] = cuil.split("-").map(Number);
            if ([prefix, number, suffix].some(isNaN) || prefix < 10 || prefix > 99 || suffix < 1) {
                tmp.intDni = "CUIL incorrecto";
            }
        }
        //si el legajo ya existe no debe realizar la validacion (si el legajo no contiene un valor numerico dará undefined "false")
        if(!legajo){
            datosInterno.map((element) => {
            if(element.intDni === cuil){
                tmp.intDni = "El CUIL ya existe en la BD"
            }
         })
        }
            

        return tmp;
    }


    //funcion para validar fecha de nacimiento
    function validarFechaNac(tmp) {
        const fecha = datosForm.intFechNac.trim().split("-");
        const [anio, mes, dia] = fecha.map(Number);

        if (isNaN(anio) || anio > 2007 || anio < 1950) {
            tmp.intFechNac = "El año debe estar entre 1950 y 2007";
        } else if (isNaN(mes) || mes > 12 || mes < 1) {
            tmp.intFechNac = "Mes incorrecto"
        } else if (isNaN(dia) || dia > 31 || dia < 1) {
            tmp.intFechNac = "Día incorrecto"
        } else {
            // Validar días correctos según el mes
            const fechaValida = new Date(anio, mes - 1, dia);
            if (
                fechaValida.getFullYear() !== anio ||
                fechaValida.getMonth() + 1 !== mes ||
                fechaValida.getDate() !== dia
            ) {
                tmp.intFechNac = "La fecha no es válida";
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
        <Context.Provider value={{ validarForm, setDatosForm, datosForm, error, setError, setCampos, campos, 
        datosPenitenciaria,
        enviarDatosPenitenciaria, 
        eliminarPenitenciaria,
        editarPenitenciaria,
        objetoDelito,setObjetoDelito,
        enviarDatosInternos,
        objetoInterno, setObjetoInterno,
        datosInterno,obtenerDatosInterno,
        eliminarInterno,editarDatoInterno,
        valoresEditar,
        datosDelito,editarDatosDelito,
        datosInformeIntPenDel, setDatosInformeIntPenDel,informeIntPenDel,
        datosInformeIntProfesion,setDatosInformeIntProfesion, informeIntProfesion,
        obtenerCondena,editarDatosCondena,objetoCondena,setObjetoCondena,
        datosBuscados, legajoInput}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;