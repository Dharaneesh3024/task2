import { Link,useLocation } from "react-router-dom";
import "./navbar.css"



const Navbar = () => {
    let location=useLocation()
  return (
    <nav className="nav">
      
      <Link to="/" className={location.pathname=="/"?"active-link" : "options"} >Home</Link>
      <Link to="/about" className={location.pathname=="/about"?"active-link" : "options"} >About</Link>
      <Link to="/products" className={location.pathname=="/products"?"active-link" : "options"} >Products</Link>
      <Link to="/contact" className={location.pathname=="/contact"?"active-link" : "options"} >Contact</Link>
    </nav>
  );
};

export default Navbar;
