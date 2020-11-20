import React from 'react';
import './style.css';

const PokemonCard = ({ name, description, img }) => {
    return (
        <div className="pokemon-card-container">
            <div className="pokemon-card-container-inner">
                <div className="pokemoncard-data-container">
                    <p className="pokemoncard.name"> {name}</p>
                    <img src={img} width="500"></img>
                    <p className="pokemoncard.description">{ description }</p>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;