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

  onChangeType = (newType) => {
    const newFilters = {...this.state.filters}
    newFilters.type = newType
    this.setState({
      filters: newFilters
    })
  }

  onFindPetsClick = () => {
    const url = "/api/pets"
    const type = this.state.filters.type
    if (type === "all") {
      fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({
        pets: pets
        }))
    } else {
      fetch(url + `?type=${type}`)
      .then(res => res.json())
      .then(pets => this.setState({
        pets: pets
        }))
    }
  }

  onAdoptPet = (petId) => {
    const newPets = [...this.state.pets]
    const arrayId = newPets.findIndex(pet => pet.id === petId)
    newPets[arrayId].isAdopted = true
    this.setState({
      pets: newPets
      })
  }

  render() {
    console.log(this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} currentType={this.state.filters.type}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
