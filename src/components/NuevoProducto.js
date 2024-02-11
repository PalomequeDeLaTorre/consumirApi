import { useState } from "react";

export function NuevoProducto() {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [foto, setFoto] = useState(null);

    function guardarDatos(e) {
        e.preventDefault();
        
        setNombre(e.target.nombre.value);
        console.log(nombre);

        setDescripcion (e.target.descripcion.value);
        console.log(descripcion);

        setCategoria (e.target.categoria.value);
        console.log(categoria);

        setPrecio (e.target.precio.value);
        console.log(precio);

        setFoto(e.target.foto.files[0]);
        console.log(foto);
        
    }

    return (
        <div className="container mt-5">
            <form onSubmit={guardarDatos}>
                <div className="card">
                    <div className="card-header">
                        <h1>Nuevo Producto</h1>
                    </div>
                    <div className="card-body">
                        <input className="form-control mb-3" type="text" name="nombre" id="nombre" placeholder="Nombre" autofocus />
                        <textarea className="form-control mb-3" name="descripcion" id="descripcion" placeholder="Descripcion" />
                        <input className="form-control mb-3" type="text" name="categoria" id="categoria" placeholder="Categoria" />
                        <input className="form-control mb-3" type="number" name="precio" id="precio" placeholder="Precio" />
                        <input className="form-control mb-3" type="password" name="password" id="password" placeholder="Password" />
                        <input className="form-control mb-3" type="file" name="foto" id="foto" />
                    </div>
                    <div className="card-footer">
                        <button className="form-control btn btn-primary" type="submit">Guardar Producto</button>
                    </div>
                </div>
            </form>
        </div>
    );
}