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

  onChangeType = (term) => {
    this.setState({ filters:
      { type: term }
    })
  }

fetchPets = () => {
  let fetchUrl = '/api/pets';

   if (this.state.filters.type !== 'all') {
     fetchUrl = `/api/pets?type=${this.state.filters.type}`;
   }

   fetch(fetchUrl)
     .then(res => res.json())
     .then(pets => this.setState({ pets }));
}

onAdoptPet = petId => {
  this.state.pets.map( pet => {
    if (pet.id === petId) {
      let adoptedPet = pet
      adoptedPet.isAdopted = true
      return adoptedPet
    }
      return pet
  })
    this.setState({ pets: [...this.state.pets]})
 };

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
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets}/>
            </div>

            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App


//NOT NEEDED
// filteredPets = (term) => {
// if (this.state.filters.type === "all") {
//     return this.state.pets
//   } else {
//     return this.state.pets.filter(pet => pet.type === this.state.filters.type)
//   }
// }
