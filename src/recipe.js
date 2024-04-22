import React from 'react';

// Defines a functional component 'Recipe' that takes a 'recipe' object and a 'toggleFavorite' function as props
const Recipe = ({ recipe, toggleFavorite }) => {
  return (
    // Renders a card-style div that displays information about a recipe
    <div className="recipe-card clearfix">
      <h3>{recipe.name}</h3> {/* Displays the name of the recipe */}
      <div className="recipe-details">
        <p>Cooking Time: {recipe.cookingTime} minutes</p> {/* Shows how long it takes to prepare the dish */}
        <p>Dietary Restrictions: {recipe.dietaryRestrictions.join(", ")}</p> {/* Lists dietary restrictions, if any */}
      </div>
      {/* Button that toggles the favorite status of the recipe */}
      <button onClick={() => toggleFavorite(recipe.id)}>
        {recipe.favorite ? '★ Unfavorite' : '☆ Favorite'} {/* The button text changes based on whether the recipe is a favorite */}
      </button>
    </div>
  );
};

export default Recipe; // Exports the Recipe component for use in other parts of the application

