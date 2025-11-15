// en Login.tsx
import { useEffect, useState } from "react";
// Corrección: Se quitó la extensión .jsx, ya que el bundler (como Webpack o Vite)
// usualmente la resuelve automáticamente.
import { useCartContext } from "../contextProvider/context"; // Asegúrate de que la ruta sea correcta
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
        setCampos(["user", "password"]);
        
        setDatosForm({});
    }, [isAuthenticated, navigate, setCampos, setDatosForm]); // Dependencias correctas

    function handleChange(e: any) {
        setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
    }

    // --- CORRECCIÓN 1: Convertir en 'async' ---
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const valor = validarForm();
        if (valor) {
            const exito = await login(); 
            if (exito === true) {
                navigate("/");
            }
        }
    }

    return (
        <div className="container-login">
            <div className="login-form-container"> 
                <h2>Inicio de Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label className="form-label" htmlFor="user">
                            Usuario
                        </label>
                        <input
                            type="text"
                            className="form-control-login"
                            id="user"   
                            name="user" 
                            onChange={handleChange}
                            value={datosForm?.user ?? ""} 
                        />
                        {error.user && <span className="error-field">{error.user}</span>}
                    </div>

                    <div className="input-group">
                        <label className="form-label" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control-login"
                            id="password"
                            name="password"
                            onChange={handleChange}
                            value={datosForm?.password ?? ""}
                        />
                        {error.password && <span className="error-field">{error.password}</span>}
                    </div>

                    <div className="form-check mb-4">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="showPasswordCheck"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <label className="form-check-label" htmlFor="showPasswordCheck">
                            Mostrar contraseña
                        </label>
                    </div>
                    {error.general && <span className="error-general">{error.general}</span>}
                    <button className="btn btn-primary" type="submit">
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;