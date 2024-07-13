import Title from "./componets/Title/Title";
import List from "./componets/List/List";
import Recipe from "./componets/Recipe/Recipe";
import "./App.css";
import recipes from "./recipes.json";
import recipeImg from './imgs/recipes.webp';

function App() {
  return (
    <>
      <img src={recipeImg} />
      <Title />
      <List recipes={recipes}/>
    </>
  );
}

export default App;
