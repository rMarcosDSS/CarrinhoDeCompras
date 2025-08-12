import { useState , useEffect } from 'react';
import "../css/products.css";
import  CartClass  from '../entities/CartClass'
import  useStockCart  from '../hooks/useStockCart';
import { Outlet } from "react-router-dom";
import IconCart from "../../public/shopping-cart.svg";

export default function Products() {

const url = "https://fakestoreapi.com/products"
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
      image: produto.image
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
              <div className='products-img'><img src={item.image}/></div>
              <p>{item.title.length > 30 ? item.title.slice(0, 30) + "..." : item.title}</p>
              <div className='products-info'>
                <p>R$ {item.price}</p>
                
                <div>
                  <button
                  className='products-btn'
                  onClick={() => (addToCart(item))}>
                  <img src={IconCart}/>
                  Adicionar ao Carrinho
                  </button>
                </div>
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