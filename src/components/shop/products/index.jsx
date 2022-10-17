import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Products = () => {
  const params = useParams();
  useEffect(() => {
    getProducts();
  });
  const getProducts = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  const [product, setProducts] = useState([]);

  return (
    <div>
      <div className="card container col-6 ">
        <img src={product.image} alt="img" className="card-img-top w-50" />
        <h2 className="card-title">{product.title}</h2>
        <p className="text-secondary">EGP{product.price}</p>
      </div>
    </div>
  );
};

export default Products;
