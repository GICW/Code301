function Recipe(props) {

  return (
    <>
      <h2><a href={props.recipe.uri}>{props.recipe.name}</a></h2>
      <img src={props.recipe.image_url} alt={props.name} title={props.name} />
      <ul>
        {props.recipe.ingredients.map(ingredient => (
          <li key={Math.random()}>{ingredient}</li>
        ))}
      </ul>
    </>
  )
}


export default Recipe;
