import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: 'all'
    }
  }

  componentDidMount(){
    this.onFindPetsClick()
  }


  onFindPetsClick = () => {
    if (this.state.filters === "all"){
      fetch("/api/pets").then(r=>r.json()).then((petsRes) => {
         this.setState({
           pets: petsRes
         })
      })
    }
    else if (this.state.filters === "dog") {
      fetch("/api/pets?type=dog").then(r=>r.json()).then((petsRes) => {
         this.setState({
           pets: petsRes
         })
      })
    }
    else if (this.state.filters === "cat") {
      fetch("/api/pets?type=cat").then(r=>r.json()).then((petsRes) => {
         this.setState({
           pets: petsRes
         })
      })
    }
    else if (this.state.filters === "micropig") {
      fetch("/api/pets?type=micropig").then(r=>r.json()).then((petsRes) => {
         this.setState({
           pets: petsRes
         })
      })
    }
  }// end of find pets on click

  onChangeType = (event) => {
    this.setState({
      filters: event.target.value

    }, () => this.onFindPetsClick())
  }

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets });

  }

  render() {
    // console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
