function Recipe(props) {
  return (
    <>
      <h2><a href={`https://spoonacular.com/recipes/${props.recipe.title.replace(/ /g, '-')}-${props.recipe.id}`} target="_blank" rel="noopener noreferrer">{props.recipe.title}</a></h2>
      <img src={props.recipe.image} alt={props.recipe.title} title={props.recipe.title} />
      <ul>
        {props.recipe.missedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Recipe;
