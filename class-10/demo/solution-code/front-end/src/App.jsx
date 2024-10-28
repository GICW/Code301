import { useState } from 'react';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Footer from './components/Footer';

function App() {

  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]);

  return (
    <>
      <Header />
      <Recipes />
      <Footer />
    </>
  )
}

export default App;
