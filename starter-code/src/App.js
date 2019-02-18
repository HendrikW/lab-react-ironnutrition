import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import foods from './foods.json'

import FoodBox from './components/FoodBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        {foods.map((food, idx) => {
          return <FoodBox key={idx} image={food.image} calories={food.calories} name={food.name}/>
        })}
      </div>
    );
  }
}

export default App;
