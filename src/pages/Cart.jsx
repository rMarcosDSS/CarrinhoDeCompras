import  useStockCart  from '../hooks/useStockCart';
import "../css/cart.css"

export default function Cart() {

const { items , deleteItem , decreaseItem , increasesItem } = useStockCart()
  
function confirmDelete(item) {
  const respost = confirm("Deseja excluir?") 
  if(respost) deleteItem(item.id)                  
}

function decreaseQuantityAux(item) {
  if(item.quantity - 1 < 1) {
    confirmDelete(item) 
  }
    else{
      decreaseItem(item.id)
    }
}


  const totalGeral = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  return (
    <section>

      <div className='products-cart'>
        <tr className='table-titles'>
          
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Total</th>
        </tr>
        
          {
            items.map( (item) => (
              <tr className='table-cart' key={item.id}>
                <td>     
                <div><img src={item.image} alt={item.title} /></div>
                <p>{item.title.length > 25 ? item.title.slice(0, 25) + "..." : item.title}</p>
                </td>

                <td>
                  {item.price.toLocaleString('pt-br',{style: 'currency',
                    currency: 'BRL'})}
                </td>

                <td>
                       <button onClick={() => (
                    decreaseQuantityAux(item)
                  )}>-</button>
                  {item.quantity}
                      <button onClick={() => (
                    increasesItem(item.id)
                  )
                  }>+</button>
                </td>

                <td>{(item.price * item.quantity)
                .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                <button onClick={() => (
                    confirmDelete(item)
                  )}>X</button>
                </td>
              </tr>
            )
          )
          }
        <div className='section-total'>
          <div>
            <h2>Modo de entrega</h2>
            <div className='delivery-options'>
              <div>
                <input type="radio" id="contactChoice1" name="contact" value="email" />
                <label for="contactChoice1">Lorem Ipsum</label>
              </div>
              <div>
                <input type="radio" id="contactChoice1" name="contact" value="email" />
                <label for="contactChoice1">Lorem Ipsum</label>
              </div>
            </div>
          </div>
          <div className='total-purchase'>
            <div className='total-default'>
              <p>Subtotal</p>
              <p>{totalGeral.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </div> 
            <div className='total-default'>
              <p>Frete</p>
              <p>R$ 00,00</p>
            </div>
            <div className='total-default'>
              <h2>Total</h2>
              <h2>{totalGeral.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
            </div>
            <button 
            className='total-btn'
            onClick={() => (
              alert("Compra realizada com sucesso! (Ilustrativo)")
            )}>Comprar</button>
          </div>
        </div>
      </div>
      
    </section>
  );
}