import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InscriptionForm from './pages/InscriptionForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InscriptionForm />} />
      </Routes>
    </Router>
  );
}

export default App;
