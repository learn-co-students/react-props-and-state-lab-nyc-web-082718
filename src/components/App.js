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

  onChangeType = (e) => {
    this.setState({
      type: e.target.value
    }, () => {
      console.log(this.state);
    })
  }

  onFindPetsClick = () => {
    fetch('/api/pets')
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        pets: json
      }, () => {
        console.log(this.state);
      })
    })
  }

  filterPets = () => {
    console.log(this.state.type);
    if (this.state.type === 'all') {
      return this.state.pets
    } else {
      return this.state.pets.filter(pet => {
        return pet.type === this.state.type
      })
    }
  }

  onAdoptPet = (id) => {
   const pets = this.state.pets.map(p => {
     return p.id === id ? { ...p, isAdopted: true } : p;
   })
   this.setState({ pets });
 };

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
              onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet={this.onAdoptPet}
                pets={this.filterPets()}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
