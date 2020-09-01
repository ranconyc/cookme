import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipe'
import Nav from './nav'

const App = () => {
  const APP_ID = '59c0cd4a';
  const APP_KEY = '22175697e123db0bf36d1380fef9bfa9';

  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipe()
  }, [query])
  
  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    }
    
  const updateSearch = e => {
    setSearch(e.target.value);
  } 

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <Nav />
      <form className="search-form" onSubmit={getSearch}>
        <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default App;
