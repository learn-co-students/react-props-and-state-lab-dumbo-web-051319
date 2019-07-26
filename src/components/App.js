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

    onChangeType = event => {
      // console.log(event.target.value);
      this.setState({
        filters: {...this.state.filters, type: event.target.value}
      })
    }

    onFindPetsClick = event => {
      // debugger
      // this.state.filters === {type:'all'}
      if(this.state.filters.type === 'all'){
        fetch('/api/pets')
        .then(resp=>resp.json())
        .then(data => this.setState({pets:data}))
      }
      if(this.state.filters.type === 'cat'){
        fetch('/api/pets?type=cat')
        .then(resp=>resp.json())
        .then(data => this.setState({pets:data}))
      }
      if(this.state.filters.type === 'dog'){
        fetch('/api/pets?type=dog')
        .then(resp=>resp.json())
        .then(data => this.setState({pets:data}))
      }
      if(this.state.filters.type === 'micropig'){
        fetch('/api/pets?type=micropig')
        .then(resp=>resp.json())
        .then(data => this.setState({pets:data}))
      }
    }

    onAdopt = selectedPet=> {
      const id= selectedPet.id
      const newAdoptionStatus =
        this.state.pets.map(pet => {
        return pet.id === id ? {...pet,isAdopted: !pet.isAdopted}: pet
      })
      this.setState({
        pets: newAdoptionStatus
      })



      // fetch(`/api/pets/${pet.id}`,{
      //   method: 'PATCH',
      //   headers: {'content-type': 'application/json'},
      //   body: JSON.stringify({
      //     isAdopted: !pet.isAdopted
      //   })
      // })
      // .then(rsp => rsp.json())
      // .then(data => this.setState({
      //
      // }))
    }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter
          </h1>
        </header>

        <div className="ui container">
          <div className="ui grid">

            <div className="four wide column">
              <Filters
              onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}/>
            </div>

            <div className="twelve wide column">
              <PetBrowser
              data={this.state.pets}
              onAdopt={this.onAdopt}/>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App
