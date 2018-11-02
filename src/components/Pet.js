import React from 'react'

class Pet extends React.Component {
  render() {

    // console.log('PETprops', this.props)

    const {name, type, age, weight, isAdopted, gender, id} = this.props.pet
    console.log(isAdopted)

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'female' ? '♀' : '♂' }
            Name: { name }
          </a>
          <div className="meta">
            <span className="date"> Type: { type }</span>
          </div>
          <div className="description">
            <p>Age: { age }</p>
            <p>Weight: { weight }</p>
          </div>
        </div>
        <div className="extra content">
          { isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={() => {this.props.onAdoptPet(id)}}>Adopt pet</button> }
        </div>
      </div>
    )
  }
}

export default Pet
