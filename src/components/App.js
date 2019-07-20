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

  componentDidMount = () => {
    fetch('/api/pets')
      .then(res => res.json())
      .then(this.animalArray)
  }

  onChangeType = (filterType) => {
    this.setState({
      filters: { type: filterType }
    })
  }

  onAdoptPet = (event) => {
    debugger
    console.log(event)
  }

  animalArray = (animals) => {
    this.setState({
      pets: animals
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === "all") {
      fetch('/api/pets')
      .then(res => res.json())
      .then(this.animalArray)
    } else if (this.state.filters.type === "cat") {
      fetch('/api/pets?type=cat')
      .then(res => res.json())
      .then(this.animalArray)
    } else if (this.state.filters.type === "dog") {
    fetch('/api/pets?type=dog')
      .then(res => res.json())
      .then(this.animalArray)
    } else if (this.state.filters.type === "micropig") {
      fetch('/api/pets?type=micropig')
      .then(res => res.json())
      .then(this.animalArray)
    }
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
              <Filters 
                selectedType={this.state.filters.type}
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                onAdoptPet={this.onAdoptPet}
                selectedPets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
