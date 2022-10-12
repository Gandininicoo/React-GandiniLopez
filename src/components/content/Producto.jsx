import React, {useState, useEffect}from 'react';
import {useParams} from 'react-router-dom'

const Producto = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(()=>{
        fetch('../json/productos.json')
        .then(response => response.json())
        .then(productos => {
            const productoMostrar = productos.find(productoArray => productoArray.id == id)
            setProducto(productoMostrar)
        })
    }
    )
    return (
        <div>
            <h1>{producto.nombre}</h1>
            <img src={"../img/productos/" + producto.img} alt={producto.nombre} />
            <h2>$ {producto.precio}</h2>
            <p>stock: {producto.stock}</p>
        </div>
    );
}

export default Producto;
