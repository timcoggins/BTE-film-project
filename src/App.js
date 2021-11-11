/**
 * App.js
 * Main app component
 */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from './components/molecules/NavBar';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import Footer from './components/molecules/Footer'

import './App.css';

/**
 * App
 * @returns {JSX.Element}
 */
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/movie/:id">
            <InfoPage media={'movie'}/>
          </Route>
          <Route path="/tv/:id" >
            <InfoPage media={'tv'}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
