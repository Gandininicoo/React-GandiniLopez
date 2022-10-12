import React from 'react';
import Searcher from '../layouts/Searcher'

const Header = () => {
    return (
        <>
            <header class="header">
                <picture id="imgHeader">
                    <source srcSet='img/cdlx.png' media="(min-width: 700px)" />
                    <img src='/img/cdl.png' alt="Western Hardware" class="imgHeader" />
                </picture>
                    <Searcher toSearch="Buscar Producto"/>
                    <button class="cartBTN" type="button" id="cartBTN"></button>
            </header>
        </>
    )
}

export default Header
