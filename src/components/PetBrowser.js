import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  makePets = () => {
    return this.props.data.map(pet => <Pet key={pet.id} onAdoptPet={this.props.onAdoptPet} petInfo={pet} button={this.props.button}/>)
  }
  render() {
    return <div className="ui cards">{this.makePets()}</div>
  }
}

export default PetBrowser
