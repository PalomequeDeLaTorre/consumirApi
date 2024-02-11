import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Error } from "./Error";
import { Inicio } from "./Inicio";
import { Menu } from "./Menu";
import { Productos } from "./Productos";
import { Nuevo } from "./Nuevo";
import { NuevoProducto } from "./NuevoProducto";

export function Rutas(){
    return(
        <>
        <Menu />
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error />}></Route>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/productos" element={<Productos />}></Route>
                <Route path="/nuevo" element={<Nuevo></Nuevo>}></Route>
                <Route path="/nuevoProducto" element={<NuevoProducto></NuevoProducto>}></Route>
            </Routes>
        </BrowserRouter>        
        </>
    );
}