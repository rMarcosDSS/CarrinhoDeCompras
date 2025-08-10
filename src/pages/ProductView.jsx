import { useParams } from "react-router-dom";
import useStockCart from "../hooks/useStockCart";

export default function ProductView() {

  const { productId } = useParams();

  console.log("Product ID:", productId);

  return (
    <div>
      <h1>Product View</h1>
     
    </div>
  );
}