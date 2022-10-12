import React from 'react';
import Searcher from '../layouts/Searcher'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header class="header">
                <Link to="/" class="picture"><picture id="imgHeader">
                    <source srcSet='img/cdlx.png' media="(min-width: 700px)" />
                    <img src='/img/cdl.png' alt="Western Hardware" class="imgHeader" />
                </picture></Link>
                    <Searcher toSearch="Buscar Producto"/>
                    <button class="cartBTN" type="button" id="cartBTN"></button>
            </header>
        </>
    )
}

export default Header
