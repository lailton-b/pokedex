import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokedex" exact component={Home} />
        <Route path="/pokedex/page/:slug" exact component={Home} />
        <Route path="/page/:slug" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;