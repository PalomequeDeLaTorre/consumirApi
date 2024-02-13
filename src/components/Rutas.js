import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Error } from "./Error";
import { Inicio } from "./Inicio";
import { Menu } from "./Menu";
import { Productos } from "./Productos";
import { Nuevo } from "./Nuevo";
import { NuevoProducto } from "./NuevoProducto";
import { EditarUsuario } from "./Editar";
import { EditarProducto } from "./EditarProducto";

export function Rutas(){
    return(
        <>
        <Menu />
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error />}></Route>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/Productos" element={<Productos />}></Route>
                <Route path="/Nuevo" element={<Nuevo></Nuevo>}></Route>
                <Route path="/EditarUsuario/:id" element={<EditarUsuario></EditarUsuario>}></Route>
                
                <Route path="/NuevoProducto" element={<NuevoProducto></NuevoProducto>}></Route>
                <Route path="/EditarProducto/:id" element={<EditarProducto></EditarProducto>}></Route>
            </Routes>
        </BrowserRouter>        
        </>
    );
}