import { useState , useEffect } from 'react';
import "../css/Products.css";

export default function Products() {

const url = "https://api.escuelajs.co/api/v1/products"

const [products,SetProducts] = useState([])

  useEffect(() => {
  async function fetchAPI() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        SetProducts(data)
      } catch (error) {
          console.log(error.message)
      }
  }
  fetchAPI()
},[])

  return (
    <section>
      <h1>Produtos</h1>

      <div>
        <ul>
          {
            products.map((item)=> (
              <li>{item.title} 
              <img src={item.images[0]}/></li>
            ))
            
          }
          </ul>
      </div>
    </section>
  );
}