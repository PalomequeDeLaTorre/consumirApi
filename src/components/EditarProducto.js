import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function EditarProducto() {
    const params = useParams();
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [nombreFoto, setNombreFoto] = useState("");
    const [fotoVieja, setFotoVieja] = useState("");
    const [foto, setFoto] = useState(null);
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        async function buscarPorID() {
                const res = await axios.get("https://apifirebase-0npp.onrender.com/api/buscarProductosPorId/" + params.id);
                setId(res.data.id);
                setNombre(res.data.nombre);
                setDescripcion(res.data.descripcion);
                setCategoria(res.data.categoria);
                setPrecio(res.data.precio);
                setFotoVieja(res.data.foto);
                setNombreFoto("https://apifirebase-0npp.onrender.com/images/" + res.data.foto); 
        }
        buscarPorID();
    }, [params.id]);

    async function editarProductos(e) {
        e.preventDefault();
            const formData = new FormData();
            formData.append("id", id);
            formData.append("nombre", nombre);
            formData.append("descripcion", descripcion);
            formData.append("categoria", categoria);
            formData.append("precio", precio);
            formData.append("fotoVieja", fotoVieja);
            formData.append("foto", foto);
            const res = await axios.post("https://apifirebase-0npp.onrender.com/api/editarProductoApi/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            console.log(res);
            setNombre("");
            setDescripcion("");
            setCategoria("");
            setPrecio("");
            setFoto(null);
            setMensaje(res.data);
            setTimeout(()=>{
                setMensaje("");
                navigate('/Productos');
            },3000);
    }

    return (
        <div className="container mt-5">
            <div className="text-danger"><h3>{mensaje}</h3></div>
            <form onSubmit={editarProductos}>
                <div className="card">
                    <div className="card-header">
                        <h1>Editar Producto</h1>
                    </div>
                    <div className="card-body">
                        <input className="form-control mb-3" type="text" placeholder="Id" name="id" id="id" value={id} readOnly />
                        <input type="hidden" name="fotoVieja" id="fotoVieja" value={fotoVieja} readOnly />
                        <input className="form-control mb-3" type="text" name="nombre" id="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        <textarea className="form-control mb-3" name="descripcion" id="descripcion" placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                        <input className="form-control mb-3" type="text" name="categoria" id="categoria" placeholder="Categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                        <input className="form-control mb-3" type="number" name="precio" id="precio" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                        <div>
                            <img src={nombreFoto} width={100} alt="foto de producto" />
                        </div>
                        <input className="form-control mb-3" type="file" name="foto" id="foto" onChange={(e) => setFoto(e.target.files[0])} />
                    </div>
                    <div className="card-footer">
                        <button className="form-control btn btn-primary" type="submit">Guardar Producto</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
