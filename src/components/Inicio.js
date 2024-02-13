import axios from "axios";
import { useEffect, useState } from "react";

export function Inicio() {
  const [dataUsuarios, setDataUsuarios] = useState([]);

  useEffect(() => {
    axios.get("https://apifirebase-0npp.onrender.com/api/mostrarUsuarios")
      .then((respuesta) => {
        //console.log(respuesta);
        setDataUsuarios(respuesta.data);
      })
      .catch((error) => {
        console.log("Error al recuperar la API" + error);
      });
  }, []);

  const listaUsuarios = dataUsuarios.map((usuario) => {
    var foto = "https://apifirebase-0npp.onrender.com/images/" + usuario.foto;
    var editar = "/EditarUsuario/" + usuario.id;
    var borrar = "/BorrarUsuario/" + usuario.id;
    
    return (
      <tr key={usuario.id} className="align-middle">
        <td>{usuario.id}</td>
        <td>{usuario.nombre}</td>
        <td>{usuario.usuario}</td>
        <td><img src={foto} width="100px" alt={`Foto de ${usuario.nombre}`} /></td>
        <td>
          <a href={editar}>Editar</a> / <a href={borrar}>Borrar</a>
        </td>
      </tr>
    );
  });

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Foto</th>
          <th>Editar / Borrar</th>
        </tr>
      </thead>
      <tbody>
        {listaUsuarios}
      </tbody>
    </table>
  );
}
 