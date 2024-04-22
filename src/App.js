import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Logout from "./components/Logout";
function App() {
  
  return (
    <div  >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
    </div>
  );
}

export default App;
