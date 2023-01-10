import Navbar from './layout/Navbar.jsx';
import { Router, Route ,Routes } from 'react-router-dom';
import Login from './auth/login';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path='/sign-in' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;