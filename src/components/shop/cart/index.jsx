import { useSelector ,useDispatch } from "react-redux/es/exports";
import {addToCart} from "../../../redux/cartSlice"

function Cart() {
  let cartList = useSelector(store =>store.cartStore.cartItems);
  let cartNum = useSelector(store =>store.cartStore.cartCount);
  let quantity = 1;
  let quantityX = quantity;
    console.log(cartList , cartNum)
    
    const removeItem = (id)=>{
     console.log("hi")
    }
    return ( 
      <section className="h-100">
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i
                  className="fas fa-angle-down mt-1"></i></a></p>
          </div>
        </div>
        {
          cartList.map((item)=>{
            return(
              <div className="card rounded-3 mb-4 " key={item.id}>
              <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-md-2 col-lg-2 col-xl-2">
                    <img
                      src={item.image}
                      className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3">
                    <p className="lead fw-normal mb-2">{item.title}</p>
                    <p className="text-muted">{item.category}</p>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button className="btn btn-link px-2"
                      onClick={null}>
                      <i className="fas fa-minus"></i>
                    </button>
    
                    <p>{quantity}</p>
    
                    <button className="btn btn-link px-2"
                      onClick={null}>
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 className="mb-0">EGP{item.price}</h5>
                  </div>
                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" className="text-danger" onClick={() =>removeItem(item.id)}><i className="fas fa-trash fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>
            )
          })
        }
       

        <div className="card">
          <div className="card-body text-center">
            <button type="button" className="btn   btn-lg bg-dark text-white ">Proceed to Pay</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
  );
     
}

export default Cart;
