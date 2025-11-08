// en component/RutaProtegida.tsx (o donde prefieras)
import { useCartContext } from "../contextProvider/context.jsx";
import { Navigate, Outlet } from "react-router-dom";

function RutaProtegida() {
  const { isAuthenticated } = useCartContext();

  if (!isAuthenticated) {
    // Si el usuario NO está logueado,
    // lo redirige a la página de login.
    return <Navigate to="/login" replace />;
  }

  // Si SÍ está logueado, renderiza el componente <Layout />
  return <Outlet />;
}

export default RutaProtegida;