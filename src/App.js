
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from './pages/Explore';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgorPassword from './pages/ForgotPassword';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Explore/>}/>
      <Route path="/offers" element={<Offers/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/forgot-password" element={<ForgorPassword/>}/>
    </Routes>
    <Navbar />
    </Router>
    
    </>

  );
}

export default App;
