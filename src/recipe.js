import React from 'react';

const Recipe = ({ recipe, toggleFavorite }) => {
  return (
    <div className="recipe-card clearfix">
      <h3>{recipe.name}</h3>
      <div className="recipe-details">
        <p>Cooking Time: {recipe.cookingTime} minutes</p>
        <p>Dietary Restrictions: {recipe.dietaryRestrictions.join(", ")}</p>
      </div>
      <button onClick={() => toggleFavorite(recipe.id)}>
        {recipe.favorite ? '★ Unfavorite' : '☆ Favorite'}
      </button>
    </div>
  );
};

export default Recipe;
