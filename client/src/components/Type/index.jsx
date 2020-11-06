import React from 'react';

const Type = (props) =>{
    let defaultEmptys = ['type2', 'move2type', 'move3type', 'move4type'];
    let emptyOption;
    if (defaultEmptys.includes(props.id)){
        emptyOption = <option defaultValue=""></option>
    }
    return (
        <select id={props.id} name={props.id}>
            {emptyOption}
            <option>Normal</option>
            <option>Fire</option>
            <option>Water</option>
            <option>Grass</option>
            <option>Electric</option>
            <option>Psychic</option>
            <option>Ice</option>
            <option>Dragon</option>
            <option>Dark</option>
            <option>Fairy</option>
            <option>Fighting</option>
            <option>Flying</option>
            <option>Poison</option>
            <option>Ground</option>
            <option>Rock</option>
            <option>Bug</option>
            <option>Ghost</option>
            <option>Steel</option>
        </select>
    );
}
export default Type;