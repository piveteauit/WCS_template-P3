import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AtelierCrea from './pages/AtelierCrea';
import AtelierDegus from './pages/AtelierDegus';
import NotreHistoire from './pages/NotreHistoire';
import InscriptionForm from './pages/InscriptionForm';
import './App.css';
import FicheDeRenseignement from './pages/FicheDeRenseignement';
import Toggletest from './pages/Toggletest';

function App() {
  return (
    <Router>
      <Routes>

      
        <Route path='/renseignement/:userId' element={<FicheDeRenseignement />} />
        <Route path='/renseignement' element={<FicheDeRenseignement />} />
       

        <Route path="/" element={<Home />} />

        <Route path="/atelier-creation" element={<AtelierCrea />} />
        <Route path="/atelier-degustation" element={<AtelierDegus />} />
        <Route path="/notre-histoire" element={<NotreHistoire />} />
        <Route path="/inscription" element={<InscriptionForm />} />
      </Routes>
    </Router>
  );
}

export default App;
