const Recipe = ({ data, itherator }) => {
  //   const { data, keys } = props;
  // console.log(data);
  // props = {
  // data: recipe
  //   test: 1
  // }
  let i = 0;
  return (
    <li key={itherator}>
      Name: {data.name}
      Year: {data.year}
      Ingdients:
      <ul>
        {data.ingredients.map((ingridient) => {
          i++;
          console.log(`${itherator}${i}`);
          return <li key={`${itherator}${i}`}>{ingridient}</li>;
        })}
      </ul>
    </li>
  );
};
export default Recipe;
