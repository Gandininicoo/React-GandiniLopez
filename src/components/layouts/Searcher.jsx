import React from 'react';

const Searcher = ({toSearch}) => {
        return (
            <>
            <input type="search" name="Buscar producto" placeholder={toSearch}/>
            </>
        );
}

export default Searcher;
