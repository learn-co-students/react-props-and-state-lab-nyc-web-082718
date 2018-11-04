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
  handleOnChange=(e)=> {

    this.setState({
      ...this.state.filters,
      filters: {
        type: e.target.value
      }

    })
  }
  handelOnClick=()=>{
    let query = this.state.filters.type === "all"? '': `type=${this.state.filters.type}`
    if(this.state.filters.type === "all"){
      fetch("/api/pets")
        .then(r=> r.json())
        .then(data=> {

          this.setState({
            pets: data
          })
        })
    } else {
      fetch(`/api/pets?${query}`)
        .then(r=>r.json())
        .then(data=> {

          this.setState({
            pets: data
          })
        })
    }

  }
  onAdoptPet=(id) =>{

    const newPets = this.state.pets.map(pet => pet.id === id ? {...pet, isAdopted: true} : pet);
    this.setState({
      pets: newPets,
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleOnChange} onFindPetsClick={this.handelOnClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets= {this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
