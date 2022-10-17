import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <Link to={`/shop/${product.id}`} key={product.id} className="col-4">
            <div className="card">
              <img src={product.image} alt="img" className="card-img-top" />
              <h2 className="card-title">{product.title}</h2>
              <p className="text-secondary">EGP{product.price}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Shop;
