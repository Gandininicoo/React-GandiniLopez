import React, { useState } from 'react';
import {consultarBDD} from '../../utils/funcionesUtiles'
const Productos = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarBDD().then(producto => setProductos(producto))
    },[])
    return (
        <>{productos}</>
    );
}

export default Productos;
