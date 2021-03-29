import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from "./hw5.module.css"

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.links} activeClassName={s.active}> Pre Junior </NavLink>
            <NavLink to={PATH.JUNIOR} className={s.links} activeClassName={s.active}> Junior </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.links} activeClassName={s.active}> JuniorPlus </NavLink>
        </div>
    );
}

export default Header;
