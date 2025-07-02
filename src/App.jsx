import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Duda from './pages/Duda'
import Podologia from './pages/Podologia'
import EsteticaAvancada from './pages/EsteticaAvancada'
import Contato from './pages/Contato'
import Nav from './components/Nav';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter basename="/mapa-frontend">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/duda" element={<Duda />} />
        <Route path="/podologia" element={<Podologia />} />
        <Route path="/estetica" element={<EsteticaAvancada />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
