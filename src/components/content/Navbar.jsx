import React from 'react';
import { Link } from 'react-router-dom';
const ProductList = () => {
    return (
        <>
            <section className="navContenido">
                <Link to="/productos"><h3>PRODUCTOS</h3></Link>
                <Link to="/servicios"><h3>SERVICIOS</h3></Link>
                <Link to="/nosotros"><h3>NOSOTROS</h3></Link>
                <Link to="/proyectos"><h3>PROYECTOS</h3></Link>
            </section>
        </>
    )
}

export default ProductList
