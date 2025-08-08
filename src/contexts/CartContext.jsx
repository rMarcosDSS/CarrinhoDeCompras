import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const CartContext = createContext({})

CartContextProvider.propTypes = {
    children: PropTypes.node
}

export function CartContextProvider ({children}) {
    const [ items , setItems] = useState( () => {
        const restoredItems = localStorage.getItem('react-cart')
        if (!restoredItems) return []
        const items = JSON.parse(restoredItems)
        return items
    })

    const addItem = (item) => {
    setItems(current => {
      const updatedItems = [item, ...current]
      localStorage.setItem('react-cart', JSON.stringify(updatedItems))
      return updatedItems
    })
  }

    const getItem = (itemId) => {
        return items.find(i => i.id === +itemId)
    }

    const deleteItem = (itemId) => {
    setItems(current => {
      const updatedItems = current.filter(item => item.id !== itemId)
      localStorage.setItem('react-cart', JSON.stringify(updatedItems))
      return updatedItems
    })
    }

    const cartFunctions = {
    items,
    addItem,
    getItem,
    deleteItem
  }

  return (
    <CartContext.Provider value={cartFunctions}>   
        {children}
    </CartContext.Provider>
  )
}
  


