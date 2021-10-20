import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import InfoPage from './components/InfoPage';

import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        {/* TODO The router will change between these pages in the future*/}
        <HomePage/>
        <InfoPage/>
    </div>
  );
}

export default App;
