import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  // state = {
  //   isAdopted: ''
  // }
  //
  // onAdopt = () => {
  //   this.setState({
  //     isAdopted:
  //   })
  // }

  loadPets= () => {
    return this.props.data.map(pet => {
      return (<Pet
      key={pet.id}
      pet={pet}
      onAdopt={this.props.onAdopt}/>)
    })
  }

  render() {
    return <div className="ui cards">
    {this.loadPets()}
    </div>
  }
}

export default PetBrowser
