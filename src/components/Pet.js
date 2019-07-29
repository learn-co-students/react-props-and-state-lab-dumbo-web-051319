import React from 'react';

class Pet extends React.Component {

  adoptMe = () => {
    if (this.props.isAdopted === true) {
      return <button className="ui disabled button">Already adopted</button>
    }
    return <button onClick={() => this.props.onAdoptPet(this.props.id)} className="ui primary button"> Adopt pet </button>
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.name}{' '}
            {this.props.gender === 'female' ? '♀' : '♂'}
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
          {this.adoptMe()}
        </div>
      </div>
    );
  }
}

export default Pet;
