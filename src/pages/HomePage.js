// src/pages/HomePage.js

import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import PokemonList from '../components/PokemonList';
import BattleArena from '../components/BattleArena';
import BattleResult from '../components/BattleResult';
import { getPokemons, startBattle } from '../services/api';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [randomOpponent, setRandomOpponent] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await getPokemons();
        setPokemons(data);
      } catch (error) {
        console.error("Error al cargar los pokemons", error);
      }
    };
    fetchPokemons();
  }, []); 

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
    setRandomOpponent(null); // Resetear el oponente si seleccionas un nuevo Pokémon
    setWinner(null); // Resetear el ganador al seleccionar un nuevo Pokémon
  };

  const handleBattle = () => {
    // Seleccionar un contrincante aleatorio que no sea el seleccionado por el usuario
    const availableOpponents = pokemons.filter(poke => poke.id !== selectedPokemon.id);
    const opponent = availableOpponents[Math.floor(Math.random() * availableOpponents.length)];
    setRandomOpponent(opponent);

    startBattle(selectedPokemon.id, opponent.id)
      .then((data) => setWinner(data.winner))
      .catch((error) => {
        console.error("Failed to start battle", error);
      });
  };

  return (
    <Container>
      <Typography variant="h4" align="left" style={{ marginTop: '40px', marginBlock: '20px' }}>
        Battle of Pokemon
      </Typography>
      <Typography variant="h6" align="left" style={{ marginBottom: '20px' }}>
        Select your pokemon
      </Typography>
      
      <PokemonList pokemons={pokemons} onSelect={handleSelectPokemon} />
      {winner && (
        <BattleResult winner={winner} />
      )}
      {selectedPokemon && (
        <>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button variant="contained" color="success" onClick={handleBattle}>
              Start Battle
            </Button>
          </div>
        </>
      )}

      {randomOpponent && (
        <BattleArena pokemon1={selectedPokemon} pokemon2={randomOpponent} />
      )}

    </Container>
  );
};

export default HomePage;
