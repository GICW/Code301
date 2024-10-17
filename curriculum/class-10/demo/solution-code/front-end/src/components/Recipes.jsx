import { useState } from 'react';
import IngredientForm from './IngredientForm';
import Recipe from './Recipe';

function Recipes {

  const [recipes, setRecipes] = useState([]);

  function updateRecipes(newRecipes) {
    setRecipes(newRecipes);
  };

  return (
    <>
      <IngredientForm updateRecipes={updateRecipes} />
      {recipes.length && recipes.map((recipe, idx) => (
        <div key={idx}>
          <Recipe recipe={recipe} />
        </div>
      ))}
    </>
  )
}

export default Recipes;
