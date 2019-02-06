import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react'
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'

class Navbar extends Component {
    state = { activeItem: '' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state; //object destructing type { prop1, prop2 } = object; where prop1 is part of object

        return (
            <BrowserRouter>
                <>
                    <Menu inverted compact widths='3' borderless>
                        <Menu.Item
                            as={NavLink}
                            to="/"
                            exact={true}
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                        >
                            <Icon name='home' size='big' />
                        </Menu.Item>


                        <Menu.Item
                            as={NavLink}
                            to="/About"
                            name='users'
                            active={activeItem === 'users'}
                            onClick={this.handleItemClick}
                        >

                            <Icon name='users' size='big' />
                        </Menu.Item>

                        <Menu.Item
                            as={NavLink}
                            to="/Contact"
                            name='contact'
                            active={activeItem === 'contact'}
                            onClick={this.handleItemClick}
                        >
                            <Icon name='question' size='big' />
                        </Menu.Item>
                    </Menu>
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/About" component={About} />
                        <Route path="/Contact" component={Contact} />
                        <Route component={PageNotFound} />
                    </Switch>
                </>
            </BrowserRouter>
        )
    }
}

export default Navbar;