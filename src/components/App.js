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

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  fetchreq = (url) =>{
    fetch(url).then(res => res.json()).then(json => {this.setState({
      pets: json
    })})
  }

  onAdoptPet = (id) => {
    console.log(`Pet ${id} adopted....?`)
    let newpets = this.state.pets.map(pet => {
      if(pet.id == id){
        pet.isAdopted=true
        return pet
      }
      else{
        return pet
      }
    })
    this.setState({
      pets: newpets
    })
  }

  onFindPetsClick = (event) => {
    let fetchurl
    switch(this.state.filters.type){
      case 'cat':
        fetchurl = '/api/pets?type=cat';
        this.fetchreq(fetchurl);
        break;
      case 'dog':
        fetchurl = '/api/pets?type=dog';
        this.fetchreq(fetchurl);
        break;
      case 'micropig':
        fetchurl = '/api/pets?type=micropig';
        this.fetchreq(fetchurl);
        break;
      default:
        fetchurl = '/api/pets';
        this.fetchreq(fetchurl);
        break;
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
