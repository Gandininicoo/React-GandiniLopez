import React from 'react';
import Searcher from '../layouts/Searcher'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="header">
                <Link to="/" className="picture"><picture id="imgHeader">
                    <source srcSet='/img/cdlx.png' media="(min-width: 700px)" />
                    <img src='/img/cdl.png' alt="CDL Electricidad Automotor" className="imgHeader" />
                </picture></Link>
                    <Searcher toSearch="Buscar Producto"/>
                    <button className="cartBTN" type="button" id="cartBTN"></button>
            </header>
        </>
    )
}

export default Header
