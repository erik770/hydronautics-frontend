import React, {FC, useEffect, useState} from 'react';
import classes from "./Navbar.module.scss"
import {MenuItems} from "../../const/MenuItems";
import logo from '../../img/logo_with_text.svg';

export const Navbar: FC = () => {
    useEffect(() => {
        const scriptTag = document.createElement('script');

        scriptTag.src = "https://kit.fontawesome.com/99b107e3e1.js";
        scriptTag.async = true;

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        }
    }, []);

    const [menuActive, setMenuActive] = useState<boolean>(false)
    const menuOpen = () => setMenuActive(currentMenuActiveState => !currentMenuActiveState)

    const navbarItemClasses: string[] = [classes.navbar__items];
    if (menuActive) {
        navbarItemClasses.push(classes.navbar__items_active);
    }

    return (
        <nav className={classes.navbar}>
            <h1 className={classes.navbar__logo}><img src={logo}></img></h1>
            <div className={classes['navbar__menu-icon']} onClick={menuOpen}>
                <i className={menuActive ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={navbarItemClasses.join(' ')}>
                {
                    MenuItems.map((item) => <li key={item.title}>
                        <a className={classes.navbar__item} href={item.url}>{item.title}</a>
                    </li>)
                }
            </ul>
        </nav>
    );
};