//importar barra de navegación
import NavBar from "../component/navBar.tsx";
//importar css y boostrap
import "../css/layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
//importamos el elemento outle de BrowserRouter para las navegaciones
import { Outlet } from "react-router-dom";

//importamos ReactNode para poder renderizar "children"
import React, { ReactNode } from "react";

//definimos un alias de tipo (creamos un nuevo tipo);Sirve para indicar de que tipo deben ser los props que reciba
type LayoutProps = {
    //la propiedad "children" es de tipo ReactNode (todos los tipos string, numerico,etc)
    children: ReactNode;
};

function Layout({ children }: LayoutProps) {
    return (
        <div className="layout-container">
            <NavBar/>
            <main className="w-100 mx-5">
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;
