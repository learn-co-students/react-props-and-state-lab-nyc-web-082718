import React from 'react'
import Pet from './Pet'

const PetBrowser = ({pets, onAdoptPet}) => {

  const petList = pets.map(pet => <Pet key={pet.id} onAdoptPet={onAdoptPet} />)
    return <div className="ui cards">{petList}</div>


}//end of functional component

export default PetBrowser
