// src/components/BattleResult.js

import React from 'react';
import { Typography, Box } from '@mui/material';

const BattleResult = ({ winner }) => {
  return (
    <Box 
      sx={{
        width: '100%',
        backgroundColor: '#d9edee',
        padding: '26px',
        borderRadius: '4px',
        textAlign: 'left',
        marginTop: '20px',
        color: 'black',
        border: '2px solid #000000',
      }}
    >
      <Typography variant="h5">
        {winner.name} wins!
      </Typography>
    </Box>
  );
};

export default BattleResult;
