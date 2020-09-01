import React from 'react';

const Recipe = ({ title, calories, image, ingredients}) => {
  return (
    <div className="recipe-card">
      <div className="card-left">
        <img src={image} alt="recipe"></img>
        <h1>{title}</h1>
        <p>{calories} cal</p>
      </div>
      <div className="card-right">
        <ul>
          {ingredients.map(ingredients => (
            <li>{ingredients.text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
  
export default Recipe;