import Layout from "./template/layout.tsx";
import Penitenciaria from "./component/penitenciaria.tsx";
import Delitos from "./component/delitos.tsx";
import Internos from "./component/internos.tsx";
import Inicio from "./component/inicio.tsx";
import InformeDP from "./component/informeDP.tsx";
import InformeFC from "./component/informeFC.tsx";
import InformeRP from "./component/informeRP.tsx";
import ModificacionC from "./component/modificacionC.tsx";

function App() {
  return (
    <div className="App">
      <Layout>
	       <ModificacionC/>			
      </Layout>
    </div>
  );
}

export default App;
