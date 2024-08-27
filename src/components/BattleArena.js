// src/components/BattleArena.js

import React from 'react';
import { Grid, Typography } from '@mui/material';
import PokemonCard from './PokemonCard';

const BattleArena = ({ pokemon1, pokemon2 }) => {
  return (
    <Grid container spacing={2} justifyContent="space-between" alignItems="center" style={{ marginTop: '20px' }}>
      <Grid item xs={12} md={5}>
        <PokemonCard pokemon={pokemon1} showStats={true} /> 
      </Grid>
      <Grid item xs={12} md={2} style={{ textAlign: 'center' }}>
        <Typography variant="h4">VS</Typography>
      </Grid>
      <Grid item xs={12} md={5}>
        <PokemonCard pokemon={pokemon2} showStats={true} /> 
      </Grid>
    </Grid>
  );
};

export default BattleArena;
