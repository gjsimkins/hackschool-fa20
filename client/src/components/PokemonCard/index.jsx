import React from 'react';
import Move from '../Move';
import CanvasDraw from 'react-canvas-draw';
import './style.css';

const PokemonCard = (props) => {
    let pokemonMoves = props.moves.map((move, index) => {
        return <Move key={index} name={move.name} type={move.type} power={move.power} />
    });

    return (
        <div className="pokemon-card-container">
            <div className="pokemon-card-container-inner">
                <CanvasDraw
                    hideGrid={true}
                    disabled={true}
                    hideInterface={true}
                    saveData={props.img}
                />
                <div className="pokemoncard-data-container">
                    <p className="pokemoncard.name"> {props.name}</p>
                    <p className="pokemoncard.description">{props.description}</p>
                    <p className="pokemoncard-bold">Moves :</p>
                    <table className="moves-table">
                        { pokemonMoves }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;