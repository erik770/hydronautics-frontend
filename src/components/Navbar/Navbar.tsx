import React from 'react';
import classes from "./Navbar.module.scss"
import {MenuItems} from "../../const/MenuItems";
import logo from '../../img/logo_with_text.png';

export const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <h1 className={classes.navbar__logo}> <img src={logo}></img></h1>
            <ul className={classes.navbar__items}>
                {
                 MenuItems.map((item) => <li  key={item.title}> <a className={classes.navbar__item} href={item.url}>{item.title}</a></li>)
                }
            </ul>
        </nav>
    );
};