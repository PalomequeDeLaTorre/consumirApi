import axios from "axios";
import { useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";

export function BorrarProducto() {
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function borrar() {
                const res = await axios.get("https://apifirebase-0npp.onrender.com/api/borrarProductoApi/"+ params.id);
                console.log(res);
                navigate("/Productos");
        
        }

        borrar();
    }, [navigate, params.id]);

    return (
        <div>
            <h1>Producto Borrado</h1>
       </div>
    );
}
