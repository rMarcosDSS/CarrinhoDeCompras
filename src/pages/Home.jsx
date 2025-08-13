import "../css/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="container-banner">
      <div className="container-titles">
          <h1>Conheça os produtos!</h1>
          <p>Explore nossa seleção exclusiva de produtos de alta qualidade, com preços que cabem no seu bolso. 
            Aqui você encontra tecnologia, estilo e praticidade em um só lugar!</p>
            <div className="links">
              <Link className="btn-products" to="/products">Ver os produtos</Link>
              <Link className="btn-cart" to="/cart">Carrinho</Link>
            </div>
      </div>
    </section>
  );
}