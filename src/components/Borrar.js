import axios from "axios";
import { useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";
import { URL_API } from "../config/rutas";

export function BorrarUsuario() {
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function borrar() {
                const res = await axios.get(URL_API+"borrarUsuario/"+ params.id);
                console.log(res);
                navigate("/");
        
        }

        borrar();
    }, [navigate, params.id]);

    return (
        <div>
            <h1>Usuario Borrado</h1>
       </div>
    );
}



