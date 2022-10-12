import React from 'react';
import { Link } from 'react-router-dom';
const ProductList = () => {
    return (
        <>
            <section class="navContenido">
                <Link to={"/Productos.jsx"}><h3>PRODUCTOS</h3></Link>
                <Link to={"/Servicios.jsx"}><h3>SERVICIOS</h3></Link>
                <Link to={"/Nosotros.jsx"}><h3>NOSOTROS</h3></Link>
                <Link to={"/Proyectos.jsx"}><h3>PROYECTOS</h3></Link>
            </section>
        </>
    )
}

export default ProductList
