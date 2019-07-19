import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  getFilter = (filter) => {
    this.setState({
      filters: {
        type: filter
      }
    })
  }

  findPets = () => {
    let filter = "pets"
    if (this.state.filters.type !== "all") {
      filter = `pets?type=${this.state.filters.type}`
    }
    fetch(`/api/${filter}`)
      .then(rsp => rsp.json())
      .then(data => this.setState({pets: data}))
  }
  adoptPet = (petId) => {
    let newPets = [...this.state.pets]
    newPets.map(pet => {
      if (pet.id === petId) {
        let adoptedPet = pet
        adoptedPet.isAdopted = true
        return adoptedPet
      }
      return pet
    })
    this.setState({
      pets: newPets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.getFilter} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
