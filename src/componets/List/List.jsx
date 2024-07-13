import Recipe from "../Recipe/Recipe";
import { nanoid } from "nanoid";
import style from"./List.module.css";

console.log(style)
const randomId = nanoid();

const List = ({ recipes }) => {
  let it = 0;
  return (
    <ul className={style.decor}>
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
