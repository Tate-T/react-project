import style from './Recipe.module.css';
// import chickenImg from '../../imgs/chickenLeg.webp'
console.log(style)

const Recipe = ({ data, itherator }) => {
  //   const { data, keys } = props;
  // console.log(data);
  // props = {
  // data: recipe
  //   test: 1
  // }
  let i = 0;
  return (
    <li key={itherator} className={style.item}>
      <p className={style.name}>Name: <span className={style.nameSpan}>{data.name}</span></p>
      <p className={style.year}>Year: {data.year}</p>
      <p className={style.ingredients__title}>Ingdients:</p>
      <ul className={style.ingredients}>
        {data.ingredients.map((ingridient) => {
          i++;
          console.log(`${itherator}${i}`);
          return <li className={style.ingredient} key={`${itherator}${i}`}>{ingridient}</li>;
        })}
      </ul>
      <img src={data.img} alt={data.name} className={style.img}/>
    </li>
  );
};
export default Recipe;
