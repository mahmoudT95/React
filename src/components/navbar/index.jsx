import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { useSelector } from 'react-redux';
function Navbar() {
  let cartNum = useSelector(store =>store.cartStore.cartCount);
    return ( 
      // <!-- Navbar -->
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Navbar brand --> */}
          <Link to = "./"className="navbar-brand me-5" href="#">Portflio</Link>
      
          {/* <!-- Toggle button --> */}
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars text-light"></i>
          </button>
      
          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0 m">
              <li className="nav-item text-center mx-2 mx-lg-1">
                <Link to = "./" className="nav-link">
                  <div>
                    <i className="fa-sharp fa-solid fa-house-user"></i>
                  </div>
                  Home
                </Link>
              </li>
              <li className="nav-item text-center mx-2 mx-lg-1">
                <Link to = "/about" className="nav-link">
                  <div>
                    <i className="fa-solid fa-address-card"></i>
                  </div>
                  About
               </Link>
              </li>
               <li className="nav-item text-center mx-2 mx-lg-1">
                <Link to = "/counter" className="nav-link">
                  <div>
                    <i className="fa-solid fa-circle-dollar-to-slot"></i>
                  </div>
                  Donate
                </Link>
              </li>
              <li className="nav-item text-center mx-2 mx-lg-1">
                <Link to = "/shop" className="nav-link">
                  <div>
                  <i className="fa-solid fa-bag-shopping"></i>
                  </div>
                  Shop
                </Link>
              </li>
              
       
            </ul>
            {/* <!-- Left links --> */}
            {/* <form class="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
        <input type="search" class="form-control" placeholder="Search" aria-label="Search" />
        <button class="btn btn-primary" type="button" data-mdb-ripple-color="dark">
          Search
        </button>
      </form> */}
            {/* <!-- Right links --> */}
            <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
              <li className="nav-item text-center mx-2 mx-lg-1">
                <Link to = "/cart" className="nav-link">
                  <div>
                     <i className="fa-solid fa-cart-shopping"></i>
                    <span className="badge rounded-pill badge-notification bg-info">{cartNum}</span>
                  </div>
                  Cart
               </Link>
              </li>
              <li className="nav-item text-center mx-2 mx-lg-1">
                <Link to = "/login" className="nav-link">
                  <div>
                   <i className="fa-solid fa-right-to-bracket"></i>
                  </div>
                  Login
                </Link >
              </li>
            </ul>
            {/* <!-- Right links --> */}
      
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
        {/* <!-- Container wrapper --> */}
        
      </nav>
      // <!-- Navbar -->
);
}

export default Navbar;