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
    const newFilters = {...this.state.filters}
    newFilters.type = newType
    this.setState({
      filters: newFilters
    })
  }

  findPetsClick = () => {
    let queryParam = ''
    if (this.state.filters.type !== 'all') {
      queryParam = `?type=${this.state.filters.type}`
    }
    fetch(`/api/pets${queryParam}`)
    .then(r => r.json())
    .then(petResults => {
      this.setState({
        pets: petResults
      })
    })
  }

  adoptPet = (petId) => {
    const newPets = [...this.state.pets]
    const petToChange = newPets.find((pet) => {
      return pet.id === petId
    })
    petToChange.isAdopted = true
    this.setState({
      pets: newPets
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
              <Filters
                onChangeType={this.changeType}
                onFindPetsClick={this.findPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.adoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
