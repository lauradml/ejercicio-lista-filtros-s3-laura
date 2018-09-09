import React from 'react';

class Repo extends React.Component {
  render(){
      const{name, description, language}= this.props.item;
    return (
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{language}</p>
      </div>

    );
  }
}

export default Repo;
