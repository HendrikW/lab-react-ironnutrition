import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import foods from './foods.json'

import FoodBox from './components/FoodBox'
import SearchBar from './components/SearchBar'
import Form from './components/Form'

class App extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: '',
      showForm: false,
      foods: foods
    }
  }

  onSearch(term) {
    this.setState({
      searchTerm: term
    })
  }

  showForm() {
    this.setState({
      showForm: true
    })
  }

  addAFood(food) {   
    console.log(this.state.foods.concat([food])) 
    this.setState({
      foods: this.state.foods.concat([food]),
      showForm: false
    })
  }

  render() {

    const filteredFoods = this.state.foods.filter((f) => f.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    return (
      <div className="App">
        <SearchBar searchTerm={this.state.searchTerm} searchTermChange={(term) => this.onSearch(term)} />
        {filteredFoods.map((food, idx) => {
          return <FoodBox key={idx} image={food.image} calories={food.calories} name={food.name} />
        })}
        { this.state.showForm && <Form addAFood={(food) => this.addAFood(food)}/> }
        <button onClick={() => this.showForm()}>Show Form</button>
      </div>
    );
  }
}

export default App;
