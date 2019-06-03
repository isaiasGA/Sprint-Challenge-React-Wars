import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return (
      <div className='character-list'>
           {props.characters.map(character => (
             <Character 
               key={character.name}
               characterInfo={character} />
        ))}
      </div>
    );
};

export default CharacterList;
       