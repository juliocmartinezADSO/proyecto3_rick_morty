import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Character } from './components/Characters';
import { DetailCharacters } from './components/DetailCharacters';

function App() {
  return (
    <Router>
      <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/character">Character</Link>
      </div>
      <Routes>
        <Route path='/character/:id' element={<DetailCharacters />} />
        <Route path='/character' element={<Character />} />
      </Routes>

    </Router>
  );
}

export default App;
