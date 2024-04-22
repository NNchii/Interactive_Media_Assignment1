import React from 'react';
import Recipe from './recipe'; 

// Defines a functional component 'RecipesList' that takes 'recipes' array and 'toggleFavorite' function as props
const RecipesList = ({ recipes, toggleFavorite }) => {
  return (
    <div>
      {/* Maps over the recipes array to render a Recipe component for each item in the array */}
      {recipes.map(recipe => (
        // Recipe component is rendered for each recipe.
        <Recipe key={recipe.id} recipe={recipe} toggleFavorite={toggleFavorite} />
      ))}
    </div>
  );
};

export default RecipesList; 


