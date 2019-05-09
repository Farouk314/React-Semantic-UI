import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar, Home, About, Contact } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/About" component={About} />
          <Route path="/ContactUs" component={Contact} />
        </Switch>
      </>
    </BrowserRouter>
  )
}

export default App;
