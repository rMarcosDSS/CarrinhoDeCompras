import { Link } from "react-router-dom";

export default function Header() {
  return (
		<header>
        <nav >
          <Link to="/">Home</Link>
          <Link to="/products">Produtos</Link>
          <Link to="/cart">Carrinho</Link>
        </nav>
      </header>
)}