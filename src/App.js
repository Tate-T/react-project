import Title from "./componets/Title/Title";
import List from "./componets/List/List";
import Recipe from "./componets/Recipe/Recipe";
import "./App.css";
import recipes from "./recipes.json";

function App() {
  return (
    <>
      <Title />
      <List recipes={recipes}/>
    </>
  );
}

export default App;
