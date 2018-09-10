import React from 'react';
import {Link} from 'react-router-dom';
class Repo extends React.Component {
  render(){
      const{name, description, language}= this.props.item;
    return (
      <div>
        <Link to={`/repoDetail/${this.props.item.id}`} >
          <h2>{name}</h2>
        </Link>
        <p>{description}</p>
        <p>{language}</p>
      </div>

    );
  }
}

export default Repo;
