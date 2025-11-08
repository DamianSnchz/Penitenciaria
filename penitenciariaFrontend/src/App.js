//importar BrowserRouter
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importar componentes de views
import Login from "./component/login.tsx";
import Layout from "./template/layout.tsx";
import Penitenciaria from "./component/penitenciaria.tsx";
import Delitos from "./component/delitos.tsx";
import Internos from "./component/internos.tsx";
import Inicio from "./component/inicio.tsx";
import InformeDP from "./component/informeDP.tsx";
import InformeFC from "./component/informeFC.tsx";
import InformeRP from "./component/informeRP.tsx";
import ModificacionC from "./component/modificacionC.tsx";
import RegistrarD from "./component/registrarD.tsx";
//importar proveedor Context
import ContextProvider from "./contextProvider/context.jsx";
//importamos el guardian
import RutaProtegida from "./guardian/rutaProtegida.tsx";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          {/* RUTA PÚBLICA: El login no tiene el Layout */}
          <Route path="/login" element={<Login />} />

          {/* RUTAS PRIVADAS: Envueltas por el guardián */}
          <Route element={<RutaProtegida />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Inicio />} />
              <Route path="/internos" element={<Internos />} />
              <Route path="/delitos" element={<Delitos />} />
              <Route path="/registrarDelito" element={<RegistrarD />} />
              <Route path="/penitenciaria" element={<Penitenciaria />} />
              <Route path="/informeFC" element={<InformeFC />} />
              <Route path="/informeDP" element={<InformeDP />} />
              <Route path="/informeRP" element={<InformeRP />} />
              <Route path="/modificacionC" element={<ModificacionC />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
