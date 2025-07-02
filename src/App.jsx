import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Podologia from './pages/Podologia';
import EsteticaAvancada from './pages/EsteticaAvancada';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/podologia" element={<Podologia />} />
        <Route path="/estetica" element={<EsteticaAvancada />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
