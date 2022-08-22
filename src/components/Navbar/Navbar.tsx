import React, {FC, useEffect, useState} from 'react';
import classes from "./Navbar.module.scss"
import {MenuItems} from "../../const/MenuItems";
import logo from '../../img/logo_with_text.svg';
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";
import {LinkStyles} from "../../types/Types";

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
    const menuClose = () => setMenuActive(false)

    const navbarItemClasses: string[] = [classes.navbar__items];
    if (menuActive) {
        navbarItemClasses.push(classes.navbar__items_active);
    }

    return (
        <nav className={classes.navbar}>
            <LinkR to={'/'} className={classes.navbar__logo} onClick={menuClose}><img src={logo}></img></LinkR>
            <div className={classes['navbar__menu-icon']} onClick={menuOpen}>
                <i className={menuActive ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={navbarItemClasses.join(' ')}>
                {
                    MenuItems.map((item) => <li key={item.title} >
                        {item.linkType === LinkStyles.scroll
                            ?
                            <LinkS spy={true} smooth={true} onClick={menuClose} offset={-100} duration={500} className={classes.navbar__item}
                                   activeClass={classes.navbar__item_active} to={item.url}>{item.title}</LinkS>
                            : <LinkR onClick={menuClose} className={classes.navbar__item} to={item.url}>{item.title}</LinkR>}
                    </li>)
                }
            </ul>
        </nav>
    );
};