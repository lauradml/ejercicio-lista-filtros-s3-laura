import React from 'react';
import {Link} from 'react-router-dom';

class RepoDetail extends React.Component {
  languages(language){
    if(language === 'CSS'){
      return <p> <span> 🔵</span> CSS</p>
    }
    else if(language === 'HTML'){
        return <p> <span> ⚫</span> HTML </p>
    }
    else if(language === 'JavaScript'){
      return <p> <span> 🔴</span> JavaScript </p>
    }else{
      return <p> <span> ⚪</span> Shell </p>
    }
  }
  ren

  render(){
const {name, description, language, stargazers_count, watchers, forks} = this.props.repos.find(i => i.id === parseInt(this.props.match.params.id));
      return (
        <div className='container-detail' >
          <div className={'app-item-detail'} >
              <h2 className='title-detail'>{name}</h2>
              <p>{description}</p>
              {this.languages(language)}
              <p><span>⭐</span>: {stargazers_count}</p>
              <p>Observadores: {watchers}</p>
              <p>Forks: {forks}</p>
              <Link to="/" className="back-btn"> Return </Link>

          </div>
        </div>
      );
  }
}

export default RepoDetail;
