import { useState , useEffect } from 'react';
import "../css/products.css";
import { Link } from 'react-router-dom';
import  CartClass  from '../entities/CartClass'
import  useStockCart  from '../hooks/useStockCart';
import { Outlet } from "react-router-dom";
import IconCart from "../../public/shopping-cart.svg";

export default function Products() {

const url = "https://api.escuelajs.co/api/v1/products"
const { items , addItem , increasesItem } = useStockCart()
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




function addToCart(produto) {

  if(items.find( (atual) => ( atual.id === produto.id))){ 
    increasesItem(produto.id)
    }
      
    else{

    const novoProduto = new CartClass({
      id: produto.id , 
      title: produto.title , 
      description: produto.description , 
      price: produto.price , 
      quantity: 1 , 
      image: produto.images[0]
    })
    console.log(novoProduto)

    addItem(novoProduto)
  }
}



  return (
    <section>
      <h1>Produtos</h1>

      <div>
        <ul className='products-list'>
          {
            products.map((item)=> (
              
              <li className='products' key={item.id}> 
              <Link to={`/products/${item.id}`}>
              <img src={item.images[0]}/>
              <p>{item.title}</p>
              </Link>
              <div className='products-info'>
                <p>R$ {item.price}</p>
                
                <button 
                className='products-btn' 
                onClick={() => (addToCart(item))}>
                <img src={IconCart}/> 
                Adicionar ao Carrinho
                </button>
              </div>            
              </li>
              
            ))
            
          }
          </ul>
      </div>
      <Outlet/>
    </section>
  );
}