import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './content/Header'
import Navbar from './content/Navbar'
import Home from './content/Home';
import Productos from './content/Productos'
import Servicios from './content/Servicios'
import Nosotros from './content/Nosotros'
import Proyectos from './content/Proyectos';
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
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
