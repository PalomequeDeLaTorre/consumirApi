import axios from "axios";
import { useEffect, useState } from "react";

export function Productos() {
  const [dataProductos, setDataProductos] = useState([]);

  useEffect(() => {
    axios.get("https://apifirebase-0npp.onrender.com/api/mostrarProductos")
      .then((respuesta) => {
        console.log(respuesta);
        setDataProductos(respuesta.data);
      })
      .catch((error) => {
        console.log("Error al recuperar la API" + error);
      });
  }, []);

  const listaProductos = dataProductos.map((producto) => {
    var editar = "/editar/" + producto.id;
    var borrar = "/borrar/" + producto.id;
    var foto = "https://apifirebase-0npp.onrender.com/images/" + producto.foto;

    return (
      <tr key={producto.id} className="align-middle">
        <td>{producto.id}</td>
        <td>{producto.nombre}</td>
        <td>{producto.descripcion}</td>
        <td>{producto.categoria}</td>
        <td>{producto.precio}</td>
        <td><img src={foto} width="100px" alt={`Foto de ${producto.nombre}`} /></td>
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
          <th>Descripcion</th>
          <th>Categoria</th>
          <th>Precio</th>
          <th>Foto</th>
          <th>Editar / Borrar</th>
        </tr>
      </thead>
      <tbody>
        {listaProductos}
      </tbody>
    </table>
  );
}
