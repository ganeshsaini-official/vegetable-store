import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return <h1>Product Details for: {id}</h1>;
};

export default ProductDetails;
