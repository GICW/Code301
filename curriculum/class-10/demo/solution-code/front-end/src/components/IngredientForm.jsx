import { useState } from 'react';
import axios from 'axios';

function IngredientForm(props) {

  const [ingredient, setIngredient] = useState('');

  async function getRecipes(event) => {
    e.preventDefault();
    const server='http://localhost:3001';
    const recipes = await axios.get(`${server}/recipes`, {params: {ingredient: ingredient }});
    props.updateRecipes(recipes.data);
  }

  render() {
    return (
        <form onSubmit={getRecipes}>
          <label>enter an ingredient</label>
          <input onChange={(event) => setIngredient(event.target.value)} type="text" name="ingredient"></input>
          <button>submit</button>
        </form>
    )
  }
}

export default IngredientForm;
