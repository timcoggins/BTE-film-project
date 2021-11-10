import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import InfoPage from './components/InfoPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/film/:id">
            <InfoPage />
          </Route>
          <Route path="/tv/:id">
            <InfoPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
