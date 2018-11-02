import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  getPets = () => {
    return this.props.pets.map((pet) => <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} />)
  }

  render() {
    // console.log('PETSBROWSER PROPS', this.props)
    return (
      <div className="ui cards">
        {this.getPets()}
      </div>
    )
  }
}

export default PetBrowser
