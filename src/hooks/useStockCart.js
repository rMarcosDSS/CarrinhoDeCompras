import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function useStockCart() {
  return useContext(CartContext)
}