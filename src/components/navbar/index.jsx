import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Navbar() {
    return ( <nav className="nav d-flex justify-content-between align-items-center text-light container-fluid py-3 bg-dark px-5">
    <h3>Logo</h3>
    <ul className="d-flex  align-items-center ">
    <Link to="/"><li  className="list-item mx-3">Home</li></Link>
    <Link to="/about"><li  className="list-item mx-3">About</li></Link> 
    <Link to="/shop"><li className="list-item mx-3">Shop</li></Link>
    <Link to="/counter"> <li className="list-item mx-3">Counter</li></Link>
     
    </ul>
  </nav>
);
}

export default Navbar;