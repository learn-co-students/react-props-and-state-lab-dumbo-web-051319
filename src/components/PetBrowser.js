import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderCards = () => {
    return this.props.pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/>)
  }

  render() {
    return <div className="ui cards">
    <ul>PET COMPONENT SHOULD GO HERE{this.renderCards()}</ul></div>
  }
}

export default PetBrowser
