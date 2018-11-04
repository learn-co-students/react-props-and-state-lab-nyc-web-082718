import React from 'react';

class Pet extends React.Component {
  showGender =()=>(
    this.props.pet.gender === "male" ? '♂' : '♀'
  )
  showAdopted = ()=>(
    this.props.pet.isAdopted? <button className="ui disabled button">Already adopted</button> : <button onClick={this.onAdoptPet} className="ui primary button">Adopt pet</button>
  )

  onAdoptPet=()=> {
    this.props.onAdoptPet(this.props.pet.id)
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.showGender()}
            PET NAME: {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
         {this.showAdopted()}
        </div>
      </div>
    )
  }
}

export default Pet
