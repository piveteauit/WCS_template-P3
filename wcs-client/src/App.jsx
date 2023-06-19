import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InscriptionForm from './pages/InscriptionForm';
import AtelierCrea from './pages/AtelierCrea';
import AtelierDegus from './pages/AtelierDegus';
import NotreHistoire from './pages/NotreHistoire';
import './App.css';
import FicheDeRenseignement from './pages/FicheDeRenseignement';
import Toggletest from './pages/Toggletest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InscriptionForm />} />
        <Route path='/ficheDeRenseignement' element={<FicheDeRenseignement />} />
        <Route path='/Toggletest' element={<Toggletest />} />
        <Route path="/atelier-creation" element={<AtelierCrea />} />
        <Route path="/atelier-degustation" element={<AtelierDegus />} />
        <Route path="/notre-histoire" element={<NotreHistoire />} />
      </Routes>
    </Router>
  );
}

export default App;
