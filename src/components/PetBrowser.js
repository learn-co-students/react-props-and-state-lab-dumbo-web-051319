import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const viewPets = this.props.selectedPets.map((pet, index) => {
      return <Pet 
        key={index}
        id={pet.id}
        name={pet.name}
        type={pet.type}
        age={pet.age}
        weight={pet.weight}
        gender={pet.gender}
        isAdopted={pet.isAdopted}
        onAdoptPet={this.props.onAdoptPet}
      />

    })
    return <div className="ui cards">{viewPets}</div>
  }
}

export default PetBrowser
