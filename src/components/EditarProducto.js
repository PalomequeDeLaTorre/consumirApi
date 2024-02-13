import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function EditarProducto(){
    const params=useParams();
 
    const [id, setId]=useState("");
    const [nombre, setNombre]=useState("");
    const [descripcion, setDescripcion]=useState("");
    const [categoria, setCategoria]=useState("");
    const [rutaPrecio, setPrecio]=useState("");
    const [foto, setFoto]=useState("null");
    const [rutaFoto, setRutaFoto]=useState("");
    const [mensaje, setMensaje]=useState("");

    useEffect(async()=>{
        var res=await axios.get("https://apifirebase-0npp.onrender.com/api/buscarProductosPorId/"+ params.id);
        console.log(res);
        setId(res.data.id);
        setNombre(res.data.nombre);
        setDescripcion(res.data.descripcion);
        setCategoria(res.data.categoria);
        setPrecio(res.data.precio);
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
                        <h1>Editar Producto</h1>
                    </div>
                    <div className="card-body">
                        <input className="form-control mb-3" type="text" placeholder="Id" name="id" id="id" value={id} readOnly /> 
                        <input className="form-control mb-3" type="text" name="nombre" id="nombre" placeholder="Nombre" autofocus />
                        <textarea className="form-control mb-3" name="descripcion" id="descripcion" placeholder="Descripcion" />
                        <input className="form-control mb-3" type="text" name="categoria" id="categoria" placeholder="Categoria" />
                        <input className="form-control mb-3" type="number" name="precio" id="precio" placeholder="Precio" />
                        <div>
                            <img src= {rutaFoto} width={100} alt="https://apifirebase-0npp.onrender.com/images/"/>
                        </div>
                        <input className="form-control mb-3" type="file" name="foto" id="foto"/>
                    </div>
                    <div className="card-footer">
                        <button className="form-control btn btn-primary" type="submit">Guardar Producto</button>
                    </div>
                </div>
            </form>
        </div>
    );

}