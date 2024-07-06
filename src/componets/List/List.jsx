import Recipe from "../Recipe/Recipe";
import { nanoid } from "nanoid";

const randomId = nanoid();

const List = ({ recipes }) => {
  let it = 0;
  return (
    <ul>
      {recipes?.map((recipe) => {
        it++;
        return (
          <Recipe data={recipe} itherator={it} />
          // <li key={recipe.id}>
          //   Name: {recipe.name}
          //   Year: {recipe.year}
          //   Ingdients:
          // </li>
        );
      })}
    </ul>
  );
};
export default List;
