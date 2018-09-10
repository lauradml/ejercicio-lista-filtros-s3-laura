import React from 'react';
import {Link} from 'react-router-dom';
class Repo extends React.Component {
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
  render(){

      const{name, description, language}= this.props.item;
    return (
      <React.Fragment>
        <Link to={`/repoDetail/${this.props.item.id}`} >
          <h2>{name}</h2>
        </Link>
        <p>{description}</p>
        <p> {this.languages(language)}</p>
      </React.Fragment>

    );
  }
}

export default Repo;
