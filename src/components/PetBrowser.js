import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  makePets = () => {
    if(this.props.pets.length){
      return this.props.pets.map(p => {
        return <Pet key={p.id} pet={p} isAdopted={p.isAdopted} onAdoptPet={this.props.onAdoptPet}/>
      })
    }
    else{
      return null
    }
  }

  render() {
    return (
      <div className="ui cards">
        {this.makePets()}
      </div>)
  }
}

export default PetBrowser
