import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./styles.css";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/db/product.json`);
        setProduct(response?.data?.[0]);
      } catch (error) {
        console.error("Error fetching the product data :", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="product-page">
      <img
        src={`${process.env.PUBLIC_URL}/${product?.image}`}
        alt={product?.name}
      />
      <h1>{product?.name}</h1>
      <p>{product?.description}</p>
      <p>Price: {product?.price}</p>
    </div>
  );
};

export default Product;
