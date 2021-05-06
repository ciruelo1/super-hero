import './assets/css/styles.css';
import React from 'react';
import Header from './components/Common/Header';
import NotFound from './components/NotFound/NotFound';
import CharactersContextProvider from './contexts/CharactersContext';
import Characters from './components/Characters';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/'>
        <CharactersContextProvider>
          <Characters />
        </CharactersContextProvider>
      </Route>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default App;
