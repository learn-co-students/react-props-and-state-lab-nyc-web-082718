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

    // this.fetchPets()
  }

  fetchPets = () => {
    fetch('/api/pets')
    .then(result => result.json())
    .then(result => this.setState({
      pets: result
    }))
  }

  changeType = (event) => {
    if (event.target.value === "all") {
      this.fetchPets()
    } else if (event.target.value === "cat") {
      fetch('/api/pets?type=cat')
      .then(result => result.json())
      .then(result => this.setState({
        pets: result
      }))
    } else if (event.target.value === "dog") {
      fetch('/api/pets?type=dog')
      .then(result => result.json())
      .then(result => this.setState({
        pets: result
      }))
    } else if (event.target.value === "micropig") {
      fetch('/api/pets?type=micropig')
      .then(result => result.json())
      .then(result => this.setState({
        pets: result
      }))
    }
  }

  onAdoptPet = (event) => {
    if (event.target.innerText === "Adopt Pet") {
      let newState = this.state.pets.map(pet => {
        return (pet.id === event.target.id ? { ...pet, isAdopted: true } : pet)
      })
      this.setState({
        pets: newState
      })
      console.log(newState)
      console.log(event.target.id)
    }
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
              <Filters onChangeType={this.changeType} getPets={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser petData={this.state.pets} adoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
