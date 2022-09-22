import React from 'react';

const Header = () => {
    return (
        <>
            <header class="header">
                <picture id="imgHeader">
                    <source srcSet='../img/farmacia-recalde.png' media="(min-width: 700px)" />
                    <img src='../img/farmacia-recalde2.png' alt="FARMACIA RECALDE" class="imgHeader" />
                </picture>
                <input type="search" name="Buscar producto" id="searchProductInput" placeholder="Buscar Producto"/>
                    <button class="cartBTN" type="button" id="cartBTN"></button>
            </header>
        </>
    )
}

export default Header
