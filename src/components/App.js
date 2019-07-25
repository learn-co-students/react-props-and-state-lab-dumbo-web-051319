import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }

  componentDidMount() {
    fetch("/api/pets")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pets: data
      })
    })
  }

  onChangeType = (event) => {
    this.setState({
      filters: {...this.state.filters, type: event.target.value}
    })
  }

  onFindPetsClick = () => {
    let type = this.state.filters.type
    if(type === "all") {
      fetch("/api/pets")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
    } else {
      fetch(`/api/pets?type=${type}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
    }
  }

  onAdoptPet = (id) => {
    let updatedPets = this.state.pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet
    })
    this.setState({
      pets: updatedPets
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
              <Filters changeFilter={this.changeFilter} findPets={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser data={this.state.pets}  onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
