import { useState } from 'react';
import axios from 'axios';

function IngredientForm(props) {
  const [ingredient, setIngredient] = useState('');

  async function getRecipes(event) {
    event.preventDefault();
    const server = 'http://localhost:3001';
    try {
      const recipes = await axios.get(`${server}/recipes`, { params: { ingredient: ingredient } });
      props.updateRecipes(recipes.data); // Spoonacular returns an array of recipes
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }

  return (
    <form onSubmit={getRecipes}>
      <label>Enter an ingredient</label>
      <input
        onChange={(event) => setIngredient(event.target.value)}
        type="text"
        name="ingredient"
        value={ingredient}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default IngredientForm;
