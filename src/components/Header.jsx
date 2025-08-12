import { Link } from "react-router-dom";
import '../css/header.css'
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
		<header className="header">
        <nav className="navbar">
          <Link to="/"><img src={Logo} alt="" /></Link>
          <div className="navbar-center">
            <Link to="/">Home</Link>
            <Link to="/products">Produtos</Link>
          </div>
          <div className="navbar-cart">
            <Link to="/cart">Carrinho</Link>
          </div>
        </nav>
      </header>
)}