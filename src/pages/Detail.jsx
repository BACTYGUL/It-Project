import './Detail.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  async function getFood() {
    try {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      if (res.data.meals) {
        setFood(res.data.meals[0]);
      }
    } catch (error) {
      console.error('Маалыматты алууда ката чыкты:', error);
    }
  }

  useEffect(() => {
    getFood();
  }, [id]);

  if (!food) {
    return <div className="loading">Жүктөлүүдө...</div>;
  }

  // API'деги strIngredient1..20 жана strMeasure1..20 талааларын массивге чогултуу
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredientName = food[`strIngredient${i}`];
    const measure = food[`strMeasure${i}`];

    if (ingredientName && ingredientName.trim() !== '') {
      ingredients.push({
        id: i,
        name: ingredientName,
        measure: measure ? measure.trim() : '',
        image: `https://www.themealdb.com/images/ingredients/${ingredientName}-Small.png`,
      });
    }
  }

  return (
    <div className="recipe-page">
      {/* Башкы тема жана өлкөсү */}
      <h1 className="recipe-title">{food.strMeal}</h1>
      
      <div className="flag-navigation">
        <span className="category-tag">{food.strCategory}</span> | <span className="area-tag">{food.strArea}</span>
      </div>

      <div className="top-section">
        <div className="main-image-container">
          <img src={food.strMealThumb} alt={food.strMeal} className="main-image" />
          <p className="image-tag">{food.strTags ? food.strTags : 'No Tags'}</p>
        </div>

        {/* Ингредиенттер тизмеси */}
        <div className="ingredients-grid">
          {ingredients.map((item) => (
            <div key={item.id} className="ingredient-card">
              <img src={item.image} alt={item.name} className="ingredient-image" />
              <p className="ingredient-name">{item.name}</p>
              <p className="ingredient-measure">{item.measure}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Даярдоо нускамасы */}
      <div className="instructions-section">
        <h2 className="instructions-title">Instructions</h2>
        <div className="steps-container">
          <p className="step-description">{food.strInstructions}</p>
        </div>
      </div>

      {/* Эгер YouTube шилтемеси болсо */}
      {food.strYoutube && (
        <div className="youtube-section">
          <a href={food.strYoutube} target="_blank" rel="noopener noreferrer" className="youtube-link">
            Watch Video Tutorial
          </a>
        </div>
      )}
    </div>
  );
}

export default Detail