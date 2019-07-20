import React from 'react'

class Pet extends React.Component {
  
  onClick = (event) => {
    this.props.onAdoptPet(event)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.gender === "male" ? '♂ ' : '♀ '}
            {/*'♀' OR '♂' */}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted === true ? 
            <button className="ui disabled button">Already adopted</button> :
            <button id={this.props.id} onClick={this.onClick} className="ui primary button">Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
