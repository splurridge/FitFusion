import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Landing from "./main pages/Landing";
import SignUp from "./main pages/SignUp";
import Login from "./main pages/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>  
    </>
  );
};

export default App;

