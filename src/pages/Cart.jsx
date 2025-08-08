import  useStockCart  from '../hooks/useStockCart';


export default function Cart() {

const { items } = useStockCart()
  
  
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

                  <button>-</button>
                  <p>1</p>
                  <button>+</button>

                  <button>X</button>
                </li>
              </ul>
            ))
          }
      </div>
    </section>
  );
}