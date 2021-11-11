/**
 * index.js
 * Insertion point for react
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Theme from './styles/Theme'
import GlobalStyle from "./styles/GlobalStyles";
import ThemeContext from "./contexts/ThemeContext";


ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle/>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

