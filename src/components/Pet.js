import React from 'react'

class Pet extends React.Component {
  state = {
    id: this.props.pet.id
  }
  petGender = () => {
    if (this.props.pet.gender === "female") {
      return '♀'
    } else {
      return '♂'
    }
  }
  ifAdopted = () => {
    if (this.props.isAdopted === true) {
      return <button className="ui disabled button">Already adopted</button>

    }
    return <button onClick={this.handleClick} className="ui primary button">Adopt pet</button>
  }
  handleClick = () => {
    this.props.onAdoptPet(this.state.id)
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.petGender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.ifAdopted()}
        </div>
      </div>
    )
  }
}

export default Pet
