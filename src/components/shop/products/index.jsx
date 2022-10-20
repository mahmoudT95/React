import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cartShopping } from '@fortawesome/free-solid-svg-icons'

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
 
    // https://www.bootdey.com/snippets/view/bs4-product-detail
      <div className="container">
    <div className="card">
        <div className="card-body">
            <h3 className="card-title mb-3">{product.title}</h3>
            <h6 className="card-subtitle mb-3">{product.category}</h6>
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-6">
                    <div className="white-box text-center"><img src= {product.image} className="img-responsive  w-100"/></div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-6">
                    <h4 className="box-title mt-5">Product description</h4>
                    <p>{product.description}</p>
                    <h2 className="mt-5">
                    {product.price}<span>EGP</span>
                    </h2>
                    <button className="btn btn-dark btn-rounded me-1 px-4" data-toggle="tooltip" title="" data-original-title="Add to cart">
                        <i className="fa fa-shopping-cart"></i>
                    </button>

                </div>
                {/* <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="box-title mt-5">General Info</h3>
                    <div className="table-responsive">
                        <table className="table table-striped table-product">
                            <tbody>
                                <tr>
                                    <td width="390">Brand</td>
                                    <td>Stellar</td>
                                </tr>
                                <tr>
                                    <td>Delivery Condition</td>
                                    <td>Knock Down</td>
                                </tr>
                                <tr>
                                    <td>Seat Lock Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td>Office Chair</td>
                                </tr>
                                <tr>
                                    <td>Style</td>
                                    <td>Contemporary&amp;Modern</td>
                                </tr>
                                <tr>
                                    <td>Wheels Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Upholstery Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Upholstery Type</td>
                                    <td>Cushion</td>
                                </tr>
                                <tr>
                                    <td>Head Support</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>Suitable For</td>
                                    <td>Study&amp;Home Office</td>
                                </tr>
                                <tr>
                                    <td>Adjustable Height</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Model Number</td>
                                    <td>F01020701-00HT744A06</td>
                                </tr>
                                <tr>
                                    <td>Armrest Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Care Instructions</td>
                                    <td>Handle With Care,Keep In Dry Place,Do Not Apply Any Chemical For Cleaning.</td>
                                </tr>
                                <tr>
                                    <td>Finish Type</td>
                                    <td>Matte</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
</div>
  
  );
};

export default Products;
