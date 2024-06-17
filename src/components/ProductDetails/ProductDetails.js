import React, { useEffect, useState } from "react";
import './product.css'
import { Link, useParams } from "react-router-dom";
import { getProductId } from "../../api/api";

function ProductDetails() {
  const { id } = useParams();
  const [productdetails, setproductdetails] = useState(null);

  useEffect(() => {
    const fetchProductsdetails = async () => {
      const data = await getProductId(id);
      console.log(data);
      setproductdetails(data);
    };
    fetchProductsdetails();
  }, [id]);

  if (!productdetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <img src={productdetails.image} className="imagess" alt={productdetails.title} />
      <div className="productinfo">
        <h2 className="produtcinfo">{productdetails.title}</h2>
        <p className="productdescr">{productdetails.description}</p>
        <p className="productprice">{productdetails.price}</p>
        <Link to='/buy'>
        <button className="h1">Buy Now</button>
        </Link>
        
        <Link to='/'>
          <button className="h2">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
