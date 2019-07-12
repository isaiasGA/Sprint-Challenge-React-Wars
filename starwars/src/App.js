import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CharacterList from './components/CharacterList';

import './App.css';

function App() {
  const [starWars, setWars]= useState([])

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
     .then (response => {
       setWars(response.data)
     })
  },  []);
console.log(starWars);
    return (
      <div className="App">
        <h1 className="Header">React Wars 🌌</h1>
        < CharacterList characters={starWars}/>
      </div>
    );
  }

export default App;
