import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addToCart } from "../../redux/cartSlice";
import "./shop.css"

export default function Shop() {
  let cartList = useSelector(store =>store.cartStore.cartItems);
  let quantity = useSelector(store =>store.cartStore.quantity);
  
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  const qty = 1;
  const result = products.map((o, i) => ({ ...o, qty: qty }));
  console.log(result)
  const add = (pro) => {
    const ProductExist = cartList.find(item => item.id === pro.id);
    
    if (ProductExist) {
      addToCart(
        cartList.map(item =>
          item.id === pro.id
            ? { ...ProductExist,qty: ProductExist.qty + 1 }
            : item
        )
        
      );
     
    }
      else{
       dispatch(addToCart(pro))
    
        // dispatch(addToCart(pro));
   
    console.log(cartList);
      }
    
  };

  if (products && products.length === 0) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        <Spinner animation="border" className="text-center" />
      </div>
    );
  }

  return (
    <section className="bg-light pt-5 pb-5 shadow-sm">
      <div className="container">
        <div className="row pt-5">
          <div className="col-12">
            <h3 className="text-uppercase border-bottom mb-4 text-center">
             WELCOME  TO MY SHOP
            </h3>
          </div>
        </div>
        <div className="row">
          {/* <!--card--> */}
          {products.map((product) => {
            return (
              <div 
                className="col-6 col-lg-4 mb-3 d-flex align-items-stretch "
                key={product.id}
              >
                <div className="card shadow-lg">
                  <Link to={`/shop/${product.id}`}>
                    <div className="container my-4"><img
                      src={product.image}
                      className="card-img-top "
                      alt="Card"
                    /></div>
                     </Link>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-center">{product.title}</h5>
                      <p className="card-text mb-4">
                      {product.description}
                      </p><Link to={`/shop/${product.id}`}>
                      <span>Raed more</span>
                      </Link>
                    </div>
                 
                  <button
                  type="button"
                    onClick={()=>add(product)}
                    className=" mt-auto align-self-center mb-4 bg-dark text-light"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
