import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login, SignUp } from './Screens';
import { Verify } from './Screens/Verify';
import { ForgotPassword } from './Screens/ForgotPassword/ForgotPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/forgot-password" element={<div>forgot password</div>} /> */}
          <Route path="/verify" element={<Verify/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;