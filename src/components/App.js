import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = (newType) => {
    console.log(newType);
    this.setState({
      pets: [],
      filters: {
        type: newType,
      }
    })
  }

  fetchPets = () => {
    let query = this.state.filters.type === 'all' ? '' : `?type=${this.state.filters.type}`;
    fetch(`/api/pets${query}`)
      .then(resp => resp.json())
      .then(petsJSON => {
        this.setState({
          pets: petsJSON,
        })
      })
  }

  adoptPet = (id) => {
    const newPets = this.state.pets.map(pet => pet.id === id ? {...pet, isAdopted: true} : pet);
    this.setState({
      pets: newPets,
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
