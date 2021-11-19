import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./Components/Home";
import Cidade from "./Components/Cidade";
import Musica from "./Components/Musica";

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Musica" component={Musica} exact />
        <Route path="/Cidade" component={Cidade} exact />
      </Switch>
  </BrowserRouter>,

  
  document.getElementById('root')
);