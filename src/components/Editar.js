import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function EditarUsuario(){
    const params=useParams();
 
    const [id, setId]=useState("");
    const [nombre, setNombre]=useState("");
    const [usuario, setUsuario]=useState("");
    const [password, setPassword]=useState("");
    const [foto, setFoto]=useState("null");
    const [rutaFoto, setRutaFoto]=useState("");
    const [mensaje, setMensaje]=useState("");

    useEffect(async()=>{
        var res=await axios.get("https://apifirebase-0npp.onrender.com/api/buscarUsuarioPorId/"+ params.id);
        console.log(res);
        setId(res.data.id);
        setNombre(res.data.nombre);
        setUsuario(res.data.usuario);
        setFoto(res.data.foto);
        setRutaFoto("https://apifirebase-0npp.onrender.com/images/"+ res.data.foto);

    },[]);

    function editarDatos(e){
        e.preventDefault();
        
        console.log("Hola");
    }


    return (
        
            <div className="container mt-5">
                <form onSubmit={editarDatos}>
                    <div className="card">
                        <div className="card-header">
                            <h1>Editar Usuario</h1>
                        </div>
                        <div className="card-body">
                         <input className="form-control mb-3" type="text" placeholder="Id" name="id" id="id" value={id} readOnly />    
                            <input className="form-control mb-3" type="text" name="nombre" id="nombre" placeholder="Nombre" autofocus />
                            <input className="form-control mb-3" type="text" name="usuario" id="usuario" placeholder="Usuario" />
                            <input className="form-control mb-3" type="password" name="password" id="password" placeholder="Password" />
                            <div>
                                <img src= {rutaFoto} width={100} alt="https://apifirebase-0npp.onrender.com/images/"/>
                            </div>
                            <input className="form-control mb-3" type="file" name="foto" id="foto" />
                        </div>
                        <div className="card-footer">
                            <button className="form-control btn btn-primary" type="submit">Guardar Usuario</button>
                        </div>
                    </div>
                </form>
            </div>
    );
}