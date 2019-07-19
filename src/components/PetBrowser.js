import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  genPet = () => {
    return this.props.pets.map(pet => <Pet key={pet.id} pet={pet} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}/>)
  }
  render() {
    return <div className="ui cards">{this.genPet()}</div>
  }
}

export default PetBrowser
