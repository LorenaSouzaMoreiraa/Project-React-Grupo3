import React from 'react';
import { Link }from 'react-router-dom';

function Home () {
    
    return(
    <div className="app">
        <h1>Página Inicial</h1>
        <Link to ="/login"><button > Clique aqui</button></Link>
    </div>
    )
}

export default Home;