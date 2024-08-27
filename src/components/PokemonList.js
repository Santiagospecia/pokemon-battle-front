// src/components/PokemonList.js

import React from 'react';
import { Grid } from '@mui/material';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons, onSelect }) => {
  return (
    <Grid container spacing={4} justifyContent="center">
      {pokemons.map((pokemon) => (
        <Grid item key={pokemon.id} onClick={() => onSelect(pokemon)}>
          <PokemonCard pokemon={pokemon} showStats={false} /> 
        </Grid>
      ))}
    </Grid>
  );
};

export default PokemonList;
