import React from "react";
import ReactDom from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Inicio } from "./components/Inicio";
import { Productos } from "./components/Productos";

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
        <Inicio />
        <Productos />

    </>
)