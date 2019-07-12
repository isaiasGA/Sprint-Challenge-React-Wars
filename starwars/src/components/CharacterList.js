import React  from 'react';
import Character from './Character';

const CharacterList = props => {
    return (
        <div className='characterList'>
            {props.characters.map(character => (
              <Character 
                key={character.name}
                character={character}
                 />
            ))}
        </div>
    )
}

export default CharacterList;