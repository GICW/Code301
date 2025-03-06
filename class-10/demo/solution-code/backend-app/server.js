'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;

async function getRecipes(req, res) {
  const ingredient = req.query.ingredient;
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${SPOONACULAR_API_KEY}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);  // Spoonacular returns an array of recipes
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).send('Error fetching recipes');
  }
}

app.get('/recipes', getRecipes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
