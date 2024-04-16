import React from 'react';
import Recipe from './recipe'; 

const RecipesList = ({ recipes, toggleFavorite }) => {
  return (
    <div>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} toggleFavorite={toggleFavorite} />
      ))}
    </div>
  );
};

export default RecipesList;

