import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    console.log(this.props.pet)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            <h1>{this.props.pet.name} {this.props.pet.gender === "male" ?  "♂" : "♀"}</h1>
          </a>
          <div className="meta">
            <span className="date">Type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight} {this.props.pet.weight>1 ? "lbs" : "lb"}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={()=>this.props.onAdoptPet(this.props.pet.id)} >Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
