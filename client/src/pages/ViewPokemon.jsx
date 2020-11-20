import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';
import './style.css';
import API from '../API';

const ViewPokemon = () => {
    const [body, setBody] = useState([]);

    useEffect(() => {
        API.getPokemon().then((response) => {
            setBody(response.data.pokemon);
        });
    }, []);

    const currentPokemon = body.map((val) =>  <PokemonCard name={val.name} description={val.description} img={val.image} 
type1={val.type1} type2={val.type2} moves={val.moves}></PokemonCard> );

    const logPokemon = () => {
        console.log(body);
    }
    return (
        <div>
            <Navbar />
            <button onClick={logPokemon}>Log Pokemon</button>
            <div className="pokemon">
                {currentPokemon}
            </div>
        </div>
    )
}

export default ViewPokemon;
