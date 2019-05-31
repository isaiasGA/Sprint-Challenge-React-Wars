import React from 'react';

const Character = props => {
    return (
        <div className='character-info'>
            <h1>{props.characterInfo.name}</h1>
            <p><strong>Gender:</strong>{props.characterInfo.gender}</p>
            <p><strong>Specie:</strong> <a href={props.characterInfo.species}> {props.characterInfo.species}</a></p>
            <p><strong>homeworld:</strong> <a href={props.characterInfo.homeworld}> {props.characterInfo.homeworld}</a> </p>
        </div>
    )
}

export default Character;