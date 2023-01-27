import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.style.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={products.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
