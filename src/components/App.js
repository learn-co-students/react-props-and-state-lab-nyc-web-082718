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

  fetchPets = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }
    fetch(url)
    .then(res => res.json())
    .then(pets => this.setState({pets}))
  }

  handleChange = (event) => {
    // debugger
    console.log(event.target.value)
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onAdoptPet = (petId) => {
    const updatedPets = this.state.pets.map(petObj=> {
      if (petObj.id === petId) {
        petObj.isAdopted = true
      }
      return petObj
    })
    this.setState({
      pets: updatedPets
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
              <Filters onChangeType={this.handleChange} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App
