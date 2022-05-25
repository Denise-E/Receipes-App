import './App.css';
import React, { Component } from 'react';
import Form from './components/Form';

const API_KEY = "1c446efe406b4a3da0e20cce7acb07cc";


class App extends Component {
  //Will make the API calls
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const apiCall = await fetch(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}`);
    const data = await apiCall.json();
    console.log(data.results); // You can see it in console when you press the buttom
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">        
        <h1 className="App-title">Recipe Search</h1>
      </header>
      <Form getRecipe={this.getRecipe} />
    </div>
  );
  }
  
}

export default App;