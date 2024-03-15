import './App.css';
import Dash from './Components/Dash';
import LoginPage from './Components/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<LoginPage/>}/>
        <Route exact path="/dash" element={<Dash/>}/>
      </Routes>

    </Router>
    
  );
}

export default App;
