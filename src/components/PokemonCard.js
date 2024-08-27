// src/components/PokemonCard.js

import React from 'react';
import { Card, CardContent, Typography, LinearProgress } from '@mui/material';

const PokemonCard = ({ pokemon, showStats = false }) => {
  return (
    <Card 
      style={{ margin: '10px', textAlign: 'left', cursor: 'pointer' }} 
    >
      <CardContent>
        <img src={pokemon.imageUrl} alt={pokemon.name} style={{ width: '150px' }} />
        <Typography variant="h6">{pokemon.name}</Typography>

        {showStats && (
          <>
            <Typography>HP</Typography>
            <LinearProgress color='success' variant="determinate" value={(pokemon.hp / 10) * 100} />
            <Typography>Attack</Typography>
            <LinearProgress color='success' variant="determinate" value={(pokemon.attack / 10) * 100} />
            <Typography>Defense</Typography>
            <LinearProgress color='success' variant="determinate" value={(pokemon.defense / 10) * 100} />
            <Typography>Speed</Typography>
            <LinearProgress color='success' variant="determinate" value={(pokemon.speed / 10) * 100} />
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
