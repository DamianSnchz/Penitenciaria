// en Login.tsx
import { useEffect, useState } from "react";
import { useCartContext } from "../contextProvider/context.jsx"; // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import "../css/login.css"; // Asegúrate de que la ruta a tu login.css sea correcta

function Login() {
    const {
        error,
        datosForm,
        setDatosForm,
        setCampos,
        login, // Asegúrate de que la función 'login' esté disponible en tu context
        isAuthenticated, // Asegúrate de que 'isAuthenticated' esté disponible
        validarForm // Asegúrate de que 'validarForm' esté disponible
    } = useCartContext();
    
    const navigate = useNavigate(); // Inicializar useNavigate

    // --- NUEVO ESTADO ---
    // Estado local para manejar si se muestra o no la contraseña
    const [showPassword, setShowPassword] = useState(false);
    
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
        setCampos(["usuario", "password"]);
        
        // Limpiamos los datos del form y errores al cargar
        setDatosForm({});
        // Puedes descomentar la siguiente línea si quieres que se borren errores de intentos de login anteriores.
        // setError({}); 
    }, [isAuthenticated, navigate, setCampos, setDatosForm]); // Añadir dependencias faltantes

    function handleChange(e: any) {
        setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const valor = validarForm(); // Asumiendo que 'validarForm' existe y funciona con 'datosForm'
        if (valor) {
            const exito = login(datosForm.usuario, datosForm.password);
            if (exito) {
                navigate("/");
            }
            // Si 'exito' es falso, se espera que la función 'login' en tu context
            // ya haya actualizado el estado 'error' con un mensaje general.
        }
    }

    return (
        <div className="container-login">
            {/* El nombre de la clase del formulario se cambió para coincidir con el nuevo CSS */}
            <div className="login-form-container"> 
                <h2>Inicio de Sesión</h2>
                
                {/* Mostramos un error general si existe (ej: "Usuario o contraseña incorrectos") */}
                {error.general && <span className="error-general">{error.general}</span>}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label className="form-label" htmlFor="usuario">
                            Usuario
                        </label>
                        <input
                            type="text"
                            className="form-control-login" // Clase nueva para inputs
                            id="usuario"
                            name="usuario"
                            onChange={handleChange}
                            value={datosForm?.usuario ?? ""}
                        />
                        {error.usuario && <span className="error-field">{error.usuario}</span>}
                    </div>

                    <div className="input-group">
                        <label className="form-label" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            // --- LÓGICA DE MOSTRAR CONTRASEÑA ---
                            type={showPassword ? "text" : "password"}
                            className="form-control-login" // Clase nueva para inputs
                            id="password"
                            name="password"
                            onChange={handleChange}
                            value={datosForm?.password ?? ""}
                        />
                        {error.password && <span className="error-field">{error.password}</span>}
                    </div>

                    {/* --- NUEVO CHECKBOX --- */}
                    <div className="form-check mb-4">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="showPasswordCheck"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)} // Toggle del estado
                        />
                        <label className="form-check-label" htmlFor="showPasswordCheck">
                            Mostrar contraseña
                        </label>
                    </div>

                    <button className="btn btn-primary" type="submit">
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;