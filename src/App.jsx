import { Switch, Route, useParams } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';

import './index.css';
import FullPostPage from './pages/FullPostPage';
import AboutPage from './pages/AboutPage';

function App() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="App">
      <Container>
        {id ? null : <Navigation />}
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
    </div>
  );
}

export default App;
