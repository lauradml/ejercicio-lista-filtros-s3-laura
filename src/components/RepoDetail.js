import React from 'react';
import {Link} from 'react-router-dom';

class RepoDetail extends React.Component {
  render(){
    const {name, description, language, stargazers, watchers, forks} = this.props.repos[this.props.match.params.id];

      return (
        <div className='container-detail' >
          <div className={'app-item-detail'} >
              <h2 className='title-detail'>{name}</h2>
              <p>{description}</p>
              <p>{language}</p>
              <p>{stargazers}</p>
              <p>{watchers}</p>
              <p>{forks}</p>
              <Link to="/" className="back-btn"> Volver </Link>

          </div>
        </div>
      );
  }
}

export default RepoDetail;
