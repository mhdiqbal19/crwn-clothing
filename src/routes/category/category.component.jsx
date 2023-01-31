import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import "./category.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();
  const [products, setProduct] = useState(categoriesMap[category]);

  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
