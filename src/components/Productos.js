import axios from "axios";
import { useEffect, useState } from "react";
import { URL_API, URL_IMAGES } from "../config/rutas";

export function Productos() {
  const [dataProductos, setDataProductos] = useState([]);

  useEffect(() => {
    axios.get(URL_API+"mostrarProductos")
      .then((respuesta) => {
        //console.log(respuesta);
        setDataProductos(respuesta.data);
      })
      .catch((error) => {
        console.log("Error al recuperar la API" + error);
      });
  }, []);

  const listaProductos = dataProductos.map((producto) => {
    var foto = URL_IMAGES + producto.foto;
    var editar = "/EditarProducto/" + producto.id;
    var borrar = "/BorrarProducto/" + producto.id;
    
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
