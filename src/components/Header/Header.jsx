import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Header.css";

function Header() {
  const { user, logout } = useContext(AuthContext);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="logo">
        <Link style={{color:" #007bff"}} to="/">🛒 HammadVerse</Link>
      </div>

      <nav className="navbar">
        <ul>
          {/* Smooth Scroll Buttons */}
          <li><button className="scroll-btn" onClick={() => scrollToSection("home")}>Home</button></li>
          <li><button className="scroll-btn" onClick={() => scrollToSection("shop")}>Shop</button></li>
          <li><button className="scroll-btn" onClick={() => scrollToSection("about")}>About</button></li>
          <li><button className="scroll-btn" onClick={() => scrollToSection("cart")}>Cart</button></li>

          {!user && (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}

          {user && user.role === "user" && (
            <>
              <li><Link to="/orders">My Orders</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><button onClick={logout}>Logout</button></li>
            </>
          )}

          {user && user.role === "admin" && (
            <>
              <li><Link to="/admin">Admin Panel</Link></li>
              <li><button onClick={logout}>Logout</button></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default Header;