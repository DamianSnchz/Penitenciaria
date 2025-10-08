//importar BrowserRouter
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importar componentes de views
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/internos" element={<Internos />} />
          <Route path="/delitos" element={<Delitos />}/>
          <Route path="/registrarDelito" element={<RegistrarD/>}/>
          <Route path="/penitenciaria" element={<Penitenciaria />} />
          <Route path="/informeFC" element={<InformeFC/>} />
          <Route path="/informeDP" element={<InformeDP/>} />
          <Route path="/informeRP" element={<InformeRP/>} />
          <Route path="/modificacionC" element={<ModificacionC/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
