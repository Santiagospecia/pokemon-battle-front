// src/services/api.js

import axios from 'axios';

const API_BASE_URL = '/api';  

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Obtener la lista de pokemones
export const getPokemons = async () => {
  try {
    const response = await api.get('/pokemons');
    return response.data;
  } catch (error) {
    console.error('Error fetching pokemons:', error);
    throw error;
  }
};

// Iniciar una batalla
export const startBattle = async (pokemon1Id, pokemon2Id) => {
  try {
    const response = await api.get(`/battles`, {
      params: {
        pokemon1Id,
        pokemon2Id,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error starting battle:', error);
    throw error;
  }
};
