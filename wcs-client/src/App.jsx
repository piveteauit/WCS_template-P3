import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InscriptionForm from './pages/InscriptionForm';
import AtelierCrea from './pages/AtelierCrea';
import AtelierDegus from './pages/AtelierDegus';
import NotreHistoire from './pages/NotreHistoire';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InscriptionForm />} />
        <Route path="/atelier-creation" element={<AtelierCrea />} />
        <Route path="/atelier-degustation" element={<AtelierDegus />} />
        <Route path="/notre-histoire" element={<NotreHistoire />} />
      </Routes>
    </Router>
  );
}

export default App;
