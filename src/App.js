/**
 * App.js
 * Main app component
 */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from 'react'
import Theme from "./styles/Theme";
import ThemeContext from "./contexts/ThemeContext";
import { GlobalStyle, GlobalStyleDark } from "./styles/GlobalStyles";


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

  const [darkMode, setDarkMode] = useState(false);
  /*useEffect(() => localStorage.setItem('darkMode', darkMode.toString()), [darkMode])
  useEffect(() => {
    console.log(typeof(localStorage.getItem('darkMode')))
    if(localStorage.getItem('darkMode') === 'false') setDarkMode(true)
    else setDarkMode(false)
  }, [])*/

  return (
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        {darkMode ? <GlobalStyleDark/> : <GlobalStyle/>}
        <Theme>
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
        </Theme>
      </ThemeContext.Provider>
  );
}

export default App;
