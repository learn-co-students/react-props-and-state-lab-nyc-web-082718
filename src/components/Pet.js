import React from 'react'

class Pet extends React.Component {
  gender = () => {
    if (this.props.pet.gender === 'male') {
      return '♂'
    }
    else if (this.props.pet.gender === 'female') {
      return '♀'
    }
  }

  adopted = () => {
    if (this.props.pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    }
    else {
      const petId = this.props.pet.id
      return <button
        className="ui primary button"
        onClick={() => this.props.onAdoptPet(petId)}
      >
      Adopt pet
      </button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.gender()}
            {this.props.pet.name}
            {this.props.pet.type}
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adopted()}
        </div>
      </div>
    )
  }
}

export default Pet
