import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import { Store } from './store';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';

import './index.css';
import FullPostPage from './pages/FullPostPage';
import AboutPage from './pages/AboutPage';

function App() {
  const location = useLocation().pathname;
  const regex = /\/post\/[0-9]+$/g;
  const found = location.match(regex);

  return (
    <div className="App">
      <Store>
        <Container>
          {found ? null : <Navigation />}
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/post/:id">
              <FullPostPage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </Container>
      </Store>
    </div>
  );
}

export default App;
