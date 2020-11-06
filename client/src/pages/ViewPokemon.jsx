import React from 'react';
import Navbar from '../components/Navbar';
import './style.css';

const ViewPokemon = () => { 
    return (
        <div>
            <Navbar />
            <div className="pokemon">
                <h2> Turtwig </h2>
                <img src="https://i.pinimg.com/236x/e9/fc/0e/e9fc0ea0788cfc1ded2c8a32d4969ecb--grass-type-pokemon-starters.jpg" width="300" />
                <p> My favorite Pokemon. </p>
            </div>
            <div className="pokemon">
                <h2> Squirtle </h2>
                <img src="https://cdn.bulbagarden.net/upload/7/70/EP012.png" width="300" />
                <p> My close second favorite Pokemon. </p>
            </div>
            <div className="pokemon">
                <h2> Rayquaza </h2>
                <img src="https://cdn.bulbagarden.net/upload/thumb/e/e4/384Rayquaza.png/1200px-384Rayquaza.png" width="300" />
                <p> My favorite legendary Pokemon. </p>
            </div>
        </div>
    )
}

export default ViewPokemon;
