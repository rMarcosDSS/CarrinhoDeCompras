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
      <h1>Carrinho de Compras</h1>

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
                <p>{item.title}</p>
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
        <tr className="table-cart total-row">
            <td >Total Geral: {totalGeral.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
            <button
              onClick={() => alert('Compra finalizada! (Ilustrativo)')}
              className="finalize-button"
            >
              Finalizar Compra
            </button>
        </tr>
      </div>
      
    </section>
  );
}