import React from "react";
import { NavLink } from "react-router-dom";
import "./mobNavItem.css";

const MobNavItem = (props) => {
    return(
        <NavLink to={props.to} className="mob-nav-item" onClick={props.onClick}>
            {
                props.text
            }
        </NavLink>
    )
}

export { MobNavItem };