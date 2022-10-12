import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Productos = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const consultarProductos = async () =>{
            const response = await fetch('./json/productos.json')
            const productos = await response.json()
            console.log(productos)
            const tarjetaProducto = productos.map(producto =>
                <div key={producto.id} className="productCard">
                    <img className="productImg" src={"./img/productos/" + producto.img} alt={producto.nombre}/>
                    <h3 className="productName"> {producto.nombre}</h3>
                    <h5 className="productPrice"> {producto.precio}</h5>
                    <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${producto.id}`}>Ver Producto</Link></button>
                </div>)
                return(tarjetaProducto)
                }
        consultarProductos().then(producto => setProductos(producto))
    },[])
    return (
        <>
        <div className='flexWrap'>
            {productos}
        </div>
        </>
    );
}

export default Productos;
