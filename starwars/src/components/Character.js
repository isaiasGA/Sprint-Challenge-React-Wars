import React  from 'react';

const Character = props => {
    return (
        <div className='character'>
          <h1>{props.character.name}</h1>  
          <p><strong>Gender:</strong>{props.character.gender}</p>
          <p><strong>Specie:</strong> <a href={props.character.species}> {props.character.species}</a></p>
          <p><strong>homeworld:</strong> <a href={props.character.homeworld}> {props.character.homeworld}</a> </p>    
        </div>
    )
}

export default Character;