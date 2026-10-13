import React from 'react';
import './FoodCard.css'; 
import { Link } from 'react-router-dom';
 

const FoodCard = ({data}) => {

  
  return (
    <Link to={`/detail/${data.idMeal}`}>
    <div className="food-card-container">
      <div className="card-outer-border">
          {/* Негизги тамактын сүрөтү */}
          <img src={data.strMealThumb} alt="Carrot and Bean Fritters" className="main-fritters-image" />
       
      </div>
      
      {/* Төмөнкү текст */}
      <div className="food-card-title-container">
        <h2 className="food-card-title">{data.strMeal}</h2>
    </div>
      </div>
    </Link>
  );
};

export default FoodCard;