import React, { useState, useEffect} from 'react';

const Productos = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const consultarProductos = async () =>{
            const response = await fetch('./json/productos.json')
            const productos = await response.json()
            const tarjetaProducto = productos.map(producto =>
                <div key={producto.id}>
                    <img src={"./img/" + producto.img} alt={producto.nombre}/>
                    <h3> {producto.nombre}</h3>
                    <h5> {producto.precio}</h5>
                </div>
                )
                return tarjetaProducto
        }
        
        consultarProductos().then(producto = setProductos(producto))
    },[])
    return (
        <>
        {productos}
        </>
    );
}

export default Productos;
