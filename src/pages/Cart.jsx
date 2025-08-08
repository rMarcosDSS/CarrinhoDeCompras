import  useStockCart  from '../hooks/useStockCart';


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



  
  return (
    <section>
      <h1>Carrinho de Compras</h1>

      <div>
          {
            items.map( (item) => (
              <ul>
                <li> 
                  {item.title}
                  <img src={item.image} alt="" />

                  <button onClick={() => (
                    decreaseQuantityAux(item)
                  )}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => (
                    increasesItem(item.id)
                  )
                  }>+</button>

                  <button onClick={() => (
                    confirmDelete(item)
                  )}>X</button>
                </li>
              </ul>
            ))
          }
      </div>
    </section>
  );
}