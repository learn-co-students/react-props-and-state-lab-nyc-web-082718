import React from 'react'

const Pet = (props) => {
  return (
    <div className="card">
      <div className="content">
        <a className="header">
          {props.gender === "male" ? '♂' : '♀'}
          {props.name}
        </a>
        <div className="meta">
          <span className="date">{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</span>
        </div>
        <div className="description">
          <p>Age: {props.age}</p>
          <p>Weight: {props.weight} lbs.</p>
        </div>
      </div>
      <div className="extra content" >
        <button onClick={props.adoptPet} className="ui disabled button" id={props.id}>{props.adopted === true ? "Already Adopted" : "Adopt Pet"}</button>
      </div>
    </div>
  )
}

export default Pet
