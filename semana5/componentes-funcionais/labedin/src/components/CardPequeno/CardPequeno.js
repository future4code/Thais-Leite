import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <strong><p>{ props.descricao }</p></strong>
            <p>{ props.texto }</p>
        </div>
    )
}

export default CardPequeno;
