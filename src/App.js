import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Medicine from './Components/Medicine';

function App() {
  return (
    <Router>

      <Navbar />
      <switch>
        <Route path='/' exact component={Medicine} />
        {/* <Route path='/favourites' component={Favourite} /> */}
      </switch>
     






    </Router>
  );
}

export default App;
