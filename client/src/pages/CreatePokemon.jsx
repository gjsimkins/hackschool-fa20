import React from 'react';
import Navbar from '../components/Navbar';
import Type from '../components/Type';
import './style.css';

const CreatePokemon = () => {
    return (
        <div>
            <Navbar />
            <form className="create-page">
                <div className="pokemon-form">
                    <h2> Create a Pokemon </h2>
                    <div className="form-row">
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" required />
                        <button> Generate Random Name </button>
                    </div>
                    <div className="form-row">
                        <label htmlFor="desc">Description</label>
                        <input id="desc" name="desc" required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="type1">Type 1</label>
                        <Type id="type1" />
                        <label htmlFor="type2">Type 2</label>
                        <Type id="type2" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="move1">Move 1</label>
                        <input id="move1" name="move1" required />
                        <label htmlFor="move1type">Type</label>
                        <Type id="move1type" />
                        <label htmlFor="move1power">Power</label>
                        <input type="number" id="move1power" name="move1power" min="0" max="100" defaultValue="0" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="move2">Move 2</label>
                        <input id="move2" name="move2" />
                        <label htmlFor="move2type">Type</label>
                        <Type id="move2type" />
                        <label htmlFor="move2power">Power</label>
                        <input type="number" id="move2power" name="move2power" min="0" max="100" defaultValue="0" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="move3">Move 3</label>
                        <input id="move3" name="move3" />
                        <label htmlFor="move3type">Type</label>
                        <Type id="move3type" />
                        <label htmlFor="move3power">Power</label>
                        <input type="number" id="move3power" name="move3power" min="0" max="100" defaultValue="0" />
                    </div>
                    <div className="htmlForm-row">
                        <label htmlFor="move4">Move 4</label>
                        <input id="move4" name="move4" />
                        <label htmlFor="move4type">Type</label>
                        <Type id="move4type" />
                        <label htmlFor="move4power">Power</label>
                        <input type="number" id="move4power" name="move4power" min="0" max="100" defaultValue="0" />
                    </div>
                    <input type="submit" defaultValue="Submit" />
                </div>
            </form>
        </div>
);
}

export default CreatePokemon;