import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";

function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR}>Pre Junior</NavLink>
        </div>
    );
}

export default Header;
