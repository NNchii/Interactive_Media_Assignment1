import React, { useState } from 'react';
import RecipesList from './recipelist';
import { recipesData } from './data';
import './App.css';


const App = () => {
  // State to hold all recipes
  const [recipes, setRecipes] = useState(recipesData);
  // State for filtering recipes by dietary restrictions
  const [filter, setFilter] = useState('');
  // State to handle search term for recipes by name
  const [searchTerm, setSearchTerm] = useState('');

  // Function to update filter state based on user selection
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Function to update search term state based on user input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Function to toggle the favorite status of a recipe
  const toggleFavorite = id => {
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.id === id) {
        return { ...recipe, favorite: !recipe.favorite };
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
  };

  // Combining all filters and search term into one to determine visible recipes
  const visibleRecipes = recipes.filter(recipe =>
    (filter === 'favorites' ? recipe.favorite : true) &&
    (filter !== 'favorites' && filter ? recipe.dietaryRestrictions.includes(filter) : true) &&
    recipe.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h1>Recipe Book</h1>
      <input type="text" placeholder="Search by name" onChange={handleSearchChange} />
      <select onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="vegan">Vegan</option>
        <option value="gluten">Gluten</option>
        <option value="gluten-free">Gluten-free</option>
        <option value="favorites">Favorites</option> // Option to filter by favorites
      </select>
      <RecipesList recipes={visibleRecipes} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default App;
