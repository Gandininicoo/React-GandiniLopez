import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './content/Header'
import Navbar from './content/Navbar'
import Home from './content/Home';
import Productos from './content/Productos'
import Servicios from './content/Servicios'
import Nosotros from './content/Nosotros'
import Proyectos from './content/Proyectos';
import Producto from './content/Producto'
const App = () => {
    return (
        <>
        <BrowserRouter>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/productos" element={<Productos/>}/>
                <Route path="/servicios" element={<Servicios/>}/>
                <Route path="/nosotros" element={<Nosotros/>}/>
                <Route path="/proyectos" element={<Proyectos/>}/>
                <Route path="/producto/:id" element={<Producto/>}/>
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
