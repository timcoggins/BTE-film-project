/**
 * index.js
 * Insertion point for react
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Theme from './styles/Theme'
import GlobalStyle from "./styles/GlobalStyles";

ReactDOM.render(
    <React.StrictMode>
        <Theme>
            <GlobalStyle/>
            <App />
        </Theme>
    </React.StrictMode>,
    document.getElementById('root')
);

