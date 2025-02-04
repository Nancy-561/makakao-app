import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login, SignUp } from './Screens';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<div>forgot password</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;