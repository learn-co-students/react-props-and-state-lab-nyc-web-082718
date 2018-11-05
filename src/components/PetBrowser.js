import React from 'react'

import Pet from './Pet'

const PetBrowser = (props) => {
  return props.petData.map(pet => {
    return (
      <div className="ui cards">
        <Pet
          name={pet.name}
          gender={pet.gender}
          type={pet.type}
          weight={pet.weight}
          age={pet.age}
          adopted={pet.isAdopted}
          key={pet.id}
          id={pet.id}
          adoptPet={props.adoptPet}
        />
      </div>
    )
  })
}

export default PetBrowser
