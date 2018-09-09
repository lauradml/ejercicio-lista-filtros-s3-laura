import React from 'react';
import {Link} from 'react-router-dom';

class RepoDetail extends React.Component {

  render(){
const {name, description, language, stargazers, watchers, forks} = this.props.repos.find( (i) => i.id === this.props.match.params.id);

      return (
        <div className='container-detail' >
          <div className={'app-item-detail'} >
              <h2 className='title-detail'>{name}</h2>
              <p>{description}</p>
              <p>{language}</p>
              <p>Número de estrellas: {stargazers}</p>
              <p>Número de observadores: {watchers}</p>
              <p>Número de forks: {forks}</p>
              <Link to="/" className="back-btn"> Volver </Link>

          </div>
        </div>
      );
  }
}

export default RepoDetail;
