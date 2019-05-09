import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { MobNavItem } from "./MobNavItem/MobNavItem";
import "./navBar.css"

class NavBar extends Component {
    state = {
        showMobileNav: false
    }

    onMenuIconClick = () => {
        this.setState({
            showMobileNav: true
        })
    }

    onNavClick = () => {
        console.log("On nav click called")
        this.setState({
            showMobileNav: false
        })
    }

    render() {
        const { showMobileNav } = this.state

        return (
            <AppBar>
                <Toolbar>
                    {
                        !showMobileNav &&
                        <IconButton color="inherit" onClick={this.onMenuIconClick}>
                            <MenuIcon />
                        </IconButton>
                    }

                    {showMobileNav &&
                        <>
                            <div className="mob-nav-container">
                                <MobNavItem to="/" text="Home" onClick={this.onNavClick} />
                                <MobNavItem to="/About" text="About" onClick={this.onNavClick} />
                                <MobNavItem to="/ContactUs" text="Contact Us" onClick={this.onNavClick} />
                            </div>
                        </>
                    }
                </Toolbar>
            </AppBar>
        );
    }
}

export { NavBar };