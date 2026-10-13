import React from 'react';
import './ProductList.css';
import FoodCard from '../FoodCard/FoodCard';

const ProductList = ({products}) => {

  return (
    <div className="product-list-container">
      
      <div className="product-grid">
        {products.map((product) => (
          <FoodCard
            key={product.idMeal}
            data={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;