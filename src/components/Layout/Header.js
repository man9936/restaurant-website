import React from "react";
import  classes from './Header.module.css';
import mealsImage from '../../Assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";


export default function Header(props) {
  return (
    <React.Fragment>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
     <img  src={mealsImage} alt="" />
      </div>
      </React.Fragment>
  );
}
