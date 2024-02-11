import { useState } from "react";

export function Nuevo() {
    const [nombre, setNombre] = useState("");
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [foto, setFoto] = useState(null);

    function guardarDatos(e) {
        e.preventDefault();
        
        setNombre(e.target.nombre.value);
        console.log(nombre);

        setUsuario (e.target.usuario.value);
        console.log(usuario);

        setPassword(e.target.password.value);
        console.log(password);

        setFoto(e.target.foto.files[0]);
        console.log(foto);
        
    }

    return (
        <div className="container mt-5">
            <form onSubmit={guardarDatos}>
                <div className="card">
                    <div className="card-header">
                        <h1>Nuevo Usuario</h1>
                    </div>
                    <div className="card-body">
                        <input className="form-control mb-3" type="text" name="nombre" id="nombre" placeholder="Nombre" autofocus />
                        <input className="form-control mb-3" type="text" name="usuario" id="usuario" placeholder="Usuario" />
                        <input className="form-control mb-3" type="password" name="password" id="password" placeholder="Password" />
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
