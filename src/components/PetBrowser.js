import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderEachPet=()=> this.props.pets.map(pet=> <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />)

  render() {
    console.log(this.props.pets)
    return (
         <div className="ui cards">
          {this.renderEachPet()}
         </div>
       )
  }
}

export default PetBrowser
