import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage';
import RegistrationPage from './components/signup';
import SignInPage from './components/signin';
import LandingPage from './pages/landing';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="/landing" element={<LandingPage/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
