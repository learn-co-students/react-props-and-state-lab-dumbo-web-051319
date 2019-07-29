
import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    console.log(this.props)
    const renderPets = () => {
      return this.props.pets.map((pet, i) => {
        return <Pet {...pet} key={i} onAdoptPet={this.props.onAdoptPet}/>
      })
    }
    return <div className="ui cards">{renderPets()}</div>
  }
}

export default PetBrowser
