import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InscriptionForm from './pages/InscriptionForm';
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
      </Routes>
    </Router>
  );
}

export default App;
