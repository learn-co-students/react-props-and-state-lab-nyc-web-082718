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


  changePets = (resJson) => {
    this.setState({
      pets: resJson
    });
  }

  changeType = (typePicked) => {
    this.setState({
      filters: {
        type: typePicked
      }
    })
  }


  getPets = () => {
    let selectedType = this.state.filters.type
    if (selectedType === 'all'){
      this.fetchPets('/api/pets')
    } else {
      this.fetchPets(`/api/pets?type=${selectedType}`)
    }
  }

  fetchPets = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(resJson => this.changePets(resJson))
  }

  adoptPet = (petId) => {
    let newPets = this.state.pets.map(pet => pet.id === petId ? {...pet, isAdopted: true} : pet )
    this.setState({
      pets: newPets,
    });
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
              <Filters
                onChangeType={this.changeType}
                onFindPetsClick={this.getPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
