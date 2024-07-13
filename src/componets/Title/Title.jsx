import style from"./Title.module.css";
console.log(style)
const Title = () => {
  // return <h1 style={{color: "red", textShadow: "5px 3px 7px black"}} className={style.decor}>Recipes</h1>;
  // це інлайнові стилі і використовувати їх ми не будемо!
  return <h1 className={style.decor}>Recipes</h1>;
  // краще практика використовувати CSS - модулі
}

export default Title;
